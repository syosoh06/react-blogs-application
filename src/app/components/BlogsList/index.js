import BlogsList from './BlogsList';
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        blogs: state.blogs
    };
};

export default connect(mapStateToProps)(BlogsList);
