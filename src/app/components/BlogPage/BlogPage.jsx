import React from 'react';
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

export default BlogPage;
