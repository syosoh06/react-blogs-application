/**
 * @overview Example spec file demonstrating a Jasmine test.
 *
 * @see {@link https://jasmine.github.io/2.8/introduction}
 */

import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';

import BlogsList from './BlogsList';

describe('Home', function() {
  const blogs = [{ id: 1, author: 'soham', content: 'blog post' }];

  it('blogs list component should render', function() {
      const componentTree = ReactTestUtils.renderIntoDocument(<BlogsList blogs = { blogs } />);
      const singleComponentWithMatchedClass = ReactTestUtils.findRenderedDOMComponentWithClass( componentTree, 'table-responsive');

      expect(ReactTestUtils.isElementOfType(<BlogsList blogs = { blogs }/>, BlogsList)).toBe(true);
      expect(singleComponentWithMatchedClass.className).toBe('table-responsive');
  });
});
