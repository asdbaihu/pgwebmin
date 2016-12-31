import * as actions from './index'

describe('todo actions', () => {
  it('addTodo should create ADD_TODO action', () => {
    expect(actions.addTodo('Use Redux')).toEqual({
      type: 'ADD_TODO',
      id: 0,
      text: 'Use Redux'
    })
  })

  it('setVisibilityFilter should create SET_VISIBILITY_FILTER action', () => {
    expect(actions.setVisibilityFilter('active')).toEqual({
      type: 'SET_VISIBILITY_FILTER',
      filter: 'active'
    })
  })

  it('toggleTodo should create TOGGLE_TODO action', () => {
    expect(actions.toggleTodo(1)).toEqual({
      type: 'TOGGLE_TODO',
      id: 1
    })
  })

  it('setGroup should create SET_GROUP action', () => {
    expect(actions.setGroup(1)).toEqual({
      type: 'SET_GROUP',
      id: 1,
      name: 'nodejs'
    })
  })

  it('addGroup should create ADD_GROUP action', () => {
    expect(actions.addGroup('G1')).toEqual({
      type: 'ADD_GROUP',
      id: 0,
      name: 'G1'
    })
  })
})
