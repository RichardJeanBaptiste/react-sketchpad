import React, { Component } from 'react';
import './App.css';
import NumberForm from './Number';
import Row from './Row.js';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {num: 16, active: null, color: 'grey'};
    this.numChange = this.numChange.bind(this);
    this.colorChange = this.colorChange.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
  }

  numChange(e) {
    this.setState({
      num: (e.target.value),
    })
  }

  handleColorChange(e){
    this.setState({
      color: e.target.value,
    })
  }

  colorChange() {
    let style = {
      backgroundColor: this.state.color
    }

    return style;
  }
  
  render() {
    
    const a = [];
    const x = [];
    const iter = this.state.num;


    for(let i = 0; i < iter; i++){
      x.push( <Row className="hori" color={this.state.color}/>)
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
        
        <br/>
        {listItems}
      
    </div>

    );
  }
}

export default App;
