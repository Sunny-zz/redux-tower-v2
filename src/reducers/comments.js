const initialState = [
  {
    id: '1',
    user: 'peter',
    body: '很有意思'
  },
  {
    id: '2',
    user: 'billie',
    body: 'nice'
  }
]

const comments = (state = initialState, action) => {
  switch (action.type) {
    case 'DELETE_COMMENT':
      return state.filter(t => t.id !== action.id)
    default:
      return state
  }
}

export default comments
