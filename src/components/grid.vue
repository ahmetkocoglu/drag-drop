<script setup lang="ts">
import {computed} from "vue";
import Column from "@/components/column.vue";

const props = defineProps(['model', 'list'])

const columnCount = computed(() => props.list.filter((k: any) => k.section === props.model.id).filter((k: any) => k.type === 'column').length)
const columns = computed(() => props.list.filter((k: any) => k.section === props.model.id).filter((k: any) => k.type === 'column'))

</script>

<template>
  <div :id="model.id"
       :data-section="model.section"
       class="flex w-full gap-2">
    <Column v-for="(x, i) in columnCount" :key="x" :id="columns[i].id" :section="columns[i].section"
            :type="columns[i].type" :total="columnCount" :list="list" @res="(e) => $emit('res', e)"/>
  </div>
</template>

<style scoped>

</style>