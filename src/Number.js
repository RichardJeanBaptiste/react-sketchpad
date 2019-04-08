import React from 'react'; 

export class NumberForm extends React.Component {

    render(){

        const form = (
            <div>
                <form>
                    <input type="text" placeholder={this.props.number} onChange={this.props.onChange}></input>

                </form>
            </div>
        );

        return form;
    }
}

export default NumberForm;