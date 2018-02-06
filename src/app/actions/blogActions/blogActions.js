import Axios from 'axios';

const apiUrl = 'http://localhost:9001';

export const fetchBlogsSuccess = (blogs) => {
  return {
    type: 'FETCH_BLOGS_SUCCESS',
    blogs
  };
};

export const fetchBlogByIdSuccess = (blog) => {
  return {
    type: 'FETCH_BLOG_SUCCESS',
    blog
  };
};

export const fetchBlogs = () => {
  return (dispatch) => {
    return Axios.get(apiUrl + '/posts')
    .then(res =>  dispatch(fetchBlogsSuccess(res.data)))
    .catch(err => {
      throw err;
    });
  };
};

export const fetchBlogById = (id) => {
  return (dispatch) => {
    return Axios.get(apiUrl + '/posts/' + id)
    .then(res => dispatch(fetchBlogByIdSuccess(res.data)))
    .catch(error => {
        throw(error);
    });
  };
};
