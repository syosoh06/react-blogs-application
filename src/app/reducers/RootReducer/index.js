import { combineReducers } from 'redux';
import blogs from '../blogsReducer/blogsReducer';
import blog from '../blogReducer/blogReducer';
import comments from '../commentsReducer/commentsReducer';

export default combineReducers({
    blogs,
    blog,
    comments
})
