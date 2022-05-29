<template>
    <div class="row mb-2">
        <label
            :for="id"
            class="form-label label-class col-sm-12 col-md-4 col-lg-4 col-xl-4"
            v-text="label"
        />
        <div class="col-sm-12 col-md-8 col-lg-8 col-xl-8">
            <slot :id="id"/>
            <div class="small text-muted" v-if="description" v-text="description"/>
        </div>
    </div>
</template>

<script>
export default {
    name: "BFormGroup",
    props: {
        label: String,
        description: String,
        id: {
            type: String,
            default: () => "id" + Math.random().toString(),
        },
    },
};
</script>

<style scoped></style>
