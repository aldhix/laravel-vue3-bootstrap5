<script setup>
import { ref } from 'vue';
import NavItem from '../NavItem.vue';
const appName = ref(import.meta.env.VITE_APP_NAME)

</script>
<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container">
      <a class="navbar-brand" href="/">{{ appName }}</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <nav-item title="Home" href="/" />
          <nav-item title="About" :href="['/about']" />
          <nav-item title="Form" :href="'/form'" />
        </ul>
      </div>
    </div>
  </nav>
</template>