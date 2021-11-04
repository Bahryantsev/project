import React from "react";
import styles from "./menu.module.scss"
import MenuItem from "./components/menuItem";
import PhoneNumber from "./components/PhoneNumber";

export default class Menu extends React.Component{
    constructor(props){
        super(props)


        this.state = {
            value: ''
        }
    }
    render(){
        
        
        return(
            <ul className = {styles.menu}>
                <MenuItem value = 'Курсы'/>
                <MenuItem value = 'Мастер-классы'/>
                <MenuItem value = 'Преподаватели'/>
                <MenuItem value = 'Блог'/>
                <MenuItem value = 'Контакты'/>
                <div className = {styles.phones}>
                    <PhoneNumber value = '+375 29 105-59-59'/>
                    <PhoneNumber value = '+375 29 305-59-59'/>
                </div>
                
            </ul>

        )
    } 
}