import Axios from 'axios';

const apiUrl = 'http://localhost:9001';

export const fetchCommentsSuccess = (comments) => {
    return {
        type: 'FETCH_COMMENTS_SUCCESS',
        comments
    };
};

export const addCommentSuccess = (comment) => {
    return {
        type: 'ADD_COMMENT_SUCCESS',
        comment
    }
};

export const fetchComments = (id) => {
  return (dispatch) => {
      Axios.get(apiUrl + '/posts/' + id + '/comments')
          .then(res => {
              console.log(res);
              dispatch(fetchCommentsSuccess(res.data))
          })
          .catch(err => {
              throw err;
          });
  }
};

export const addComment = (comment, id) => {
    return (dispatch) => {
        return Axios.post(apiUrl + '/posts/' + id + '/comments', comment)
            .then(response => dispatch(addCommentSuccess(response.data)))
            .catch(error => {
                throw(error);
            });
    };
};