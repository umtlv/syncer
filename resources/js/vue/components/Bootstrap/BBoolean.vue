<template>
    <div class="form-check form-switch" :class="!description ? 'mb-2' : ''">
        <input
            v-model="computedValue"
            class="form-check-input"
            type="checkbox"
            :id="id"
        />
        <label class="form-check-label" :for="id" v-if="label">
            {{ label }}
        </label>
    </div>
    <small v-if="description" class="text-muted" :class="description ? 'mb-2' : ''" v-text="description"/>
</template>

<script>
import {computed} from "vue";

export default {
    name: "BBoolean",
    props: {
        modelValue: {},
        id: String,
        label: String,
        description: {
            type: String,
            default: () => null
        }
    },
    emits: ["update:modelValue"],
    setup(props, {emit}) {
        const computedValue = computed({
            get: () => props.modelValue,
            set: (v) => emit("update:modelValue", v),
        });

        return {
            computedValue,
        };
    },
};
</script>

<style scoped></style>
