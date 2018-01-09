const initialState = [
  {
    id: '1',
    poster: 'http://o86bpj665.bkt.clouddn.com/posters/meteor-react-bird.png',
    title: '课程1',
    likes: 2
  }, {
    id: '2',
    poster: 'http://o86bpj665.bkt.clouddn.com/posters/meteor-react-bird.png',
    title: '课程2',
    likes: 3
  }
]

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'LIKE':
      const { courseId } = action
      return state.map(
        t => {
          if (t.id === courseId) {
            return {
              ...t,
              likes: t.likes + 1
            }
          }
          return t 
        }
      )
    default:
      return state
  }
}

export default rootReducer
