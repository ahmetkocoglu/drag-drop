<script setup lang="ts">

import tools from "@/composables/tools.ts";
import Icon from "@/components/Icon.vue";
import {ref} from "vue";
import idGenerator from "@/composables/idGenerator.ts";
import {RouterLink} from "vue-router";
import Properties from "@/components/properties.vue";
import TagRouting from "@/components/tag-routing.vue";
import {useEditStore} from "@/stores/edit.ts";

const store = useEditStore();

const tags = ref(tools)

const list = ref<any[]>(store.list)
const selectedTool = ref<any>()

const borderColor = ref('#ffffff')
const color = ref('#ffffff')
const backgroundColor = ref('#ffffff')
const placeholder = ref('')

const onDrag = (e: DragEvent | any, tool: any) => {
  e.dataTransfer.setData('text/plain', JSON.stringify(tool))
}

const onDrop = (e: DragEvent | any) => {
  e.preventDefault()
  const domRect: HTMLElement = e.target as HTMLElement;

  const tool = JSON.parse(e.dataTransfer.getData("text/plain"))
  selectedTool.value = tool

  if (tool.type === 'section') {
    list.value.push({...tool, id: idGenerator('section')})
  } else if (tool.type === 'column') {
    if (domRect.id.indexOf('section') > -1) {
      const gridId = idGenerator('grid')
      list.value = [...list.value, {...tool, id: gridId, section: e.target.id, type: 'grid'}]

      list.value = [...list.value, {...tool, id: idGenerator('column'), section: gridId, type: 'column'}]
    } else {
      list.value = [...list.value, {
        ...tool,
        id: idGenerator('column'),
        section: domRect.getAttribute('data-section'),
        type: 'column'
      }]
    }
  } else if (domRect.id !== 'DragDropNewSection') {
    tool.id = idGenerator('tag')
    if (domRect.id.indexOf('tag') > -1) {
      tool.section = domRect.getAttribute('data-section')
      console.log('onDrop 1 >> ', domRect.tagName)
    } else {
      tool.section = e.target.id
      console.log('onDrop 2 target id >> ', domRect.id)
    }
    list.value = [...list.value, tool]
  } else {
    console.log('onDrop >> not put', domRect.tagName)
  }
  console.log('onDrop >> list > value', list.value)
}

const onDropSub = (e: DragEvent | any) => {
  e.preventDefault()

  const tool = JSON.parse(e.dataTransfer.getData("text/plain"))

  tool.id = idGenerator('tag')
  tool.section = e.target.id
  list.value = [...list.value, tool]
}

function allowDrop(ev: DragEvent) {
  ev.preventDefault();
}

function allowDropSub(ev: DragEvent) {
  ev.preventDefault();
}

const clickSelectedTool = (tool: any) => {
  console.log('clickSelectedTool >> ',tool)
  selectedTool.value = tool
  borderColor.value = tool.style.borderColor
  color.value = tool.style.color
  backgroundColor.value = tool.style.backgroundColor
  placeholder.value = tool.placeholder
}

const sectionAllDelete = (section: any) => {
  list.value.splice(list.value.indexOf(section), 1)

  list.value = list.value.filter((e: any) => e.section !== section.id)
}
</script>

<template>
  <div class="flex">
    <div class="w-80">
      <h1>Toolbox</h1>
      <ul>
        <li v-for="tool in tags" :key="tool.title">
          <div class="border m-1 rounded-md bg-gray-100" draggable="true" @dragstart="onDrag($event, tool)">
          <span class="icon">
          <Icon :name="tool.icon"/>
        </span>
            <span class="title">
          {{ tool.title }}
        </span>
          </div>
        </li>
      </ul>
    </div>
    <div id="DragDropBodyStart" class="w-full"
         v-if="list.filter((k: any) => k.type === 'section' && k.section === '').length === 0"
         @drop="onDrop($event)" @dragover="allowDrop($event)">
    </div>
    <div class="w-full mx-2 mt-7" v-else>
      <div id="DragDropBody" class="w-full">
        <div v-for="section in list.filter((k: any) => k.type === 'section' && k.section === '')"
             :key="section.id"
             :id="section.id"
             class="w-full border p-1.5 min-h-10 relative group/section group-hover/section:bg-red-500"
             @drop="onDrop($event)" @dragover="allowDrop($event)">
          <div v-for="tool in list.filter((k: any) => k.section === section.id)" :key="tool.id"
               class="w-full my-2 relative group/tag"><!--@click="clickSelectedTool(tool)"-->
            <TagRouting :model="tool" :list="list" @res="(e) => clickSelectedTool(e)"/>
            <Icon name="delete-bin"
                  class="absolute hidden top-0 group-hover/tag:-top-6 right-0 group-hover/tag:block group-hover/tag:text-red-500"
                  @click="list.splice(list.indexOf(tool), 1)"/>
          </div>
          <Icon name="delete-bin"
                class="absolute hidden top-0 group-hover/section:-top-6 right-0 group-hover/section:block group-hover/section:text-red-500"
                @click="sectionAllDelete(section)"/>
        </div>
      </div>
      <div id="DragDropNewSection" class="w-full py-2.5 items-center justify-center text-center border"
           @drop="onDrop($event)" @dragover="allowDrop($event)">
        <span>new section</span>
      </div>
    </div>
    <Properties v-if="selectedTool" v-model="selectedTool"/>
  </div>
  <RouterLink to="/">Home</RouterLink>
  <div class="w-full mt-7 container mx-auto border border-gray-200 p-3 rounded-md">
    <pre></pre>
  </div>
</template>

<style scoped>

</style>