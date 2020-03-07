//import
import React, { useState, useEffect } from 'react';
import './App.css';

//Function Items Define
const funcStyle = 'color: blue';
let funcId = 0;

//Function Component
function FuncComp(props) {
  const numberState = useState(props.initNumber);
  const number = numberState[0];
  const setNumber = numberState[1];

  const [date, setDate] = useState(new Date().toString());

  //Side Effect
  useEffect(function() {
    console.log('%cfunc => useEffect number(componentDidMount & componentDidUpdate) '+(++funcId), funcStyle);
    document.title = number;
    return function() {
      console.log('%cfunc => useEffect number return(componentDidMount & componentDidUpdate) '+(++funcId), funcStyle);
    }
  }, [number]);

  useEffect(function() {
    console.log('%cfunc => useEffect date(componentDidMount & componentDidUpdate) '+(++funcId), funcStyle);
    document.title = date;
    return function() {
      console.log('%cfunc => useEffect date return(componentDidMount & componentDidUpdate) '+(++funcId), funcStyle);
    }
  }, [date]);

  useEffect(function() {
    console.log('%cfunc => useEffect(componentDidMount) '+(++funcId), funcStyle);
    document.title = number;
    return function() {
      console.log('%cfunc => useEffect return(componentWiiUnmount) '+(++funcId), funcStyle);
    }
  }, []);

  console.log('%cfunc => render '+(++funcId), funcStyle);
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
  );
}

//Class Items Define
let classStyle = 'color: red';
let classId = 0;

//Class Component
class ClassComp extends React.Component {
  state = {
    number: this.props.initNumber,
    date: new Date().toString()
  }

  componentWillMount() {
    console.log('%cclass => componentWillMount', classStyle);
  }
  componentDidMount() {
    console.log('%cclass => componentDidMount', classStyle);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('%cclass => shouldComponentUpdate', classStyle);
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('%cclass => componentWillUpdate', classStyle);
  }
  componentDidUpdate(nextProps, nextState) {
    console.log('%cclass => componentDidUpdate', classStyle);
  }
  componentWillUnmount(nextProps, nextState) {
    console.log('%cclass => componentWillUnmount', classStyle);
  }

  render() {
    console.log('%cclass => render '+(++classId), classStyle);
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
    );
  }
}

//App
function App() {
  let [funcShow, setFuncShow] = useState(true);
  let [classShow, setClassShow] = useState(true);

    return (
      <div>
        <h1>Hello React!</h1>
        <input type="button" value="remove func" onClick={function() {
          if (funcShow === true) {
            setFuncShow(false);
          }
          else {
            setFuncShow(true);
          }
        }}/> <br></br>
        <input type="button" value="remove class" onClick={function() {
          if (classShow === true) {
            setClassShow(false);
          }
          else {
            setClassShow(true);
          }
        }} />
        {funcShow ? <FuncComp initNumber={2}/> : null}
        {classShow ? <ClassComp initNumber={2} /> : null}
      </div>
    );
}

export default App;
