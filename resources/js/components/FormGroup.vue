<script setup>
defineProps(["title"]);
</script>
<template>
  <div class="mb-3">
    <label
      class="form-label"
      v-if="title"
      v-html="title"
    ></label>
    <slot></slot>
  </div>
</template>