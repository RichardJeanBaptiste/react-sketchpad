import React from 'react';


 export class Row extends React.Component {
   constructor(props){
    super(props)
    this.state = {active: null, colors: this.props.color}
   }

   toggle(){
     this.setState({
         active: true
     })
   }

   backColor(){
       if(this.state.active === true){
           let style = {
               backgroundColor : this.state.colors
           }
           return style;
       }else{
           let style = {
               backgroundColor : 'white'
           }
           return style;
       }
   }

    render(){

        let rows = <div className={this.props.className} style={this.backColor()} onMouseOver={() => {this.toggle()}}></div>
                
        return rows;
    }
}

export default Row;