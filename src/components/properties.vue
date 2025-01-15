<script setup lang="ts">
const model = defineModel()
</script>

<template>
  <div class="w-80 flex flex-col gap-1 zebra-light">
    <h1>Properties</h1>
    <div>
      <label>Title</label>
      <input id="title" type="text" class="w-full border rounded-md px-2" v-model="model.title"/>
    </div>
    <div>
      <label>Default Value</label>
      <input id="value" type="text" class="w-full border rounded-md px-2" v-model="model.value"/>
    </div>
    <div>
      <label>Placeholder</label>
      <input id="placeholder" type="text" class="w-full border rounded-md px-2" v-model="model.placeholder"/>
    </div>
    <div>
      <label>Border Color</label>
      <input id="borderColor" type="color" class="w-full" v-model="model.style.borderColor"/>
    </div>
    <div>
      <label>Text Color</label>
      <input id="color" type="color" class="w-full" v-model="model.style.color"/>
    </div>
    <div>
      <label>Background Color</label>
      <input id="backgroundColor" type="color" class="w-full" v-model="model.style.backgroundColor"/>
    </div>
    <div>
      <label>Padding</label>
      <input id="backgroundColor" type="number" class="w-full border rounded-md px-2" v-model="model.style.padding"/>
    </div>
    <div>
      <label>Margin</label>
      <input id="backgroundColor" type="number" class="w-full border rounded-md px-2" v-model="model.style.margin"/>
    </div>
  </div>
</template>