const checkDateType = (data) => {
    return typeof data
}
const deepCopy = (data) => {
    let type = checkDateType(data)
    let params = null
    if (type == 'array') {
        params = []
        for (let i = 0; i < data.length; i++) {
            params.push(deepCopy(data[i]))
        }
    } else if (type == 'object') {
        params = {}
        for (let i in data) {
            params[i] = deepCopy(data[i])
        }
    } else {
        return data
    }
    return params
}
export default {
    deepCopy
}