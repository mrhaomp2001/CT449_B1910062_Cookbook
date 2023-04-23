<template>
  <div>
    <div class="row d-flex justify-content-between align-items-center">
      <div class="container border rounded my-2 col-md-8">
        <div class="border-bottom fw-bold">{{ ingredient.name }}</div>
        <small class="text-break"> {{ ingredient.description }} </small>
      </div>
      <div class="col-md-4 d-flex justify-content-end">
        <div @click="callEmit()" class="btn btn-success">Chỉnh sửa</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  ingredient: { type: Object },
  index: { type: Number },
});

const emits = defineEmits(["emitShowIngredientDetails"]);

function callEmit() {
  emits("emitShowIngredientDetails", props.index);
}
</script>
