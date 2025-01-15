<script setup lang="ts">

defineProps(['model'])

</script>

<template>
  <label class="block" :id="`${model.id}-label`" :data-section="model.section">{{ model.title }}</label>
  <input
      class="w-full border rounded-md"
      :id="model.id"
      v-model="model.value"
      :data-section="model.section"
      :type="model.type"
      :style="`
           border-color: ${model.style.borderColor};
           color: ${model.style.color};
           background-color: ${model.style.backgroundColor};
           padding: ${model.style.padding}px;
           margin: ${model.style.margin}px;
        `"
      :placeholder="model.placeholder"
      @click="() => $emit('res', model)"
  />
</template>
