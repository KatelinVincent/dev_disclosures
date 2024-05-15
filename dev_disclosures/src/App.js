import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';

function Post({ postHeader, postTitle, postBody, postLink }) {
  return (
    <Card border="secondary" style={{ width: '18rem' }}>
      <Card.Header>{postHeader}</Card.Header>
      <Card.Body>
        <Card.Title>{postTitle}</Card.Title>
        <Card.Text>{postBody}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <i>
          <a href={postLink} target="_blank" rel="noreferrer">
            Learn More
          </a>
        </i>
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


  return (
    <div className="App">
      <header className="App-header">
        <p> Welcome to DevDiscolsures... a place for disclosure of knowledge, tips, and lessons learned throughout one's career. As a developer in the begining of my career, I will use this as a platform to document and practice everything I learn on my jounrney. </p>
      </header>
      <p> The posts will eventually ramps up, I started this project on 5/14 so I have a few years of information to catch up on. </p>

      {postList.map((post, index) => (
        <Post
          key={index}
          postHeader={post.topic}
          postTitle={post.title}
          postBody={post.body}
          postLink={post.link}
        />
      ))}

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
          <button type="submit">Submit</button>
        </form>
      </Card>
    </div>
  );
}

export default App;
