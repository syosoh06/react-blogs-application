/**
 * @overview Example spec file demonstrating a Jasmine test.
 *
 * @see {@link https://jasmine.github.io/2.8/introduction}
 */

import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import BlogPage from './BlogPage';

describe('BlogPage', function() {
  let component;
  const props = {
    params: { id: 1 },
    blog: { id: 1, author: 'soham', content: 'blog post' }
  };

  beforeEach(function() {
    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<BlogPage params = {props.params} blog = {props.blog} />);
    component = renderer.getRenderOutput();
  });

  it('the blog page component should render properly', function() {
    expect(component.props.children.length).toBe(2);
  });
});
