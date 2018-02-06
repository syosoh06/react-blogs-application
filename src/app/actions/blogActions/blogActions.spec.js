import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as blogActions from './blogActions'
import moxios from 'moxios';
import expect from 'expect';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
    beforeEach(function () {
        moxios.install();
    });

    afterEach(function () {
        moxios.uninstall();
    });

    it('creates FETCH_BLOGS_SUCCESS when fetching blogs has been done', () => {
        const expectedActions = [
            { type: 'FETCH_BLOGS_SUCCESS', blogs: [{id: 1, author: 'soham', content: 'blog post'}] }
        ];
        const store = mockStore({ blogs: [] });

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();

            request.respondWith({
                status: 200,
                response: [{id: 1, author: 'soham', content: 'blog post'}]
            });
        });

        return store.dispatch(blogActions.fetchBlogs()).then(()=>{
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('creates FETCH_BLOG_SUCCESS when fetching a blog by ID has been done', () => {
        const expectedActions = [
            { type: 'FETCH_BLOG_SUCCESS', blog: {id: 1, author: 'soham', content: 'blog post'} }
        ];
        const store = mockStore({ blog: {} });

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();

            request.respondWith({
                status: 200,
                response: {id: 1, author: 'soham', content: 'blog post'}
            });
        });

        return store.dispatch(blogActions.fetchBlogById(1)).then(()=>{
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});

