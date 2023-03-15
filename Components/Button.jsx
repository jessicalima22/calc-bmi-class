import { Component } from "react";

export default class Button extends Component{
    constructor(){
        super()
        this.fcalc = this.fcalc.bind(this)
    }

    fcalc=()=>{
        this.props.sr(this.props.w/(this.props.h*this.props.h))
      }
      render(){
        return (
            <>
                <button onClick={this.fcalc}>Calculate</button>
            </>
        )
    }
}