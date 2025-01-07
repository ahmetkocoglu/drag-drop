<script setup lang="ts">

import tools from "@/composables/tools.ts";
import Icon from "@/components/Icon.vue";
import {ref} from "vue";
import idGenerator from "@/composables/idGenerator.ts";
import {RouterLink} from "vue-router";

const tags = ref(tools)

const list = ref<any[]>([])
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
  console.log('onDrop e >> ', domRect.id)

  const tool = JSON.parse(e.dataTransfer.getData("text/plain"))
  // DragDropNewSection
  if (tool.type === 'section') {
    list.value.push({...tool, id: idGenerator('section')})
  } else if (domRect.id !== 'DragDropNewSection') {
    tool.id = idGenerator('tag')
    if(domRect.id.indexOf('tag') > -1) {
      tool.section = domRect.getAttribute('data-section')
    } else {
      tool.section = e.target.id
    }
    list.value = [...list.value, tool]
  }

  console.log('onDrop >> ', list.value)
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
  selectedTool.value = tool
  borderColor.value = tool.style.borderColor
  color.value = tool.style.color
  backgroundColor.value = tool.style.backgroundColor
  placeholder.value = tool.placeholder
}

const changeProperties = (_e: Event) => {
  const e = _e.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  list.value = list.value.map(tag => {
    if (tag.id === selectedTool.value.id) {
      if (e.id === 'color')
        tag.style.color = e.value
      else if (e.id === 'backgroundColor')
        tag.style.backgroundColor = e.value
      else if (e.id === 'borderColor')
        tag.style.borderColor = e.value
      else if (e.id === 'placeholder')
        tag.placeholder = e.value
    }
    return tag
  })
}

const sectionAllDelete = (section: any) => {
  list.value.splice(list.value.indexOf(section), 1)

  list.value = list.value.filter((e: any) => e.section !== section.id)
  console.log(list.value, section.id)
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
    <div class="w-full mx-2 mt-10" v-else>
      <div id="DragDropBody" class="w-full">
        <div v-for="section in list.filter((k: any) => k.type === 'section' && k.section === '')"
             :key="section.id"
             :id="section.id"
             class="w-full border p-5 relative group/section group-hover/section:bg-red-500"
             @drop="onDrop($event)" @dragover="allowDrop($event)">
          <div v-for="tool in list.filter((k: any) => k.section === section.id)" :key="tool.id"
               class="my-2 bg-gray-100 relative group/tag"
               @click="clickSelectedTool(tool)">
            <div v-if="tool.type==='text'">
              <label>{{ tool.title }}</label>
              <input :id="tool.id"
                     :data-section="tool.section"
                     type="text"
                     class="w-full border rounded-md"
                     :style="`border-color: ${tool.style.borderColor}; color: ${tool.style.color}; background-color: ${tool.style.backgroundColor};`"
                     :placeholder="tool.placeholder"/>
            </div>
            <div v-else-if="tool.type==='number'">
              <label>{{ tool.title }}</label>
              <input :id="tool.id"
                     :data-section="tool.section" type="number"
                     class="w-full border rounded-md"
                     :style="`border-color: ${tool.style.borderColor}; color: ${tool.style.color}; background-color: ${tool.style.backgroundColor};`"
                     :placeholder="tool.placeholder"/>
            </div>
            <div v-else-if="tool.type==='textarea'">
              <label>{{ tool.title }}</label>
              <textarea :id="tool.id"
                        :data-section="tool.section" class="w-full border rounded-md"
                        :style="`border-color: ${tool.style.borderColor}; color: ${tool.style.color}; background-color: ${tool.style.backgroundColor};`"
                        :placeholder="tool.placeholder"
              ></textarea>
            </div>
            <div v-else-if="tool.type==='select'">
              <label>{{ tool.title }}</label>
              <select class="w-full">
                <option>chose 1</option>
                <option>chose 2</option>
              </select>
            </div>
            <div v-else-if="tool.type==='checkbox'">
              <label>{{ tool.title }}</label>
              <input :id="tool.id"
                     :data-section="tool.section" type="checkbox" class="w-full"/>
            </div>
            <div v-else-if="tool.type==='radio'">
              <label>{{ tool.title }}</label>
              <input :id="tool.id"
                     :data-section="tool.section" type="radio" class="w-full"/>
            </div>
            <div v-else-if="tool.type==='datetime-local'">
              <label>{{ tool.title }}</label>
              <input :id="tool.id"
                     :data-section="tool.section" type="datetime-local"
                     class="w-full border rounded-md"
                     :style="`border-color: ${tool.style.borderColor}; color: ${tool.style.color}; background-color: ${tool.style.backgroundColor};`"
                     :placeholder="tool.placeholder"/>
            </div>
            <div v-else-if="tool.type==='color'">
              <label>{{ tool.title }}</label>
              <input :id="tool.id"
                     :data-section="tool.section" type="color"
                     class="w-full border rounded-md"
                     :style="`border-color: ${tool.style.borderColor}; color: ${tool.style.color}; background-color: ${tool.style.backgroundColor};`"
                     :placeholder="tool.placeholder"/>
            </div>
            <div v-else-if="tool.type==='2-column'" class="w-full flex gap-2 border rounded-md p-5">
              <div
                  v-for="column in list.filter((k: any) => k.section === section.id).filter((k: any) => k.type.indexOf('column') > -1)"
                  :key="column.id"
                  :id="column.id"
                  class="w-1/2 border rounded-md p-5"
                  @drop="onDropSub($event)" @dragover="allowDropSub($event)">
                <div v-for="item in column">
                  <div v-if="item.type==='text'">
                    <label>{{ item.title }}</label>
                    <input type="text"
                           class="w-full border rounded-md"
                           :style="`border-color: ${item.style.borderColor}; color: ${item.style.color}; background-color: ${item.style.backgroundColor};`"
                           :placeholder="item.placeholder"/>
                  </div>
                </div>
              </div>
            </div>
            <div v-else>

            </div>
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
    <div class="w-80 flex flex-col gap-2">
      <h1>Properties</h1>
      <div>
        <label>Border Color</label>
        <input id="borderColor" type="color" class="w-full" v-model="borderColor" @change="changeProperties"/>
      </div>
      <div>
        <label>Text Color</label>
        <input id="color" type="color" class="w-full" v-model="color" @change="changeProperties"/>
      </div>
      <div>
        <label>Background Color</label>
        <input id="backgroundColor" type="color" class="w-full" v-model="backgroundColor" @change="changeProperties"/>
      </div>
      <div>
        <label>Placeholder Color</label>
        <input id="placeholder" type="text" class="w-full border rounded-md" v-model="placeholder"
               @change="changeProperties"/>
      </div>
    </div>
  </div>
  <!--  <button id="btn" draggable="true" @dragstart="onDrag($event)">Ahmet</button>
    <button draggable="true" @dragstart="onDrag($event)">Nilgün</button>-->
  <!--  <div @drop="onDrop($event)" @dragover="allowDrop($event)" class="w-24 h-24 border border-gray-300">
    </div>
    <div @drop="onDrop($event)" @dragover="allowDrop($event)" class="w-24 h-24 border border-gray-300">
    </div>-->
  <RouterLink to="/">Home</RouterLink>
</template>

<style scoped>

</style>