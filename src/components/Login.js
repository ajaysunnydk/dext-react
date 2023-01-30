import React from "react";
import '../style.css'

class Login extends React.Component{
    constructor(){
        super()
        this.state={
            cname:'Ajay'
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        console.log(this.state.cname);
    }
    handleChange=(event)=>{
        this.setState({
            cname:event.target.value
        })
        console.log(this.state.cname);
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit} className="login-form-ctn">
                    <input value={this.state.cname} type="text" onChange={this.handleChange} placeholder="Enter Email"/>
                    <input type="password"  placeholder="Enter Password"/>
                    <button type="submit">Login</button>
                </form>
            </div>
        );
    }
}
export default Login