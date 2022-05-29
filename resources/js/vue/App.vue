<template>
    <component :is="layout"/>
</template>

<script>
import {computed} from "vue";
import router from "@/router";
import MainLayout from "@/layouts/MainLayout";
import EmptyLayout from "@/layouts/EmptyLayout";

export default {
    components: {
        MainLayout,
        EmptyLayout,
    },
    setup() {
        const layout = computed(() => {
            try {
                const meta = router.currentRoute.value["meta"]['layout'] ?? "empty";
                return `${meta}-layout`;
            } catch {
                return "empty-layout";
            }
        });

        return {
            layout,
        };
    },
};
</script>

<style></style>
