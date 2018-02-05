import React from 'react';
import {connect} from 'react-redux';
import * as commentActions from '../../actions/commentActions';
import CommentsList from "../CommentsList/CommentsList";

class CommentsBox extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchComments(this.props.id);
    }

    submitCommentsForm = (e) => {
        let comment;

        e.preventDefault();
        comment = {
            post_id: this.props.id,
            parent_id: null,
            user: this.refs.user.value,
            date: new Date().toISOString().split('T')[0],
            content: this.refs.content.value
        };
        this.props.addComment(comment, this.props.id);
        this.refs.commentForm.reset();
    };

    render() {
        return (<div>
                <h1>Comments</h1>
                <CommentsList comments = {this.props.comments} />
                <br />
                <br />
                <h1>Add Comment</h1>
                <div>
                    <form ref="commentForm" onSubmit={this.submitCommentsForm} role="form">
                        <div className="form-group">
                            <input className="form-control" type="text" ref="content" placeholder="Your comments" />
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="text" ref="user" placeholder="Your name" />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-success">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        comments: state.comments
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchComments: blogId => dispatch(commentActions.fetchComments(blogId)),
        addComment: (comment, blogId) => dispatch(commentActions.addComment(comment, blogId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsBox);
