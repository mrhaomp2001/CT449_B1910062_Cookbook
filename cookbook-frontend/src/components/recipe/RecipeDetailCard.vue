<script setup>
import { ref, onMounted, onUpdated, watch } from "vue";
import serviceIngredientDetails from "@/services/ingredientDetails.service";

const props = defineProps({
  recipe: { type: Object, required: true },
  index: { type: String },
});

const ingredientDetails = ref();

async function retriveIngredientDetails() {
  ingredientDetails.value = await serviceIngredientDetails.get(props.recipe._id);
}

onMounted(() => {
  retriveIngredientDetails();
});
watch(props, () => {
  retriveIngredientDetails();
});
</script>
<template>
  <div class="sticky-top py-3">
    <div class="border rounded">
      <div class="p-1">
        <div class="fs-2">
          <strong> Công thức: </strong>
          {{ recipe.name }}
        </div>
      </div>
      <div class="p-1">
        <strong>Miêu tả: </strong>
        <p style="white-space: pre-line">
          {{ recipe.description }}
        </p>
      </div>
      <div class="p-1">
        <strong>Thời gian nấu: </strong>
        {{ recipe.time }}
      </div>
      <div>
        <div class="p-1">
          <strong> Nguyên liệu chính: </strong>
          <div v-for="(recipeIngredient, index) in ingredientDetails" :key="index">
            <div>- {{ recipeIngredient.id_ingredient.name }} : {{ recipeIngredient.quantity }}</div>
          </div>
        </div>
      </div>
      <div class="p-1">
        <strong>Thực hiện: </strong>
        {{ recipe.content }}
      </div>
    </div>
  </div>
</template>
