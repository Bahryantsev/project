import React from "react";
import styles from './style.module.scss'
import Button from "../../Form/Button";

export default class Todoitem extends React.Component{

    onClickHandler = ()=>{
        this.props.onRemove(this.props.id)
    }
    render(){
        return(
            <div className={styles.item}>
                
                {this.props.title}
            <Button onClick = {this.onClickHandler}>Delete</Button>
            </div>

        )
    }
}