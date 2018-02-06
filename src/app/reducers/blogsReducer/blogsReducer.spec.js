import blogsReducer from './blogsReducer';

describe('blogs list reducer', () => {
    it('should return the initial state when no recognized action is emitted', () => {
        expect(blogsReducer([], {})).toEqual([]);
    });

    it('should return a list of blogs when FETCH_BLOGS_SUCCESS action was emitted', () => {
        let blogs = [{id: 1, author: 'soham', content: 'blog post'}];
        let action = {type: 'FETCH_BLOGS_SUCCESS', blogs};

        expect(blogsReducer({}, action)).toEqual(blogs);
    });
});