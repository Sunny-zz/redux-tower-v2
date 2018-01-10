export const getCommentsByCourseId = state => {
  return state.comments.reduce(
    (obj, t) => {
      obj[t.course] = obj[t.course] || []
      obj[t.course].push(t)
      return obj
    },
    {}
  )
}
