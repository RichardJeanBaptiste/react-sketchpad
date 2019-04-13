import React from 'react';


 export class Row extends React.Component {
   constructor(props){
    super(props)
    this.state = {active: null}
   }

   toggle(){
     this.setState({
         active: true
     })
   }

   backColor(){
       if(this.state.active === true){
           let style = {
               backgroundColor : 'blue'
           }
           return style;
       }else{
           let style = {
               backgroundColor : 'yellow'
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