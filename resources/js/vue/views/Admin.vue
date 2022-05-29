<template>
    <div>
        <b-button @click="openAddModal()" class="mb-2">Добавить</b-button>
        <nav>
            <ul class="pagination">
                <li class="page-item" v-for="(link, index) in links"
                    :class="{'disabled': link['url'] === null, 'active': link['active']}"
                    :key="index"
                >
                    <a class="page-link" href="#" @click.prevent="getData(link['url'])">
                        {{ getLabel(link['label']) }}
                    </a>
                </li>
                <li class="page-item disabled">
                    <a href="#" class="page-link">
                        Всего записей: {{ totalDataCount }}
                    </a>
                </li>
            </ul>
        </nav>
        <b-table :options="data" :fields="fields">
            <template #sync="{value}">
                {{ value ? 'Да' : 'Нет' }}
            </template>
            <template #actions="{item}">
                <router-link :to="`/admin/sync/${item.id}`" class="btn btn-info btn-sm m-1">
                    <font-awesome-icon :icon="['fas', 'arrows-rotate']"/>
                </router-link>
                <b-button size="sm" variant="info" class="m-1" @click="openListenModal(item.id)">
                    <font-awesome-icon :icon="['fas', 'play']"/>
                </b-button>
                <b-button size="sm" variant="secondary" class="m-1" @click="openAddModal(item.id)">
                    <font-awesome-icon :icon="['fas', 'edit']"/>
                </b-button>
                <b-button size="sm" variant="danger" class="m-1" @click="deleteItem(item.id)">
                    <font-awesome-icon :icon="['fas', 'trash']"/>
                </b-button>
            </template>
        </b-table>
        <b-modal id="addModal" size="xl">
            <template v-slot:header>Добавить</template>
            <template v-slot:default>
                <b-form-group label="Название">
                    <template #default="{id}">
                        <b-input v-model="item.title" :id="id"/>
                    </template>
                </b-form-group>
                <b-form-group label="Текст">
                    <template #default="{id}">
                        <b-input
                            :description="item.id ? 'При изменении текста, необходимо заново сделать синхронизацию' : ''"
                            v-model="item.text" :id="id" type="textarea" :textarea-rows="5"/>
                    </template>
                </b-form-group>
                <b-form-group label="Файл" v-if="!item.id" id="audioFile">
                    <template #default="{id}">
                        <input type="file" :id="id" class="form-control" @change="change" accept="audio/mp3">
                    </template>
                </b-form-group>
            </template>
            <template v-slot:footer>
                <b-button variant="secondary" @click="closeAddModal">
                    Закрыть
                </b-button>
                <b-button @click.prevent="createOrUpdate">
                    {{ item.id ? 'Изменить' : 'Добавить' }}
                </b-button>
            </template>
        </b-modal>
        <b-modal id="listenModal" size="xl" closeable hide-footer>
            <template v-slot:header>Прослушать</template>
            <template v-slot:default>
                <template v-if="item">
                    <audio :src="`/api/data/audio/${item.file}`" controls/>
                    <hr>
                    {{ item.text }}
                </template>
            </template>
        </b-modal>
    </div>
</template>

<script>
import {onMounted, ref} from "vue";
import BButton from "@/components/Bootstrap/BButton";
import BModal from "@/components/Bootstrap/BModal";
import {open, close} from "@/components/Bootstrap/BModalConfig";
import BTable from "@/components/Bootstrap/BTable";
import BFormGroup from "@/components/Bootstrap/BFormGroup";
import BInput from "@/components/Bootstrap/BInput";
import Toast from "@/components/Toast";
import axios from "axios";
import Spinner from "@/components/Spinner";

export default {
    name: "Admin",
    components: {BInput, BFormGroup, BTable, BModal, BButton},
    setup() {
        const data = ref([]);
        const path = '/api/data';
        const links = ref([]);
        const totalDataCount = ref(0);

        async function getData(url = path) {
            Spinner.start();
            await axios.get(url)
                .then(r => {
                    if (r.data.success) {
                        data.value = r.data.data['data'] ?? [];
                        links.value = r.data.data['links'] ?? [];
                        totalDataCount.value = r.data.data['total'] ?? [];
                    }
                })
                .finally(() => {
                    Spinner.finish();
                });
        }

        const defaultItem = {
            id: null,
            title: null,
            file: null,
            text: null,
            sync: [],
            visible: false
        };
        const item = ref({});
        const file = ref(null);

        onMounted(getData);

        function setItem(id) {
            if (id) {
                const search = data.value.find(i => i['id'] === id);
                item.value = {...search};
            } else item.value = {...defaultItem};
        }

        function openAddModal(id = null) {
            setItem(id);
            open('addModal');
        }

        const closeAddModal = () => {
            file.value = null;
            close('addModal');
        }

        async function deleteItem(id) {
            confirm("Вы уверены, что хотите удалить эту запись?")
            {
                Spinner.start();
                await axios.post(`${path}/delete`, {
                    id
                })
                    .then(r => {
                        if (r.data.success) {
                            closeAddModal();
                            getData();
                        }
                    })
                    .catch(e => Toast(e.response.data.message))
                    .finally(() => {
                        Spinner.start();
                    });
            }
        }

        const fields = [
            {
                label: "ID",
                key: 'id'
            },
            {
                label: "Название",
                key: 'title'
            },
            {
                label: "Синхронизация",
                key: 'sync'
            },
            {
                label: "Действия",
                key: 'actions'
            },
        ];

        const createOrUpdate = () => {
            if (item.value['id']) update();
            else create();
        }

        async function update() {
            if (!item.value['text'] || !item.value['title']) {
                Toast('Заполните текст и название');
                return;
            }

            Spinner.start();
            await axios.post(`${path}/update`, {
                'id': item.value['id'],
                'text': item.value['text'],
            })
                .then(r => {
                    if (r.data.success) {
                        closeAddModal();
                        getData();
                    }
                })
                .catch(e => Toast(e.response.data.message))
                .finally(() => {
                    Spinner.finish();
                });
        }

        async function create() {
            if (!item.value['text'] || !item.value['title']) {
                Toast('Заполните текст и название');
                return;
            }

            if (!file.value) {
                Toast('Выберите файл');
                return;
            }

            const form = new FormData();
            form.append('text', item.value['text']);
            form.append('title', item.value['title']);
            form.append('audio', file.value, 'audio');

            Spinner.start();
            await axios.post(`${path}/create`, form, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(r => {
                    if (r.data.success) {
                        closeAddModal();
                        getData();
                    }
                })
                .catch(e => Toast(e.response.data.message))
                .finally(() => {
                    Spinner.finish();
                });
        }

        function change({target, dataTransfer}) {
            const files = target.files || dataTransfer.files;
            if (!files.length) return false;
            file.value = files[0];
        }

        const openListenModal = (id) => {
            setItem(id);
            open('listenModal')
        };

        function getLabel(label) {
            if (label === 'pagination.previous') return '«';
            if (label === 'pagination.next') return '»';
            return label;
        }

        return {
            data,
            fields,
            item,
            file,
            openAddModal,
            closeAddModal,
            deleteItem,
            createOrUpdate,
            change,
            openListenModal,


            links,
            totalDataCount,
            getLabel,
            getData
        }
    }

}
</script>

<style scoped>

</style>
