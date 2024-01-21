export const SaveLocal = (key,data) => {
    localStorage.setItem(key,JSON.stringify(data))
}

export const GetLocal = (key) => {
    const rawData = localStorage.getItem(key)
    const data = JSON.parse(rawData)
    return data
} 

export const RemoveLocal = (key) => {
    localStorage.removeItem(key)
}