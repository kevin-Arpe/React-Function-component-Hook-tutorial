import React from 'react';
import './App.css';

function FuncComp(props) {
  const numberState = React.useState(props.initNumber);
  const number = numberState[0];
  const setNumber = numberState[1];

  const [date, setDate] = React.useState(new Date().toString());

  return (
    <div className="container">
      <h2>Function Style Component</h2>
      <p>Number:{number}</p>
      <p>Date:{date}</p>
      <input type="button" value="random" onClick={
        function() {
          setNumber(Math.random());
        }
      } />
      <input type="button" value="date" onClick={
        function() {
          setDate(new Date().toString());
        }
      } />

    </div>
  )
}

class ClassComp extends React.Component {
  state = {
    number: this.props.initNumber,
    date: new Date().toString()
  }

  render() {
    return (
      <div className="container">
        <h2>Class Style Component</h2>
        <p>Number:{this.state.number}</p>
        <p>Date:{this.state.date}</p>
        <input type="button" value="random" onClick={
        function() {
          this.setState({
            number: Math.random()
          })
        }.bind(this)
      } />
      <input type="button" value="date" onClick={
        function() {
          this.setState({
            date: new Date().toString()
          })
        }.bind(this)
      } />
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello React!</h1>
        <FuncComp initNumber={2}/>
        <ClassComp initNumber={2} />
      </div>
    );
  }
}

export default App;
