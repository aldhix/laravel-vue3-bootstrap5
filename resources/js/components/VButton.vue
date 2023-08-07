<script setup>
const props = defineProps(["title", "type"]);
</script>
<template>
  <button
    :type="type ?? `button`"
    class="btn btn-primary"
    v-html="title"
  ></button>
</template>