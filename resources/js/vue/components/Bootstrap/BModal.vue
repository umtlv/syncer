<template>
    <teleport to="body">
        <div
            :id="id"
            class="modal"
            :class="{ show: isOpen || show }"
            :style="`background-color:rgba(0, 0, 0, ${opacity}); z-index: ${zIndex}`"
            @click="bgClick"
            ref="modal"
        >
            <div
                v-if="isActive || show"
                class="modal-dialog"
                :class="{
          [modalSize]: true,
          'modal-dialog-centered': centered,
        }"
            >
                <div class="modal-content">
                    <div class="modal-header" v-if="!hideHeader">
                        <slot name="header">Модальное окно</slot>
                    </div>
                    <div class="modal-body">
                        <slot/>
                    </div>
                    <div class="modal-footer" v-if="!hideFooter">
                        <slot name="footer">
                            <button
                                class="btn btn-sm btn-secondary m-r-5"
                                @click.prevent="cancel"
                                v-if="!okOnly"
                            >
                                Закрыть
                            </button>
                            <button
                                class="btn btn-sm btn-primary"
                                @click.prevent="accept"
                                v-if="!cancelOnly"
                            >
                                Принять
                            </button>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </teleport>
</template>

<script>
import BModalConfig from "@/components/Bootstrap/BModalConfig.js";
import {ref, onUnmounted, computed} from "vue";

export default {
    name: "BModal",
    emits: ["closed", "accept", "cancel", "open"],
    props: {
        id: {
            type: String,
            default: () => Math.random().toString(),
        },
        size: {
            type: String,
            default: () => "md",
        },
        opacity: {
            type: String,
            default: () => "0.7",
        },
        closeable: {
            type: Boolean,
            default: () => false,
        },
        okOnly: {
            type: Boolean,
            default: () => false,
        },
        cancelOnly: {
            type: Boolean,
            default: () => false,
        },
        hideHeader: {
            type: Boolean,
            default: () => false,
        },
        hideFooter: {
            type: Boolean,
            default: () => false,
        },
        centered: Boolean,
        show: Boolean,
    },
    setup(props, {emit}) {
        function accept() {
            emit("closed");
            emit("accept");
            BModalConfig.close(props.id);
        }

        function cancel() {
            emit("closed");
            emit("cancel");
            BModalConfig.close(props.id);
        }

        function bgClick(e) {
            const id = e.target.id;
            if (!props.closeable) return false;
            if (id === props.id) {
                BModalConfig.close(id);
                emit("closed");
                emit("cancel");
            }
        }

        const modal = ref(null);

        const isOpen = ref(false);
        const isActive = ref(false);
        const zIndex = ref(0);

        function open({detail}) {
            if (detail.id === props.id) {
                isOpen.value = true;
                isActive.value = true;
                zIndex.value = detail.index;
                emit("open");
            }
        }

        function close({detail}) {
            if (detail.id === props.id) {
                isOpen.value = false;
                isActive.value = false;
                emit("closed");
            }
        }

        window.addEventListener("openModal", open);
        window.addEventListener("closeModal", close);
        onUnmounted(() => {
            window.removeEventListener("openModal", open);
            window.removeEventListener("closeModal", close);
        });

        const modalSize = computed(() => `modal-${props.size}`);

        return {
            cancel,
            accept,
            bgClick,
            modal,
            isOpen,
            isActive,
            zIndex,
            modalSize,
        };
    },
};
</script>

<style scoped>
.modal.show {
    display: block !important;
}
</style>
