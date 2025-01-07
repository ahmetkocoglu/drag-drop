import idGenerator from './idGenerator'

const defaultStyle = {
    width: '100%',
    backgroundColor: '#ffffff',
    color: '#222222',
    borderColor: '#0000FF',
    borderRadius: '4px',
    padding: '8px',
}

const tools = [
    {
        id: idGenerator('field'),
        section: '',
        title: 'Input Text',
        icon: 'pencil',
        type: 'text',
        placeholder: 'Enter text',
        style: defaultStyle,
    },
    {
        id: idGenerator('field'),
        section: '',
        title: 'Input Number',
        icon: 'pencil',
        type: 'number',
        placeholder: 'Enter text',
        style: defaultStyle,
    },
    {
        id: idGenerator('field'),
        section: '',
        title: 'Textarea',
        icon: 'file-text',
        type: 'textarea',
        placeholder: 'Enter text',
        description: 'This is a textarea field',
        style: defaultStyle,
    },
    {
        id: idGenerator('field'),
        section: '',
        title: 'Select',
        icon: 'archive',
        type: 'select',
        placeholder: 'Select an option',
        style: defaultStyle,
        options: [
            {
                id: idGenerator('option'),
                label: 'Option 0',
                value: 'option0',
            },
        ],
    },
    {
        id: idGenerator('field'),
        section: '',
        title: 'Checkbox',
        icon: 'checkbox',
        type: 'checkbox',
        label: 'Checkbox',
        style: defaultStyle,
    },
    {
        id: idGenerator('field'),
        section: '',
        title: 'Radio',
        icon: 'radio-button',
        type: 'radio',
        label: 'Radio',
        style: defaultStyle,
    },
    {
        id: idGenerator('field'),
        section: '',
        title: 'Datepicker',
        icon: 'calendar',
        type: 'datetime-local',
        style: defaultStyle,
    },
    {
        id: idGenerator('field'),
        section: '',
        title: 'Color',
        icon: 'calendar',
        type: 'color',
        style: defaultStyle,
    },
    {
        id: idGenerator('field'),
        section: '',
        title: 'Section',
        icon: 'calendar',
        type: 'section',
        style: defaultStyle,
    },
    {
        id: idGenerator('field'),
        section: '',
        title: 'Column',
        icon: 'calendar',
        type: 'column',
        style: defaultStyle,
    },
]

export default tools