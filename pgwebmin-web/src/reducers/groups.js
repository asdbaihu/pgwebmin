const group = (state, action) => {
  switch (action.type) {
    case 'ADD_GROUP':
      return {
        id: action.id,
        name: action.name
      }
    case 'SET_GROUP':
      return {
        ...state,
        id: action.id
      }
    default:
      return state
  }
}

const groups = (state = [], action) => {
  switch (action.type) {
    case 'ADD_GROUP':
      return [
        ...state,
        group(undefined, action)
      ]
    default:
      return state
  }
}

export default groups
