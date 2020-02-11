import React, {Component } from 'react'
import './Samp.css'

export class Samp extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
            <div>
                    <table align="center" bgcolor="pink" border="1">
                        <tr>
                            <img src={this.props.details.Poster} alt="Poster N/A"></img>
                            <br/>
                            <h2>Movie name:{this.props.details.Title}</h2>
                            <br/>
                            <h2>Year of Release:{this.props.details.Year}</h2>
                            <br/>
                            <h2>IMDB ID:{this.props.details.imdbID}</h2>
                            <br/>
                            <h2>Type:{this.props.details.Type}</h2>
                            <br/>
                        </tr>
                    </table>
            </div>
        )
    }
}

export default Samp