let nextTodoId = 0
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})

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