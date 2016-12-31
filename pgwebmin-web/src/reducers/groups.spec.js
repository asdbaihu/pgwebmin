import groups from './groups'

describe('groups reducer', () => {
  it('should handle initial state', () => {
    expect(
      groups(undefined, {})
    ).toEqual([])
  })

  it('should handle ADD_GROUP', () => {
    expect(
      groups([], {
        type: 'ADD_GROUP',
        name: 'Run the tests',
        id: 0
      })
    ).toEqual([
      {
        name: 'Run the tests',
        id: 0
      }
    ])

    expect(
      groups([
        {
          name: 'Run the tests',
          id: 0
        }
      ], {
        type: 'ADD_GROUP',
        name: 'Use Redux',
        id: 1
      })
    ).toEqual([
      {
        name: 'Run the tests',
        id: 0
      }, {
        name: 'Use Redux',
        id: 1
      }
    ])

    expect(
      groups([
        {
          name: 'Run the tests',
          id: 0
        }, {
          name: 'Use Redux',
          id: 1
        }
      ], {
        type: 'ADD_GROUP',
        name: 'Fix the tests',
        id: 2
      })
    ).toEqual([
      {
        name: 'Run the tests',
        id: 0
      }, {
        name: 'Use Redux',
        id: 1
      }, {
        name: 'Fix the tests',
        id: 2
      }
    ])
  })

})
