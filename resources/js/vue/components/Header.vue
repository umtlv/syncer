<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light nav-nur mb-4">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/">
                <font-awesome-icon :icon="['fas', 'arrows-rotate']"/>
                {{ title }}
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Главная</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/admin">Админ панель</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "HeaderComponent",
    props: {
        title: {
            type: String,
            default: () => "Syncer",
        },
    },
};
</script>

<style scoped>
.nav-nur {
    background-color: #fff !important;
    box-shadow: 0 0.46875rem 2.1875rem rgb(4 9 20 / 3%),
    0 0.9375rem 1.40625rem rgb(4 9 20 / 3%),
    0 0.25rem 0.53125rem rgb(4 9 20 / 5%), 0 0.125rem 0.1875rem rgb(4 9 20 / 3%);
}
</style>
