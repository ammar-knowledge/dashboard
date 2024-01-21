const interactiveTypes = {
    "quiz":1,
    "assignment":2,
    "quest":3
}
export const getInteractiveTypeId = (interactive) =>{
    return interactiveTypes[interactive]
}