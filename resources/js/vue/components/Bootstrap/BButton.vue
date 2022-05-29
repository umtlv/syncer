<template>
    <button :type="type" class="btn" :class="`btn-${variant} btn-${size}`">
        <slot />
    </button>
</template>

<script>
export default {
    name: "BButton",
    props: {
        type: {
            type: String,
            default: () => "button",
        },
        variant: {
            type: String,
            default: () => "primary",
        },
        size: {
            type: String,
            default: () => "md",
        },
    },
};
</script>

<style scoped></style>
