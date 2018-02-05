import React from 'react';
import { Link } from 'react-router';

function BlogRow({ blog }) {
  return (<tr>
    <td>{ blog.title }</td>
    <td>{ blog.author }</td>
    <td>{ blog.publish_date }</td>
    <td><Link to={`/blogs/${blog.id}`}>{ blog.slug }</Link></td>
    <td>{ blog.description }</td>
  </tr>);
}

export default BlogRow;
