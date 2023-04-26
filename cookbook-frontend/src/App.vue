<script setup>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
</script>
<template>
  <div id="app">
    <AppHeader />
    <div class="container-xxl bg-white p-0">
      <div class="container mt-3">
        <router-view />
      </div>
    </div>
    <AppFooter />
  </div>
</template>
<style>
.page {
  max-width: 400px;
  margin: auto;
}
</style>
