import * as actions from './index'

describe('group actions', () => {
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
