import React, {Component } from 'react'
import Samp from './Samp'

export class Output extends Component{
    constructor(props){
        super(props)
        this.state={
            showmodel:false
        }
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(event){
        this.setState({showModel:!this.setState.showModel});
        console.log("low")
        console.log(this.state.showModel)
    }
    handleSubmit(){
        if(this.state.showModel){
            console.log("high")
            return <Samp details={this.props.name}/>;
        }
        else{
            console.log("Output")
            return null;
        }
    }
    render(){
        return(
            <div >
                <br></br>

                            <img src={this.props.name.Poster} height="450" width="200" alt={this.props.name.title}></img> <br/>
                            <form onSubmit={this.handleSubmit}>
                                <p align="center" ><input type="button" style = {{backgroundColor:'blue',fontSize:'30px',fontStyle:'Italic'}} onClick={this.handleChange} name="Details" value="Details"></input></p>
                                {this.handleSubmit()}
                            </form>                            
            </div>
        )
    }
}

export default Output;