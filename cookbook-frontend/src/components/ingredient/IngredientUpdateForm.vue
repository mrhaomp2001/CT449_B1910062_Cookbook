<template>
  <div class="border py-2 rounded">
    <Form :validation-schema="schema" @submit="save()">
      <div class="row border-bottom my-2">
        <div class="fs-4 d-flex justify-content-center">Cập nhật nguyên liệu</div>
      </div>
      <!-- Start Element -->
      <div class="row">
        <label for="name" class="col-md-4 col-form-label d-flex justify-content-end">Tên nguyên liệu:</label>
        <div class="col-md-8">
          <Field v-model="ingredient.name" type="text" class="form-control" name="name" placeholder="Tên nguyên liệu" />
          <p class="form-text text-danger">
            <ErrorMessage name="name" />
          </p>
        </div>
      </div>
      <!-- End Element -->

      <!-- Start Element -->
      <div class="row">
        <label for="description" class="col-md-4 col-form-label d-flex justify-content-end">Miêu tả:</label>
        <div class="col-md-8">
          <Field v-model="ingredient.description" type="text" class="form-control" name="description" placeholder="Miêu tả" />
          <p class="form-text text-danger">
            <ErrorMessage name="description" />
          </p>
        </div>
      </div>
      <!-- End Element -->

      <div class="row">
        <div class="offset-sm-4 col-sm-8">
          <button type="submit" class="btn btn-primary mx-2">Cập nhật</button>
          <div @click="deleteIngredient()" class="btn btn-danger mx-2">Xóa</div>
        </div>
      </div>
    </Form>
  </div>
</template>

<script setup>
import * as yup from "yup";
import { ref, onMounted } from "vue";
import { Form, Field, ErrorMessage } from "vee-validate";
import ingredientsService from "@/services/ingredients.service";

const props = defineProps({
  ingredient: { type: Object },
});

const schema = yup.object().shape({
  name: yup.string().required("Không được để rỗng.").min(2, "Phải có ít nhất 2 ký tự.").max(64, "Nhiều nhất 64 ký tự."),
  description: yup.string().required("Không được để rỗng.").min(2, "Phải có ít nhất 2 ký tự.").max(512, "Nhiều nhất 512 ký tự."),
});

async function save() {
  const savedData = await ingredientsService.update(props.ingredient._id, props.ingredient);
  callEmit();
  // console.log(savedData);
}

const emits = defineEmits(["refreshIngredients"]);

function callEmit() {
  emits("refreshIngredients", props.index);
}

async function deleteIngredient() {
  const deletedData = await ingredientsService.delete(props.ingredient._id);
  callEmit();
}
</script>
