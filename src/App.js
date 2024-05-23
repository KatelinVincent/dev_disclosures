import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';


function Post({ id, postHeader, postTitle, postBody, postLink, onDelete }) {
  return (
    <Card border="secondary" style={{ marginBottom: '1rem' }}>
      <Card.Header>{postHeader}</Card.Header>
      <Card.Body>
        <Card.Title>{postTitle}</Card.Title>
        <Card.Text>{postBody}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <i class="float-left">
          <a href={postLink} target="_blank" rel="noreferrer">
            Learn More
          </a>
        </i>
        <button onClick={() => onDelete(id)} class="float-right bg-red-600 text-white p-1 rounded">Delete</button>
      </Card.Footer>
    </Card>
  );
}

function App() {
  const [header, setHeader] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [footer, setFooter] = useState("");
  const [postList, setPostList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPost = {
      id: Date.now(), // Generate a unique ID for each post
      topic: header,
      title: title,
      body: body,
      link: footer
    };
    setPostList([...postList, newPost]);
    // Clear input fields after submission
    setHeader("");
    setTitle("");
    setBody("");
    setFooter("");
  };

  const handleDelete = (postId) => {
    setPostList(postList.filter(post => post.id !== postId));
  };

  return (
    <div className="App">
      <header className="App-header">
        <p> Welcome to DevDiscolsures... a place for disclosure of knowledge, tips, and lessons learned throughout one's career. As a developer in the begining of my career, I will use this as a platform to document and practice everything I learn on my jounrney. </p>
      </header>
      <p> The posts will eventually ramps up, I started this project on 5/14 so I have a few years of information to catch up on. </p>

      <div class="flex grid grid-cols-8 gap-1">
        {postList.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            postHeader={post.topic}
            postTitle={post.title}
            postBody={post.body}
            postLink={post.link}
            onDelete={handleDelete}
          />
        ))}
      </div>
      <div className="center">
        <Card border="secondary" style={{ width: '18rem' }}>
          <form onSubmit={handleSubmit}>
            <Card.Header>
              Topic:
              <input
                type="text"
                value={header}
                onChange={(e) => setHeader(e.target.value)}
                placeholder="Topic"
                className="border"
              />
            </Card.Header>
            <Card.Body>
              Term:
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                className="border"
              />
              Description:
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="Description"
                className="border"
              />
            </Card.Body>
            <Card.Footer>
              Link/Reference:
              <input
                type="text"
                value={footer}
                onChange={(e) => setFooter(e.target.value)}
                placeholder="Link or Reference to more information"
                className="border"
              />
            </Card.Footer>
            <button class="bg-blue-500 text-white p-1 rounded" type="submit">Submit</button>
          </form>
        </Card>
      </div>
    </div>
  );
}

export default App;