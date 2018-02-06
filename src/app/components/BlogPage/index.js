import BlogPage from './BlogPage';
import * as blogActions from "src/app/actions/blogActions/blogActions";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        blog: state.blog
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBlogById: blogId => dispatch(blogActions.fetchBlogById(blogId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogPage);
