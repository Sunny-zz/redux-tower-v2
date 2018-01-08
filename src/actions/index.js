import history from '../utils/history'

export const like = () => ({
  type: 'LIKE'
})

export const goComment = id => {
  history.push(`/c/${id}`)
  return { type: 'GO_COMMENT' }
}
