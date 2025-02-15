import React from 'react';
import Card from 'react-bootstrap/Card';

function Post({ id, header, title, body, link, category, onDelete, conditionalLink }) {
  return (
    <Card border="secondary" style={{ marginBottom: '1rem' }}>
      <Card.Header className="d-flex justify-content-between ">
        <div>
          {header}
        </div>
        <div>
          <i className='text-slate-400'>{category}</i>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <div>
          {conditionalLink(link)}
        </div>
        <div className="float-right">
          <button onClick={() => onDelete(id)} className="bg-red-600 text-white p-1 rounded">Delete</button>
        </div>
      </Card.Footer>
    </Card>
  );
}

export default Post;