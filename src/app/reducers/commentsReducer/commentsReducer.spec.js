import commentsReducer from './commentsReducer';

describe('comments list reducer', () => {
    it('should return the initial state when no recognized action is emitted', () => {
        expect(commentsReducer([], {})).toEqual([]);
    });

    it('should return a list of comments when FETCH_COMMENTS_SUCCESS action was emitted', () => {
        let comments = [{id: 1, author: 'soham', content: 'blog post'}];
        let action = {type: 'FETCH_COMMENTS_SUCCESS', comments};

        expect(commentsReducer([], action)).toEqual(comments);
    });
});