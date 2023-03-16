import { Component } from "react"

export default class Result extends Component {
    render(){
        return (
            <>
                <p>Result: {Number(this.props.r).toFixed(2)}</p>
            </>
        )
    }
} 
