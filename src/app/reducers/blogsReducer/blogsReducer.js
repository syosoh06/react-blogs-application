export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_BLOGS_SUCCESS':
        return action.blogs;
    default:
        return state;
  }
}
