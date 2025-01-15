import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useEditStore = defineStore('edit', () => {
  const list = ref<any[]>([
    {
      "id": "section-536127007",
      "value": "",
      "section": "",
      "title": "Section",
      "icon": "calendar",
      "type": "section",
      "style": {
        "width": "100%",
        "backgroundColor": "#ffffff",
        "color": "#222222",
        "borderColor": "#0000FF",
        "borderRadius": "4px",
        "padding": "3",
        "margin": "0"
      }
    },
    {
      "id": "tag-165737019",
      "value": "",
      "section": "section-536127007",
      "title": "Input Text",
      "icon": "pencil",
      "type": "text",
      "placeholder": "Enter text",
      "style": {
        "width": "100%",
        "backgroundColor": "#ffffff",
        "color": "#222222",
        "borderColor": "#0000FF",
        "borderRadius": "4px",
        "padding": "3",
        "margin": "0"
      }
    },
    {
      "id": "grid-203939016",
      "value": "",
      "section": "section-536127007",
      "title": "Column",
      "icon": "calendar",
      "type": "grid",
      "style": {
        "width": "100%",
        "backgroundColor": "#ffffff",
        "color": "#222222",
        "borderColor": "#0000FF",
        "borderRadius": "4px",
        "padding": "3",
        "margin": "0"
      }
    },
    {
      "id": "column-763207177",
      "value": "",
      "section": "grid-203939016",
      "title": "Column",
      "icon": "calendar",
      "type": "column",
      "style": {
        "width": "100%",
        "backgroundColor": "#ffffff",
        "color": "#222222",
        "borderColor": "#0000FF",
        "borderRadius": "4px",
        "padding": "3",
        "margin": "0"
      }
    },
    {
      "id": "column-721866257",
      "value": "",
      "section": "grid-203939016",
      "title": "Column",
      "icon": "calendar",
      "type": "column",
      "style": {
        "width": "100%",
        "backgroundColor": "#ffffff",
        "color": "#222222",
        "borderColor": "#0000FF",
        "borderRadius": "4px",
        "padding": "3",
        "margin": "0"
      }
    },
    {
      "id": "tag-210016848",
      "value": "",
      "section": "column-763207177",
      "title": "Input Text",
      "icon": "pencil",
      "type": "text",
      "placeholder": "Enter text",
      "style": {
        "width": "100%",
        "backgroundColor": "#ffffff",
        "color": "#222222",
        "borderColor": "#0000FF",
        "borderRadius": "4px",
        "padding": "3",
        "margin": "0"
      }
    },
    {
      "id": "tag-642800122",
      "value": "",
      "section": "column-763207177",
      "title": "Input Text",
      "icon": "pencil",
      "type": "text",
      "placeholder": "Enter text",
      "style": {
        "width": "100%",
        "backgroundColor": "#ffffff",
        "color": "#222222",
        "borderColor": "#0000FF",
        "borderRadius": "4px",
        "padding": "3",
        "margin": "0"
      }
    },
  ])

  return { list }
})
