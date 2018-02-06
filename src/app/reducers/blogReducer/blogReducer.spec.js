import blogReducer from './blogReducer';

describe('single blog reducer', () => {
    it('should return the initial state when no recognized action is emitted', () => {
        expect(blogReducer({}, {})).toEqual({});
    });

    it('should return a single blog when FETCH_BLOG_SUCCESS action was emitted', () => {
        expect(blogReducer({}, {type: 'FETCH_BLOG_SUCCESS',
            blog: {id: 1, author: 'soham', content: 'blog post'}})).toEqual({id: 1, author: 'soham', content: 'blog post'});
    });
});