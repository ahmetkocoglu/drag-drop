const idGenerator = (prefix = 'id', min = 10000, max = 99999) => {
    let id = Math.floor(Math.random() * (max - min + 1) * min)
    return `${prefix}-${id++}`
}

export default idGenerator