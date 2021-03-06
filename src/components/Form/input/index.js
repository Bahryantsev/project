import React from "react";
import styles from "./style.module.scss"

export default class Input extends React.Component{
    render(){
        return(
            <input type = {this.props.type}
            className = {styles.input}
            onChange = {this.props.onChange}/>
        )
    }
}