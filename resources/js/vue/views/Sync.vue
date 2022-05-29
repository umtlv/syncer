<template>
    <div v-if="id">
        <template v-if="success === null">
            Поиск...
        </template>
        <template v-else-if="success === false">
            Запись не найдена
        </template>
        <template v-else>
            <div class="alert alert-info">
                Необходимо нажать на кнопку Начать для того, чтобы начать запись и нажать на Остановить, чтобы
                зафиксировать время. По мере фиксирования, текст будет закрашиваться желтым цветом.
            </div>
            <div class="mb-2">
                <div class="m-1 fw-bolder">Выберите скорость:</div>
                <b-button variant="info" @click="slower" class="m-1">Медленная</b-button>
                <b-button variant="info" @click="normal" class="m-1">Нормальная</b-button>
            </div>
            <div class="m-1 fw-bolder">Выберите действие:</div>
            <b-button @click="play" class="m-1">
                {{ paused ? 'Начать' : 'Остановить' }}
            </b-button>
            <b-button variant="danger" @click="clear" class="m-1">Очистить и начать сначала</b-button>
            <b-button variant="success" @click="save" class="m-1">Сохранить</b-button>
            <hr>
            <template v-for="(word, index) in computedWords" :key="index">
                <span v-text="' ' + word.word" :class="{'bg-warning': word.color}"/>
            </template>
        </template>
    </div>
</template>

<script>
import router from "@/router";
import {computed, onMounted, ref} from "vue";
import BButton from "@/components/Bootstrap/BButton";
import Toast from "@/components/Toast";
import Spinner from "@/components/Spinner";

export default {
    name: "Sync",
    components: {BButton},
    setup() {
        const id = computed(() => router.currentRoute.value.params.id);
        const path = '/api/data';
        const item = ref(null);
        const success = ref(null);
        const words = ref([]);
        const audio = ref();
        const audioDuration = ref(0);

        async function getData() {
            Spinner.start();
            await axios
                .get(`${path}/${id.value}`)
                .then(r => {
                    if (r.data.success) {
                        item.value = r.data.data;
                        if (!Array.isArray(item.value.sync)) item.value.sync = [];
                        words.value = item.value.text.split(' ');
                        success.value = true;
                        audio.value = new Audio(`/api/data/audio/${item.value.file}`);
                        audio.value.onloadedmetadata = () => {
                            audioDuration.value = audio.value.duration;
                            audio.value.addEventListener("pause", onPause);
                        }
                    } else success.value = false;
                })
                .catch(() => {
                    success.value = false
                })
                .finally(() => {
                    Spinner.finish();
                });
        }

        function onPause() {
            item.value.sync.push(this.currentTime);
        }

        const paused = ref(true);

        const play = () => {
            if (words.value.length === item.value.sync.length) return;
            if (audio.value.paused) {
                audio.value.play();
                paused.value = false;
            } else {
                audio.value.pause();
                paused.value = true;
            }
        };
        const clear = () => {
            audio.value.pause();
            audio.value.currentTime = 0;
            item.value.sync = [];
        };
        const slower = () => audio.value.playbackRate = 0.5;
        const normal = () => audio.value.playbackRate = 1;

        onMounted(() => {
            getData();
        });

        const computedWords = computed(() => {
            return words.value.map((i, index) => ({
                word: i,
                color: index < item.value.sync.length
            }));
        });

        function save() {
            if (words.value.length !== item.value.sync.length) return;
            Spinner.start();
            axios.post(`${path}/sync`, {
                id: item.value.id,
                sync: item.value.sync
            })
                .then(r => {
                    if (r.data.success) {
                        router.push('/admin')
                    }
                })
                .catch((e) => {
                    Toast(e.response.data.message);
                })
                .finally(() => {
                    Spinner.finish();
                });
        }

        return {
            id,
            success,
            item,
            computedWords,
            play,
            clear,
            slower,
            normal,
            save,
            paused
        }
    }
}
</script>

<style scoped>

</style>
