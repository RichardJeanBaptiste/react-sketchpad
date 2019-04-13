import React, { Component } from 'react';
import './App.css';
import Row from './Row.js';
import NumberForm from './Number';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {num: 16, active: null};
    this.numChange = this.numChange.bind(this);
  }

  numChange(e) {
    this.setState({
      num: (e.target.value),
    })
  }
  
  render() {
    
    const a = [];
    const x = [];
    const iter = this.state.num;

    for(let i = 0; i < iter; i++){
      x.push(<Row className="hori"/>)
    }

    const list = x.map( (y) => y);

    for(let i =0; i < iter; i++){
      a.push(
        <div className="grid">
          {list}
        </div>
       )
    }

    const listItems = a.map((b) => b);

    return (
      <div className="App">
        
        <NumberForm  onClick={this.handleClick} number={this.state.num} onChange={this.numChange}/>
        <br/>
        {listItems}
        
    </div>

    );
  }
}

export default App;
