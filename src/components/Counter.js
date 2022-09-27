import React, { Component } from 'react'

 class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    
    increment(){
        // donot use increment state directly use sestate() method
        // this.state.count = this.state.count + 1
        // console.log(this.state.count)


       /* this.setState({
            count: this.state.count + 1
        },                                 when we use increment5 pass in a fucntion to setState instead of object 
        ()=>{
            console.log(this.state.count)
        })*/

        this.setState(prevState => ({
            count: prevState.count + 1
        }))
    }
incrementFive(){
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
}

    render() {
        return (
            <div>
                <div>Count- {this.state.count}</div>
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter