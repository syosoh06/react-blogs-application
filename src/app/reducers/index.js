import { combineReducers } from 'redux';
import blogs from './blogsReducer';
import blog from './blogReducer';
import comments from './commentsReducer';

export default combineReducers({
    blogs,
    blog,
    comments
})
