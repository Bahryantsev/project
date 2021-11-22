import React from "react";
import styles from "./style.module.scss"
import Input from "components/Form/input";



export default class Form extends React.Component{
    constructor(props){
        super(props)


        this.state = {
            number1: 0,
        }
    }

    onChangeHandler1 = (event)=>{
        this.setState({
            value: event.target.value,
        }
        )
    }


    render(){
        return(
            <form className = {styles.form}>
                <Input type = 'text' onChange = {this.onChangeHandler1}/>
            <div className = {styles.number} style = {{backgroundColor:this.state.value}}>
            </div>
            </form>
        )
    }
}