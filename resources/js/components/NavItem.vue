<script setup>
import { useRoute } from "vue-router";
const props = defineProps(["href", "title"]);
const route = useRoute();
function isActive() {
  const href = props.href;
  const path = route.path;
  if (Array.isArray(href)) {
    return href.includes(path);
  } else {
    return href == path;
  }
}

function linkTo() {
  const href = props.href;
  return Array.isArray(href) ? href[0] : href;
}
</script>
<template>
  <li class="nav-item">
    <router-link
      class="nav-link"
      :to="linkTo()"
      :class="{ active: isActive() }"
    >
      {{ title }}
    </router-link>
  </li>
</template>