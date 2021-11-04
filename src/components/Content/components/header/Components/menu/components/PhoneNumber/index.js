import React from "react";
import styles from './PhoneNumber.module.scss'

export default class PhoneNumber extends React.Component{
    render(){
        return(
            <a className = {styles.phone}href = "callto:{this.props.value}">{this.props.value}</a>
        )
    }
}