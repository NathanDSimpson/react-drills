import React, {Component} from 'react';

class Comp1 extends Component{
    render(){
        return(
            <div>
                {this.state.text}
            </div>
        )
    }
}

export default Comp1