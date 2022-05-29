<template>
    <textarea
        v-if="type === 'textarea'"
        :id="id"
        class="form-control"
        :class="{'is-valid': state === true, 'is-invalid': state === false}"
        :rows="textareaRows"
        v-model="computedValue"
        :required="required"
        @focusout="focused"
        :placeholder="placeholder"
        :disabled="disabled"
    />
    <input
        v-else
        :id="id"
        :type="type"
        class="form-control"
        :class="{'is-valid': state === true, 'is-invalid': state === false}"
        :autocomplete="type === 'password' ? 'current-password' : 'off'"
        :inputmode="type === 'number' ? 'numeric' : ''"
        v-model="computedValue"
        :required="required"
        @focusout="focused"
        :placeholder="placeholder"
        :disabled="disabled"
    />
    <small v-if="description" class="text-muted" v-text="description"/>
</template>

<script>
import {computed} from "vue";

export default {
    name: "BInput",
    props: {
        modelValue: {},
        id: String,
        type: {
            type: String,
            default: () => "text",
        },
        required: {
            type: Boolean,
            default: () => false,
        },
        textareaRows: {
            type: Number,
            default: () => 3,
        },
        description: {
            type: String,
            default: () => null
        },
        state: {
            type: Boolean,
            default: () => null
        },
        placeholder: {
            type: String,
            default: () => null
        },
        disabled: {
            type: Boolean,
            default: () => false
        }
    },
    emits: ["update:modelValue", "focused"],
    setup(props, {emit}) {
        const computedValue = computed({
            get: () => props.modelValue,
            set: (v) => emit("update:modelValue", v),
        });

        function focused() {
            emit('focused');
        }

        return {
            computedValue,
            focused
        };
    },
};
</script>

<style scoped></style>
