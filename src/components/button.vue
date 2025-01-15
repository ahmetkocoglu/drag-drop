<script setup lang="ts">

defineProps(['model'])

</script>

<template>
    <button
        class="w-full border rounded-md"
        :id="model.id"
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
        type="submit"
        @click="() => console.log('button clicked!')"
    >{{model.value}}</button>
</template>
