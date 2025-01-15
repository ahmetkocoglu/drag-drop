<script setup lang="ts">
import Button from "@/components/button.vue";
import Input from "@/components/input.vue";
import Textarea from "@/components/textarea.vue";

defineProps(['model'])
</script>

<template>
  <template v-if="model.type==='text'">
    <Input :model="model"/>
  </template>
  <template v-else-if="model.type==='number'">
    <Input :model="model"/>
  </template>
  <template v-else-if="model.type==='datetime-local'">
    <Input :model="model"/>
  </template>
  <template v-else-if="model.type==='color'">
    <Input :model="model"/>
  </template>
  <template v-else-if="model.type==='textarea'">
    <Textarea :model="model"/>
  </template>
  <div v-else-if="model.type==='select'">
    <label>{{ model.title }}</label>
    <select class="w-full">
      <option>chose 1</option>
      <option>chose 2</option>
    </select>
  </div>
  <template v-else-if="model.type==='checkbox'">
    <Input :model="model"/>
  </template>
  <template v-else-if="model.type==='radio'">
    <Input :model="model"/>
  </template>
  <template v-else-if="model.type==='submit'">
    <Button :model="model"/>
  </template>
</template>
