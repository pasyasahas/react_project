import React, {Component} from 'react'
import Output from './Output'
import axios from 'axios'
import './Welcome.css'

class Welcome extends Component{
    constructor(props){
        super(props);
        this.state={
            Title:"",
            Year:"",
            value1:"",
            value2:"",
            Result:[]
        }

        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        
    }
    
    handleChange(event){
        
        this.setState({Title:event.target.value});
        this.setState({Year:event.target.value});
        this.setState({value1:event.target.value1});
        this.setState({value2:event.target.value2});
    
    }

    handleSubmit(event){

        event.preventDefault();
        axios.post('http://www.omdbapi.com/?apiKey=bb270b98&s='+this.state.Title).
        then(res=>{
            this.setState({
                Result:res.data
            })
            
            console.log(this.state.Result)
        })



    }

    render() {
        const cont=this.state.Result.Response==='True'?this.state.Result.Search.map((movie,index)=><Output name={movie} key={index}></Output>):null;
        return (
            <div>
                <br/>
                <br/>                                              
                <br/>
                <br/>
                <br/>
                <br/>
                 <h1 style={{color:'black',fontSize:'100px' }}><font face="times, serif" > Filmora</font></h1>
                 <br/>
                <br/>
                <br/>
                <br/>
                <br/><br/><br/>
                <br/><br/><br/>
                <form onSubmit={this.handleSubmit}>
                    <lable>
                    <font color='black' size='20'><b><i>Movie:</i></b></font>
                        <input type="text" size="30" id="textbox" name="Title" onChange={this.handleChange}></input>
                    </lable>
                    <lable>
                    <font color='black' size='20'><b><i>Year:</i></b></font>
                        <input type="text" size="10" id="textbox" name="Year"></input>
                    </lable>
                    <label>
                    <font color='black' size='20'><b><i>Film type:</i></b></font>
                        { <select id="textbox" value={this.state.value1} onChange={this.handleChange}>
                            <option value="Short">Short</option>
                            <option value="Long">Long</option>

                        </select> }
                    </label>
                    <label>
                    <font color='black' size='20'><b><i>File type:</i></b></font>
                        {<select id="textbox" value={this.state.value2} onChange={this.handleChange}>
                            <option value="Json">Json</option>
                            <option value="Excel">Excel</option>

                        </select> }
                    </label>
                    <input type="submit" style = {{backgroundColor:'pink',fontSize:'20px',fontStyle:'Italic'}} value="submit"/>
                </form>
                <div>{cont}</div>
            </div>
        )
    }

}
export default Welcome