<template>
  <div class="sticky-top py-3">
    <div class="row d-flex justify-content-between align-items-center">
      <IngredientUpdateForm v-if="localIngredient._id" :ingredient="localIngredient" @refreshIngredients="callEmit" />
      <IngredientAddForm v-else :ingredient="localIngredient" @refreshIngredients="callEmit" />
    </div>
  </div>
</template>

<script setup>
import IngredientUpdateForm from "@/components/ingredient/IngredientUpdateForm.vue";
import IngredientAddForm from "@/components/ingredient/IngredientAddForm.vue";
import { ref, onMounted, onUpdated, watch, watchEffect } from "vue";

const props = defineProps({
  ingredient: { type: Object },
  index: { type: Number },
});

const localIngredient = ref();
onMounted(() => {
  localIngredient.value = props.ingredient;
});

const emits = defineEmits(["refreshIngredients"]);

function callEmit() {
  emits("refreshIngredients", props.index);
}

watchEffect(() => {
  localIngredient.value = props.ingredient;
});
</script>
