export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_COMMENT_SUCCESS':
            return [
                ...state,
                Object.assign({}, action.comment)
            ];
        case 'FETCH_COMMENTS_SUCCESS':
            return action.comments;
        default:
            return state;
    }
}
