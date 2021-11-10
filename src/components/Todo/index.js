import React from "react";
import TodoItem from "./TodoItem";
import styles from './style.module.scss'

export default class Todo extends React.Component{
    constructor (props){
        super(props)


        this.state = {
            todos:[
               {id :1, title: "Придти домой"},
               {id :2, title: "Выпить пива"},
               {id :3, title: "Выпить пива"},
               {id :4, title: "Выпить пива"},
               {id :5, title: "Выпить пива"},
               {id :6, title: "Выпить пива"},
               {id :7, title: "Выпить пива"},

            ]
        }
    }

    onRemoveHandler = (item)=>{
         let newItems = this.state.todos.filter(todo => todo.id !== item)
        this.setState({
            todos: newItems
        })
    }


    render(){
        return(
            <div className= {styles.content}>
                {this.state.todos.map(item=>(
                    <TodoItem
                    id = {item.id}
                    title = {item.title}
                    onRemove = {this.onRemoveHandler}/>
                ))}
            </div>
        )
    }
}