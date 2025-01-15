<script setup lang="ts">
import FormTagRouting from "@/components/form-tag-routing.vue";
import Grid from "@/components/grid.vue";

defineProps(['model', 'list'])
</script>

<template>
  <FormTagRouting :model="model" @res="(e) => $emit('res', e)"/>
  <template v-if="model.type==='grid'">
    <Grid :model="model" :list="list" @res="(e) => $emit('res', e)"/>
  </template>
</template>
