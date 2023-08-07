<script setup>
    const props = defineProps(['title'])
</script>
<template>
    <h1 v-html="title" v-if="title"></h1>
    <hr v-if="title">
    <slot></slot>
</template>