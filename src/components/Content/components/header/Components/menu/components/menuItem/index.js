import React from "react";
import styles from "./menuItem.module.scss"
export default class MenuItem extends React.Component{
    render(){
        return(
            <li className = {styles.item}><a className = {styles.link} href = "">{this.props.value}</a></li>
        )
    }
}