<style></style>

<template>
  <div>
    <RecipeAddForm />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import RecipeAddForm from "@/components/recipe/RecipeAddForm.vue";
const recipe = ref({
  name: "",
  description: "",
  content: "",
  time: "",
});
</script>
