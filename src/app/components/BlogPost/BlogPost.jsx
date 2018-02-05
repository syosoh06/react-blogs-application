import React from 'react';

function BlogPost({ blog }) {
    return (<table className="table">
        <tbody>
        <tr>
            <td>Title</td>
            <td>{blog.title}</td>
        </tr>
        <tr>
            <td>Author</td>
            <td>{blog.author}</td>
        </tr>
        <tr>
            <td>Publish Date</td>
            <td>{blog.publish_date}</td>
        </tr>
        <tr>
            <td>Description</td>
            <td>{blog.description}</td>
        </tr>
        </tbody>
    </table>);
}

export default BlogPost;
