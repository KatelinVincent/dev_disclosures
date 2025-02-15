import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import React, { useState, useEffect } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


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

        <div class="float-right">
          <button onClick={() => onDelete(id)} class="bg-red-600 text-white p-1 rounded">Delete</button>
        </div>
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
  const [link, setLink] = useState("");
  const [postList, setPostList] = useState([]);
  
  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts'));
    if (storedPosts) {
      setPostList(storedPosts);
    }
  }, []);
  const [categoryError, setCategoryError] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();

    if (category !== "") {
      const newPost = {
        id: Date.now(),
        topic: header,
        title: title,
        body: body,
        link: link,
        group: category
      };

      const updatedPostList = [...postList, newPost];
      setPostList(updatedPostList);
      localStorage.setItem('posts', JSON.stringify(updatedPostList));

      setHeader("");
      setTitle("");
      setBody("");
      setLink("");
      setCategory("");
      setCategoryError("");
    } else {
      categoryRequired();
    }
  };

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(postList));
  }, [postList]);

  const handleHyperLink = (link) => {
    if (link !== "") {
      return <i className="float-left"><a href={link} target="_blank" rel="noreferrer">Learn More</a></i>;
    }
    return null;
  };
  const showCategoryError = () => {
    setCategoryError("Please Enter a Category.");
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
        <p> Welcome to DevDiscolsures... a place for disclosure of knowledge, tips, and lessons learned throughout one's career. As a developer in the begining of my career, I will use this as a platform to document and practice everything I learn on my journey. </p>
      </header>

      <div className="explore border rounded my-2">
        <h4 className='pt-2'><i>New Submission</i></h4>
        <form onSubmit={handleSubmit} className='pb-5 pt-2 m-2'>
          <div >
            <table className="table-responsive w-full text-lg ">
              <tbody><tr className=' grid grid-cols-1 md:grid-cols-4 gap-3'>
                <td>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">
                      Topic:
                    </InputGroup.Text>
                    <Form.Control
                      required
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      type="text"
                      value={header}
                      onChange={(input) => setHeader(input.target.value)}
                      placeholder="foo"
                      className="border"
                    />
                  </InputGroup>
                </td>
                <td>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">
                      Term:
                    </InputGroup.Text>
                    <Form.Control
                      required
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      type="text"
                      value={title}
                      onChange={(input) => setTitle(input.target.value)}
                      placeholder="bar"
                      className="border"
                    />
                  </InputGroup>
                </td>


                <td>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">
                      Description:
                    </InputGroup.Text>
                    <Form.Control
                      required
                      as="textarea"
                      aria-label="With textarea"
                      aria-describedby="inputGroup-sizing-default"
                      value={body}
                      onChange={(input) => setBody(input.target.value)}
                      placeholder="foo-bar is nonsense."
                      className="border"
                    />
                  </InputGroup>
                </td>

                <td>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">
                      Link/Reference:
                    </InputGroup.Text>
                    <Form.Control
                      type="url"
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      value={footer}
                      onChange={(input) => setFooter(input.target.value)}
                      placeholder="www.foo-bar.com"
                      className="border"

                    />
                  </InputGroup>
                </td>

              </tr>

              </tbody>

            </table>
          </div>
          <div className='grid grid-cols-2 gap-5'>
            <div className="justify-self-end">
              <InputGroup >
                <DropdownButton
                  required
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
          <div>
            {categoryError && <i><p className="text-red-600 text-lg font-semibold">{categoryError}</p></i>}
          </div>
        </form>


        <h2><i>Explore</i></h2>
        <div className="table-responsive">
          <table className="table-responsive w-full text-lg ">
            <tbody><tr className=' grid grid-cols-1 md:grid-cols-4 gap-3'>
              
                {postList.map((post) => (
                  <td><Post
                    key={post.id}
                    id={post.id}
                    header={post.topic}
                    title={post.title}
                    body={post.body}
                    link={post.link}
                    category={post.group}
                    onDelete={handleDelete}
                    conditionalLink={handleHyperLink}
                  /></td>
                ))}
              
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p> The posts will eventually ramp up, I started this project on 5/14 so I have a few years of information to catch up on. </p>
    </div>
  );
}

export default App;