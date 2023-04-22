<template>
  <div>
    <div class="container">
      <Form :validation-schema="schema" @submit="save()">
        <div>
          <!-- Start Element -->
          <div class="row">
            <label for="name" class="col-md-4 col-form-label d-flex justify-content-end">Tên công thức:</label>
            <div class="col-md-8">
              <Field v-model="recipeDetails.name" type="text" class="form-control" name="name" placeholder="Nhập Tên công thức" />
              <p class="form-text text-danger">
                <ErrorMessage name="name" />
              </p>
            </div>
          </div>
          <!-- End Element -->

          <!-- Start Element -->
          <div class="row">
            <label for="description" class="col-md-4 col-form-label d-flex justify-content-end">Miêu tả sơ lược:</label>
            <div class="col-md-8">
              <Field v-model="recipeDetails.description" type="text" class="form-control" name="description" placeholder="Nhập Miêu tả sơ lược (tương đối)" />
              <p class="form-text text-danger">
                <ErrorMessage name="description" />
              </p>
            </div>
          </div>
          <!-- End Element -->

          <!-- Start Element -->
          <div class="row">
            <label for="time" class="col-md-4 col-form-label d-flex justify-content-end">Thời gian:</label>
            <div class="col-md-8">
              <Field v-model="recipeDetails.time" type="text" class="form-control" name="time" placeholder="Nhập Thời gian (tương đối)" />
              <p class="form-text text-danger">
                <ErrorMessage name="time" />
              </p>
            </div>
          </div>
          <!-- End Element -->

          <!-- Start Element -->
          <div class="row">
            <label for="content" class="col-md-4 col-form-label d-flex justify-content-end">Cách làm món ăn:</label>
            <div class="col-md-8">
              <Field v-model="recipeDetails.content" as="textarea" type="text" class="form-control" name="content" placeholder="Nhập Cách làm món ăn (tương đối)" />
              <p class="form-text text-danger">
                <ErrorMessage name="content" />
              </p>
            </div>
          </div>
          <!-- End Element -->

          <div>
            <div class="btn btn-success" @click="addIngredient()"><span class="fw-bold">+</span> Thêm nguyên liệu</div>
          </div>
          <div class="container border rounded my-2">
            <div v-if="ingredientDetails.length > 0" class="px-2 my-2">
              <div v-for="(ingredientDetail, index) in ingredientDetails" :key="index">
                <div class="dropdown row">
                  <a class="btn bg-light dropdown-toggle col-md-4 my-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> {{ ingredientDetail.name }}</a>
                  <ul class="dropdown-menu">
                    <li v-for="ingredient in listIngredients" :key="ingredient._id">
                      <a
                        @click="
                          ingredientDetail.name = ingredient.name;
                          ingredientDetail.id = ingredient._id;
                        "
                        class="dropdown-item"
                        href="#"
                      >
                        {{ ingredient.name }}
                      </a>
                    </li>
                  </ul>
                  <div class="col-md-6 d-flex align-items-center justify-content-center">
                    <input v-model="ingredientDetails[index].quantity" class="form-control my-2" name="" id="" aria-describedby="helpId" placeholder="Nhập vào số lượng (ví dụ: 500g, 1 gói...)" />
                  </div>
                  <div class="col-md-2 d-flex align-items-center justify-content-center">
                    <a @click="deleteIngredient(index)" class="btn btn-danger justify-content-center"><i class="fa fa-trash mx-2"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="offset-sm-4 col-sm-8">
              <button type="submit" class="btn btn-primary">Lưu</button>
            </div>
          </div>
        </div>
      </Form>
    </div>
  </div>
</template>

<script setup>
import * as yup from "yup";
import { ref, onMounted } from "vue";
import { Form, Field, ErrorMessage } from "vee-validate";
import ingredientsService from "@/services/ingredients.service";
import ingredientDetailsService from "@/services/ingredientDetails.service";
import recipeService from "@/services/recipes.service";
import router from "@/router";

onMounted(() => {
  retriveAllIngredient();
});

const recipeDetails = ref({
  name: "",
  description: "",
  content: "",
  time: "",
});
const savedRecipeDetails = ref();

const ingredientDetails = ref([]);
const listIngredients = ref();

const schema = yup.object().shape({
  name: yup.string().required("Không được để rỗng.").min(2, "Phải có ít nhất 2 ký tự.").max(64, "Nhiều nhất 64 ký tự."),
  description: yup.string().required("Không được để rỗng.").min(2, "Phải có ít nhất 2 ký tự.").max(64, "Nhiều nhất 64 ký tự."),
  time: yup.string().required("Không được để rỗng.").min(2, "Phải có ít nhất 2 ký tự.").max(64, "Nhiều nhất 64 ký tự."),
  content: yup.string().required("Không được để rỗng.").min(2, "Phải có ít nhất 2 ký tự.").max(64, "Nhiều nhất 64 ký tự."),
});

function addIngredient() {
  ingredientDetails.value.push({
    name: listIngredients.value[0].name,
    id: listIngredients.value[0]._id,
    quantity: "0",
  });
}

function deleteIngredient(index) {
  ingredientDetails.value.splice(index, 1);
  console.log("Delete");
}

async function retriveAllIngredient() {
  listIngredients.value = await ingredientsService.getAll();
}

async function save() {
  savedRecipeDetails.value = await recipeService.create(recipeDetails.value);
  // console.log(savedRecipeDetails);

  ingredientDetails.value.forEach(async (element) => {
    const saveData = {
      id_ingredient: element.id,
      id_recipe: savedRecipeDetails.value._id,
      quantity: element.quantity,
    };

    const savedData = await ingredientDetailsService.create(saveData).then(() => {
      router.push({ name: "recipe" });
    });
    // console.log(saveData);
  });
}
</script>
