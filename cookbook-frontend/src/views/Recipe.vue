<style></style>

<template>
  <div>
    <div class="fs-2 text-uppercase fw-bold text-center">Sách nấu ăn điện tử</div>
    <div class="tab-content row">
      <div class="tab-pane fade show active my-3 col-md-6">
        <div class="d-flex justify-content-end mb-2">
          <a @click="isClosing = !isClosing" class="btn btn-success rounded mx-2" data-bs-toggle="collapse" href="#collapseRecipeList" role="button" aria-expanded="false" aria-controls="collapseExample">
            <div v-if="isClosing">Mở danh sách công thức</div>
            <div v-else>Đóng danh sách công thức</div>
          </a>
          <!-- :to="{ name: recipe }" -->
          <router-link :to="{name: 'recipe.add'}" class="btn btn-success"> <span class="fw-bold">+</span> Thêm công thức mới</router-link>
        </div>
        <div class="fs-3">Danh sách cách công thức:</div>
        <div v-if="isClosing">Bạn đang đóng sách công thức, ấn vào nút mở danh sách để chọn món bạn muốn nấu</div>
        <div class="collapse show" id="collapseRecipeList">
          <div v-for="(recipe, index) in recipes" :key="index">
            <RecipeListTile :recipe="recipe" :index="index" @emitshowDetails="emitshowDetails" />
          </div>
        </div>
      </div>
      <div class="tab-pane fade show active my-3 col-md-6">
        <RecipeDetailCard v-if="recipeId != -1" :recipe="recipes[recipeId]" />
        <div v-else>
          <div class="border rounded d-flex align-items-center justify-content-center">
            <h2 class="text-center">Chọn 1 công thức để nấu ăn ngay!</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="fixed-bottom d-flex justify-content-end m-2">
    <a @click="isClosing = !isClosing" class="btn btn-success rounded mx-2" data-bs-toggle="collapse" href="#collapseRecipeList" role="button" aria-expanded="false" aria-controls="collapseExample">
      <div v-if="isClosing">Mở danh sách công thức</div>
      <div v-else>Đóng danh sách công thức</div>
    </a>
    <a href="#top" class="btn btn-success rounded mx-2">về đầu trang</a>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import RecipeListTile from "@/components/recipe/RecipeListTile.vue";
import RecipeDetailCard from "@/components/recipe/RecipeDetailCard.vue";
import serviceRecipe from "@/services/recipes.service";

const recipes = ref();
const ingredientDetails = ref();
const recipeId = ref(-1);
const isClosing = ref(false);

async function retriveRecipes() {
  recipes.value = await serviceRecipe.getAll();
}

async function emitshowDetails(index) {
  recipeId.value = index;
}

onMounted(() => {
  retriveRecipes();
});
</script>
