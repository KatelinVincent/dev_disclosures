import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


function Post({ id, header, title, body, link, category, onDelete }) {
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
        <i class="float-left"><a href={link} target="_blank" rel="noreferrer">Learn More</a></i>
        <button onClick={() => onDelete(id)} class="float-right bg-red-600 text-white p-1 rounded">Delete</button>
      </Card.Footer>
    </Card>
  );
}

function App() {

  const categories = ['Programming Languages', 'Frameworks and Libraries', 'Version Control', 'Development Tools',
    'Web Development', 'Mobile Development', 'Database Management', 'Testing', 'Software Design Patterns',
    'Agile Development', 'DevOps', 'Security', 'Performance Optimization', 'Career Development', 'General Tips and Tricks', 'Other']

  const [header, setHeader] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [footer, setFooter] = useState("");
  const [category, setCategory] = useState("");

  const [postList, setPostList] = useState([]);



  const handleSubmit = (event) => {

    event.preventDefault();

    const newPost = {
      id: Date.now(),
      topic: header,
      title: title,
      body: body,
      link: footer,
      group: category
    };

    setPostList([...postList, newPost]);
    setHeader("");
    setTitle("");
    setBody("");
    setFooter("");
    setCategory("");
  };

  const handleDelete = (postId) => {
    setPostList(postList.filter(post => post.id !== postId));
  };

  const groupSelect = (eventKey) => {
    setCategory(eventKey);
  }


  return (
    <div className="App">
      <header className="App-header">
        <p> Welcome to DevDiscolsures... a place for disclosure of knowledge, tips, and lessons learned throughout one's career. As a developer in the begining of my career, I will use this as a platform to document and practice everything I learn on my jounrney. </p>
      </header>

      <div className="explore border rounded my-2">
        <h4 className='pt-2'><i>New Submission</i></h4>
        <form onSubmit={handleSubmit} className='pb-5 pt-2 m-2'>
          <div className='grid grid-cols-4 text-lg gap-3'>

            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                Topic:
              </InputGroup.Text>
              <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                type="text"
                value={header}
                onChange={(input) => setHeader(input.target.value)}
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
                onChange={(input) => setTitle(input.target.value)}
                placeholder="bar"
                className="border"
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                Description:
              </InputGroup.Text>
              <Form.Control
                as="textarea"
                aria-label="With textarea"
                aria-describedby="inputGroup-sizing-default"
                value={body}
                onChange={(input) => setBody(input.target.value)}
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
                onChange={(input) => setFooter(input.target.value)}
                placeholder="www.foo-bar.com"
                className="border"
              />
            </InputGroup>
          </div>
          <div className='grid grid-cols-2 gap-5'>
            <div className="justify-self-end">
              <InputGroup >
                <DropdownButton
                  variant="secondary"
                  title={category || "Category"}
                  id="input-group-dropdown-2"
                  align="end"
                  onSelect={groupSelect}
                  size="lg"

                >
                  {
                    categories.map(option => (
                      <Dropdown.Item key={option} eventKey={option}>{option}</Dropdown.Item>
                    ))
                  }
                </DropdownButton>
              </InputGroup>
            </div>
            <div className="justify-self-start">
              <Button variant="primary" size="lg" active type="submit" >Submit</Button>
            </div>
          </div>
        </form>


        <h2><i>Explore</i></h2>
        <div className="flex grid grid-cols-8 gap-1">
          {postList.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              header={post.topic}
              title={post.title}
              body={post.body}
              link={post.link}
              category={post.group}
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