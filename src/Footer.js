import React from "react";
import './style.css'

class Footer extends React.Component{
    constructor(props){
        super(props)
        this.a = props.devName;
        this.state = {
            bottom:"CopyRights",
            year:props.year
        }
        this.changer = this.changer.bind(this)
    }
    changer(){
        this.setState({
            bottom:"Rights",
            year:2023
        })
    }
    render(){
        return(
            <div className="footer-ctn">
                Designed By <a href="https://www.github.com/ajaysunnydk"> {this.a}.</a>
                <button onClick={this.changer} >Click Here</button>
                <p>{this.state.bottom}@{this.state.year}</p>
            </div>
        );
    }
}
export default Footer