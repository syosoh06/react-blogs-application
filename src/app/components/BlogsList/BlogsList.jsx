/**
 * @overview Home page.  Renders static content.
 */
import React from 'react';
import {connect} from 'react-redux';

import BlogRow from '../BlogRow/BlogRow';

class BlogsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.table(this.props.blogs);
    return (<div className="table-responsive">
      <table className="table">
    <thead>
      <tr>
        <th>Title</th>
        <th>Author</th>
        <th>Publish Date</th>
        <th>Slug</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      { this.props.blogs
        .sort((blogA, blogB) => (new Date(blogB.publish_date) - new Date(blogA.publish_date)))
        .map(blog => <BlogRow blog = { blog } key = { blog.id } />)
      }
    </tbody>
  </table>
    </div>
);
  }
}

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs
  };
};

export default connect(mapStateToProps)(BlogsList);
