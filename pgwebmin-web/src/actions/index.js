export const setGroup = (id) => ({
  type: 'SET_GROUP',
  id,
  name
})

let nextGroupId = 0
export const addGroup = (name) => ({
  type: 'ADD_GROUP',
  id: nextGroupId++,
  name
})