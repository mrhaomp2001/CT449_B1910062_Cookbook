<style></style>

<template>
  <div>
    <RecipeUpdateForm :id="props.id" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import RecipeUpdateForm from "@/components/recipe/RecipeUpdateForm.vue";

const props = defineProps({
  id: { type: String, required: true },
});

</script>
