import React,{Component} from "react";

class Work extends Component{
    constructor(){
        super()
        this.state={
            role:"A Developer" 
        }

    }
    changeRole(){
        this.setState({
            role:"A FullStack Developer" 
        })
    }


    render(){
        return(
            <div>
            {/* <h1>{this.props.role}</h1> */}
            <h1>{this.state.role}</h1>
            <button onClick={()=>this.changeRole()}>change</button>
            </div>
        )
    }
}

export default Work;