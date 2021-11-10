import React from "react";
import styles from "./style.module.scss"


export default class Button extends React.Component{
    render(){
        return(
            <button onClick = {this.props.onClick} className={styles.button}>
                {this.props.children}
            </button>
        )
    }
}