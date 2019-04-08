import React from 'react';


 export class Row extends React.Component {

    render(){
        const x = [];
        const iter = this.props.amount;

        for(let i=0 ; i < iter; i++){
            x.push(<div className = {this.props.className} data-id={i}></div>);
        }

        const list = x.map( (y) => y);

        let rows = (
            <div id="rows">
                {list}
            </div>
        );
            
      
        
        return rows;
    }
}

export default Row;