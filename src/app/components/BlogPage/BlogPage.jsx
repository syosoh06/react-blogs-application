import React from 'react';
import {connect} from 'react-redux';
import * as blogActions from '../../actions/blogActions';
import BlogPost from "../BlogPost/BlogPost";
import CommentsBox from "../CommentsBox/CommentsBox";

class BlogPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchBlogById(this.props.params.id);
    }

    render() {
        return (<div>
                <BlogPost blog = {this.props.blog}/>
                <CommentsBox id = {this.props.params.id}/>
            </div>
        );
    }
}

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
