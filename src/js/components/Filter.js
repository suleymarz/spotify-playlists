import React, {Component} from 'react';

class Filter extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="filterComponent">
                <input type="text" placeholder="Search..." onKeyUp={event =>this.props.onTextChange(event.target.value)}/>
                
            </div>
        )        
    }
}

export default Filter;