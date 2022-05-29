<template>
    <div>
        <div class="w-100 mb-2" style="overflow-x: auto">
            <table class="table table-responsive" :class="{'table-bordered': bordered}" v-if="computedFields.length">
                <thead>
                <tr>
                    <th v-for="field in computedFields" :key="field['key']">
                        {{ field["label"] }}
                    </th>
                </tr>
                </thead>
                <tbody v-if="computedOptions.length">
                <tr v-for="(option, idx) in computedOptions" :key="idx">
                    <td v-for="(field, index) in computedFields" :key="index">
                        <slot
                            :name="field['key']"
                            :value="option[field['key']]"
                            :key="field['key']"
                            :item="option"
                            :index="idx"
                        >
                            {{ option[field["key"]] }}
                        </slot>
                    </td>
                </tr>
                </tbody>
                <tbody v-else>
                <tr>
                    <td :colspan="computedFields.length">Данных нет</td>
                </tr>
                </tbody>
            </table>
            <div v-else>Пусто</div>
        </div>
    </div>
</template>

<script>
import {computed} from "vue";

export default {
    name: "BTable",
    props: {
        options: Array,
        fields: Array,
        bordered: {
            type: Boolean,
            default: () => true
        }
    },
    setup(props) {
        const computedOptions = computed(() => props.options);
        const computedFields = computed(() => {
            try {
                if (props.fields) return props.fields;
                if (!props.options.length) return [];
                return Object.entries(props.options[0]).map((i) => {
                    return {
                        label: i[0]
                            .split("_")
                            .map((i) => {
                                return capitalizeFirstLetter(i);
                            })
                            .join(" "),
                        key: i[0],
                    };
                });
            } catch {
                return [];
            }
        });

        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

        return {
            computedOptions,
            computedFields,
        };
    },
};
</script>

<style scoped></style>
