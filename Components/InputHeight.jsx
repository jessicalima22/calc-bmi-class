import { Component } from "react"

export default class InputHeigh extends Component{
    render(){
        return (
            <>
                <label name="inputHeight">Type your height:</label>
                <input name="inputHeight" type="number" value={this.props.h} 
                onChange={(e)=>{this.props.sh(e.target.value)}}></input>
            </>
        )
    }
}
