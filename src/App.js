import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import Post from './components/Post';
import PostForm from './components/Form';
import Header from './components/Header';

function App() {
  const categories = ['Programming Languages', 'Frameworks and Libraries', 'Version Control', 'Development Tools',
    'Web Development', 'Mobile Development', 'Database Management', 'Testing', 'Software Design Patterns',
    'Agile Development', 'DevOps', 'Security', 'Performance Optimization', 'Career Development', 'General Tips and Tricks', 'Other'];

  const [header, setHeader] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [footer, setFooter] = useState("");
  const [category, setCategory] = useState("");
  const [link, setLink] = useState("");
  const [postList, setPostList] = useState([]);
  const [categoryError, setCategoryError] = useState("");

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts'));
    if (storedPosts) {
      setPostList(storedPosts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(postList));
  }, [postList]);

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
      showCategoryError();
    }
  };

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

  return (
    <div className="App">
      <Header />
      <div className="explore border rounded my-2">
        <h4 className='pt-2'><i>New Submission</i></h4>
        <PostForm
          handleSubmit={handleSubmit}
          header={header}
          setHeader={setHeader}
          title={title}
          setTitle={setTitle}
          body={body}
          setBody={setBody}
          footer={footer}
          setFooter={setFooter}
          category={category}
          setCategory={setCategory}
          categories={categories}
          categoryError={categoryError}
        />
        <h2><i>Explore</i></h2>
        <div className="table-responsive">
          <table className="table-responsive w-full text-lg ">
            <tbody>
              <tr className='grid grid-cols-1 md:grid-cols-4 gap-3'>
                {postList.map((post) => (
                  <td key={post.id}>
                    <Post
                      id={post.id}
                      header={post.topic}
                      title={post.title}
                      body={post.body}
                      link={post.link}
                      category={post.group}
                      onDelete={handleDelete}
                      conditionalLink={handleHyperLink}
                    />
                  </td>
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