import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Post() {
  return (
    <Card border="secondary" style={{ width: '18rem' }}>
    <Card.Header>Object Oriented Programming</Card.Header>
    <Card.Body>
      <Card.Title>Encapsulation</Card.Title>
      <Card.Text>
      The bundling of data with the mechanisms or methods that operate on the data. It may also refer to the limiting of direct access to some of that data, such as an object's components. Essentially, encapsulation prevents external code from being concerned with the internal workings of an object.
      </Card.Text>
    </Card.Body>
    <Card.Footer><i><a href='https://en.wikipedia.org/wiki/Encapsulation_(computer_programming)#An_information-hiding_mechanism target="_blank'>Learn More</a></i></Card.Footer>
  </Card>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p> Welcome to DevDiscolsures... a place for disclosure of knowledge, tips, and lessons learned throughout one's career. As a developer in the begining of my career, I will use this as a platform to document and practice everything I learn on my jounrney. </p>
      </header>
      <p> The posts will eventually ramps up, I started this project on 5/14 so I have a few years of information to catch up on. </p>

      <Post></Post>
    </div>
  );
}

export default App;
