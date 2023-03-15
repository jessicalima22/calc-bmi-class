import { Component } from "react"

export default class InputWeigh extends Component(){
    constructor(){
        super()
    }
    render(){
        return (
            <>
                <label name="inputWeight">Type your weight:</label>
                <input name="inputWeight" type="number" value={this.props.w} 
                onChange={(e)=>{this.props.sw(e.target.value)}}></input>
            </>
        )
    }
}