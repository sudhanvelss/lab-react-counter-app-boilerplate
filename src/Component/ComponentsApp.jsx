import React from "react";

class Counter extends React.Component{
    constructor(){
        super();
        this.state = {count : 0}
    }
   render(){
    let IncrementCount = () => {
        let x = this.state.count + 1
        this.setState({count: x})
    }
    let Decrement = () =>{
        let y = this.state.count - 1
        this.setState({count: y})
    }
    let Reset = () => {
        let z = this.state.count = 0
        this.setState({count: z})
    } 
    return(
        <div>
            <h1>Counter App</h1>
            <div>{this.state.count}</div>
            <div>
                <button className="Incre" onClick={() => IncrementCount()}>+</button>
                <button className="Decre" onClick={() => Decrement()}>-</button>
                <button className="Reset" onClick={() => Reset()}>Reset</button>
            </div>
        </div>
       )
   }
    }

export default Counter