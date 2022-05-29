<template>
    <Header/>
    <div class="container">
        <router-view/>
    </div>
</template>

<script>
import Header from "@/components/Header";

export default {
    name: "MainLayout",
    components: {Header},
};
</script>

<style scoped></style>
