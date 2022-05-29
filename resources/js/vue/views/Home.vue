<template>
    <div>
        <template v-if="loaded === null">
            Идет загрузка...
        </template>
        <template v-else-if="loaded === false">
            Произошла ошибка при загрузке
        </template>
        <template v-else>
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
                <template #actions="{item}">
                    <b-button @click.prevent="openPlayModal(item)">
                        <font-awesome-icon :icon="['fas', 'play']"/>
                    </b-button>
                </template>
            </b-table>
        </template>
        <b-modal id="playModal" size="lg">
            <template #header>Прослушать</template>
            <template #default>
                <template v-if="item">
                    <span v-for="(word, index) in words"
                          :key="index"
                          v-text="' ' + word"
                          :class="{'bg-warning': index === activeWord}"
                    />
                    <hr>
                    <b-button @click="play" :class="{'disabled': playing}">
                        Прослушать
                    </b-button>
                </template>
            </template>
            <template #footer>
                <b-button variant="secondary" @click.prevent="closePlayModal">
                    Закрыть
                </b-button>
            </template>
        </b-modal>
    </div>
</template>

<script>
import Spinner from "@/components/Spinner";
import {onMounted, ref} from "vue";
import BTable from "@/components/Bootstrap/BTable";
import BButton from "@/components/Bootstrap/BButton";
import BModal from "@/components/Bootstrap/BModal";
import {open, close} from "@/components/Bootstrap/BModalConfig";

export default {
    name: "Home",
    components: {BModal, BButton, BTable},
    setup() {
        const data = ref([]);
        const loaded = ref(null);
        const links = ref([]);
        const totalDataCount = ref(0);

        async function getData(url = '/api/data') {
            Spinner.start();
            const axiosUrl = url === '/api/data'
                ? `${url}?active`
                : `${url}&active`;
            await axios
                .get(axiosUrl)
                .then(r => {
                    if (r.data.success) {
                        data.value = r.data.data['data'] ?? [];
                        links.value = r.data.data['links'] ?? [];
                        totalDataCount.value = r.data.data['total'] ?? [];
                        loaded.value = true;
                    }
                })
                .catch(() => {
                    loaded.value = false;
                })
                .finally(() => {
                    Spinner.finish();
                })
        }

        function getLabel(label) {
            if (label === 'pagination.previous') return '«';
            if (label === 'pagination.next') return '»';
            return label;
        }

        onMounted(getData);

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
                label: "Текст",
                key: 'text'
            },
            {
                label: "Действия",
                key: 'actions'
            },
        ];

        const item = ref(null);

        function openPlayModal(i) {
            item.value = {...i};
            words.value = i.text.split(' ');
            open('playModal');
        }

        const closePlayModal = () => close('playModal');

        const words = ref([]);
        const activeWord = ref(null);
        const audio = ref(null);
        const playing = ref(false);
        const loadedAudio = ref(null);

        function play() {
            if (audio.value === null || audio.value.paused) {
                if (loadedAudio.value !== item.value.file) {
                    loadedAudio.value = item.value.file;
                    audio.value = new Audio(`/api/data/audio/${item.value.file}`);
                    audio.value.oncanplaythrough = () => {
                        audio.value.play();
                        audio.value.onplay = () => {
                            playing.value = true;
                            activeWord.value = 0;
                            for (let i = 0; i < item.value.sync.length; i++) {
                                setTimeout(() => {
                                    activeWord.value = i;
                                }, item.value.sync[i] * 1000);
                            }
                        }
                        audio.value.onpause = () => {
                            playing.value = false;
                            activeWord.value = null;
                        }
                    };
                } else if (audio.value !== null) audio.value.play();
            }
        }

        return {
            loaded,
            data,
            links,
            totalDataCount,
            getLabel,
            getData,
            fields,
            item,
            openPlayModal,
            closePlayModal,
            activeWord,
            words,
            play,
            playing,
            audio
        }
    }
}
</script>

<style scoped>

</style>
