<template>
  <div>
    <div class="container">
      <div class="fs-2 text-uppercase fw-bold text-center">Chuẩn bị nguyên liệu</div>

      <div class="row">
        <div class="col-6">
          <div @click="addIngredient()" class="btn btn-success my-2"><span class="fw-bold">+</span>Thêm nguyên liệu</div>
          <div class="container border rounded">
            <IngredientListTile v-for="(ingredient, index) in listIngredient" :ingredient="ingredient" :index="index" :key="index" @emitShowIngredientDetails="emitShowIngredientDetails" />
          </div>
        </div>
        <div class="col-6">
          <IngredientDetailsCard v-if="localIngredient" :ingredient="localIngredient" @refreshIngredients="refreshIngredients" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, watchEffect } from "vue";
import IngredientListTile from "@/components/ingredient/IngredientListTile.vue";
import serviceIngredient from "@/services/ingredients.service";
import IngredientDetailsCard from "@/components/ingredient/IngredientDetailsCard.vue";

const listIngredient = ref();
const localIngredient = ref();

function emitShowIngredientDetails(index) {
  // console.log(index);
  localIngredient.value = listIngredient.value[index];
}

function addIngredient() {
  localIngredient.value = {
    name: "",
    description: "",
  };
}

watchEffect(async () => {
  localIngredient.value;
});

async function refreshIngredients() {
  listIngredient.value = await serviceIngredient.getAll();
  localIngredient.value = undefined;
}

onMounted(async () => {
  listIngredient.value = await serviceIngredient.getAll();
});
</script>
