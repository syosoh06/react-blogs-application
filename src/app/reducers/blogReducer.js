export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_BLOG_SUCCESS':
            return action.blog;
    default:
        return state;
  }
}
