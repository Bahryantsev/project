import React from "react";
import styles from'./header.module.scss'
import Menu from './Components/menu'

export default class Header extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className = {styles.header}>
                <Menu/>
            </div>
        )
    }
}