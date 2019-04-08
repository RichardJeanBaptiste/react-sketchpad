import React, { Component } from 'react';
import './App.css';
import Row from './Row.js';
import NumberForm from './Number.js';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {num: 16};
    this.numChange = this.numChange.bind(this);
    this.classChange = this.classChange.bind(this);
  }

  numChange(e) {
    this.setState({
      num: (e.target.value),
    })
  }

  classChange(){
    
    if(onmouseover === true){
      return "horihover";
    }else{
      return "hori";
    }
  }
//abcd
  render() {

    const a = [];
    const iter = this.state.num;

    for(let i=0; i < iter; i++){
      a.push(<Row className={this.classChange()}  amount={this.state.num}/>);
    }

    const listItems = a.map((b, index) => <li>{b}</li>);

    return (
      <div className="App">

        <NumberForm  onClick={this.handleClick} number={this.state.num} onChange={this.numChange}/>
        <br/>
        <ul className="grid">{listItems}</ul>

      </div>
    );
  }
}

export default App;
