import React from "react";
import Input from 'components/Form/input'
import Button from "../Button";
import styles from './style.module.scss'

export default class RegistrationForm extends React.PureComponent{
    constructor(props){
        super(props)

        this.state = {
            name: '',
            phone: ''
        }
    }

    onChangeHandler1 = (e)=>{
        this.setState({
            name: e.target.value
        })
    }
    onChangeHandler2 = (e)=>{
        this.setState({
            phone: e.target.value
        })
    }
    onClickHandler = ()=>{
        alert('name: ' + this.state.name + ' phone: '+ this.state.phone)
    }

    render(){
        return(
            <div className = {styles.container}>
                <Input placeholder = 'name' className = {styles.input} onChange = {this.onChangeHandler1}/>
                <Input placeholder = 'phone' className = {styles.input} onChange = {this.onChangeHandler2}/>
                <Button className = {styles.btn} onClick = {this.onClickHandler}>Записаться</Button>
            </div>
        )
        
    }
}