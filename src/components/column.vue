<script setup lang="ts">
import FormTagRouting from "@/components/form-tag-routing.vue";

defineProps(['id', 'section', 'type', 'total', 'list'])

</script>

<template>
  <div
      :id="id"
      :data-section="section"
      class="border rounded-md" :class="`${total === 1 ? `w-full` : `w-1/${total}`}`">
    <template v-for="tool in list?.filter((k: any) => k.section === id)" :key="tool.id"
              class="w-full my-2 relative group/tag"
              @click="clickSelectedTool(tool)">
      <FormTagRouting :model="tool" @res="(e) => $emit('res', e)"/>
    </template>
  </div>
</template>

<style scoped>

</style>