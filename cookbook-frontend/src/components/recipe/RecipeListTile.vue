<template>
  <div>
    <div class="row g-4 mb-1">
      <div class="col border rounded">
        <div class="d-flex align-items-center justify-content-between">
          <div class="w-75 d-flex flex-column text-start">
            <h5 class="d-flex justify-content-between border-bottom">
              <span class="ps-3">{{ recipe.name }}</span>
            </h5>
            <small class="ps-3 fst-italic text-break">{{ recipe.description }}</small>
          </div>
          <div class="d-flex align-items-center ms-1">
            <div @click="callEmit()" class="btn btn-success">Nấu ngay!</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  recipe: { type: Object },
  index: { type: Number },
});

const emits = defineEmits(["emitshowDetails"]);

function callEmit() {
  emits("emitshowDetails", props.index);
}
</script>
