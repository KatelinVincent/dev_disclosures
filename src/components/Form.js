import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function PostForm({ handleSubmit, header, setHeader, title, setTitle, body, setBody, footer, setFooter, category, setCategory, categories, categoryError }) {
  return (
    <form onSubmit={handleSubmit} className='pb-5 pt-2 m-2'>
      <div>
        <table className="table-responsive w-full text-lg ">
          <tbody>
            <tr className='grid grid-cols-1 md:grid-cols-4 gap-3'>
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
          <InputGroup>
            <DropdownButton
              required
              variant="secondary"
              title={category || "Category"}
              id="input-group-dropdown-2"
              align="end"
              onSelect={(eventKey) => setCategory(eventKey)}
              size="lg"
            >
              {categories.map(option => (
                <Dropdown.Item key={option} eventKey={option}>{option}</Dropdown.Item>
              ))}
            </DropdownButton>
          </InputGroup>
        </div>
        <div className="justify-self-start">
          <Button variant="primary" size="lg" active type="submit">Submit</Button>
        </div>
      </div>
      <div>
        {categoryError && <i><p className="text-red-600 text-lg font-semibold">{categoryError}</p></i>}
      </div>
    </form>
  );
}

export default PostForm;