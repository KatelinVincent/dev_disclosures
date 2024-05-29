import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



function Post({ id, header, title, body, link, onDelete }) {
  return (
    <Card border="secondary" style={{ marginBottom: '1rem' }}>
      <Card.Header>{header}</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <i class="float-left"><a href={link} target="_blank" rel="noreferrer">Learn More</a></i>
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
      id: Date.now(),
      topic: header,
      title: title,
      body: body,
      link: footer
    };

    setPostList([...postList, newPost]);
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



      {/* <div className="center">
          <Card border="secondary" style={{ width: '18rem' }}>
            <form onSubmit={handleSubmit}>
              <Card.Header >
                Topic:
                <input
                  type="text"
                  value={header}
                  onChange={(e) => setHeader(e.target.value)}
                  placeholder="foo"
                  className="border"
                />
              </Card.Header>
              <Card.Body class='grid grid-rows-3'>
                Term:
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="bar"
                  className="border"
                />
                Description:
                <textarea
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  placeholder="foo-bar is nonsense."
                  className="border"
                />
              </Card.Body>
              <Card.Footer class='grid grid-rows-2'>
                Link/Reference: 
                <input
                  type="text"
                  value={footer}
                  onChange={(e) => setFooter(e.target.value)}
                  placeholder="www.foo-bar.com"
                  className="border"
                />
              </Card.Footer>
              <button class="bg-blue-500 text-white p-1 rounded" type="submit">Submit</button>
            </form>
          </Card>
        </div> */}
      <div class="explore border rounded my-2">
      <h4 class='pt-2'><i>New Submission</i></h4>
        <form onSubmit={handleSubmit} class='pb-5 pt-2 m-2'>
          <div class='grid grid-cols-4 text-lg gap-4'>

            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                Topic:
              </InputGroup.Text>
              <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                type="text"
                value={header}
                onChange={(e) => setHeader(e.target.value)}
                placeholder="foo"
                className="border"
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                Term:
              </InputGroup.Text>
              <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="bar"
                className="border"
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">
              Description:
              </InputGroup.Text>
              <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="foo-bar is nonsense."
                className="border"
              />
            </InputGroup>


            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">
              Link/Reference:
              </InputGroup.Text>
              <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                type="text"
                value={footer}
                onChange={(e) => setFooter(e.target.value)}
                placeholder="www.foo-bar.com"
                className="border"
              />
            </InputGroup>
          </div>
          <Button variant="primary" size="lg" active type="submit">Submit</Button>
          {/* <button class="bg-blue-500 text-white p-1 rounded" type="submit">Submit</button> */}
        </form>


        <h2><i>Explore</i></h2>
        <div class="flex grid grid-cols-8 gap-1">
          {postList.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              header={post.topic}
              title={post.title}
              body={post.body}
              link={post.link}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
      <p> The posts will eventually ramp up, I started this project on 5/14 so I have a few years of information to catch up on. </p>
    </div>
  );
}

export default App;