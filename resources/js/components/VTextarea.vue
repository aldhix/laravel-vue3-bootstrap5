<script setup>
import { computed } from "vue";

const props = defineProps(["modelValue", "error"]);
const emit = defineEmits(["update:modelValue"]);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <textarea
    v-model="value"
    v-bind="$attrs"
    class="form-control"
    :class="{ 'is-invalid': error }"
  ></textarea>
  <div class="invalid-feedback" v-if="error" v-html="error[0]"></div>
</template>