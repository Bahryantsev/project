import React from "react";
import Input from 'components/Form/input'
import Button from "../Button";
import styles from './style.module.scss'

export default class RegistrationForm extends React.PureComponent{
    constructor(props){
        super(props)

        this.state = {
            name: '',
            phone: '',
            mistake: false
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
        console.log(this.state.phone.split('').length)
        if(this.state.phone.split('').length < 10){
            this.setState({
                mistake:true
            })
        }else{
            this.setState({
                mistake:false
            })
        }
        
    }

    render(){
        return(
            <div className = {styles.container}>
                <Input key = '1' placeholder = 'name' className = {styles.input} onChange = {this.onChangeHandler1}/>
                <Input key = '2' placeholder = 'phone' className = {styles.input} onChange = {this.onChangeHandler2}/>
                { this.state.mistake == true && 
                <div key = '3' className = {styles.error}>
                    проверь еще раз
                </div>
                }
                <Button key = '4'className = {styles.btn} onClick = {this.onClickHandler}>Записаться</Button>
            </div>
        )
        
    }
}