import React from 'react';

function CommentsList({ comments }) {
    return (<div>
        { comments.map((comment, index) => {
            return <div key={index}>
                <h5>{comment.content}</h5>
                <h6>Posted By {comment.user} at {comment.date}</h6>
            </div>
        })
        }
    </div>);
}

export default CommentsList;
