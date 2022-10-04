import React, { Component } from 'react';

//NEEDS THIS CODE^^^  import React, { Component } from 'react';

// class extends Component
class PersonCard extends Component{
    constructor(props) {
        super(props);
        // reloads component on screen
        this.state = {
            age: this.props.age
        };
    }
    render(){
        return (        
            <div>
                <h3>{this.props.lastName}, {this.props.firstName}</h3>
                <h5>Age: {this.state.age}</h5> 
                <h5>Hair Color: {this.props.hairColor}</h5>
                <button onClick={()=>this.setState({age: this.state.age+1})}>Birthday Button for {this.props.firstName}</button>
            </div>)
    }
}


export default PersonCard

//THIS IS WHAT YOU NEED TO HAVE DYNAMIC
//         this.state = {
//             age: this.props.age
//         };
{/* <h5>Age: {this.state.age}</h5> 
<button onClick={()=>this.setState({age: this.state.age+1})}>Birthday Button for {this.props.firstName}</button> */}
