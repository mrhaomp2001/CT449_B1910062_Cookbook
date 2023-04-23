<template>
  <div class="sticky-top py-3">
    <div class="border rounded" data-bs-spy="scroll" data-bs-smooth-scroll="true">
      <div class="p-1">
        <div class="fs-2">
          <strong> Công thức: </strong>
          {{ recipe.name }}
        </div>
      </div>

      <div class="p-1">
        <router-link
          :to="{
            name: 'recipe.edit',
            params: { id: recipe._id },
          }"
          >Chỉnh sửa</router-link
        >
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
        <p style="white-space: pre" class="text-break">
          {{ recipe.content }}
        </p>
      </div>
    </div>
  </div>
</template>

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
