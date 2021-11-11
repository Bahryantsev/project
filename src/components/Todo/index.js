import React from "react";
import TodoItem from "./TodoItem";
import styles from './style.module.scss'
import Button from "../Form/Button";
import Input from 'components/Form/input'

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


            ],
            text: ''
        }
    }

    onRemoveHandler = (item)=>{
         let newItems = this.state.todos.filter(todo => todo.id !== item)
        this.setState({
            todos: newItems
        })
    }

    onChangeInputHandler = (event) =>{
        
        this.setState({
            text: event.target.value
        })
    }

    onCreateItemHandler = () =>{
        const newTodo = {
            id: Math.random(),
            title: this.state.text
        }
      this.setState({
          todos: this.state.todos.concat(newTodo)
      })
        
    }

    render(){
        return(
            <div className= {styles.content}>
                <div>
                    <Input type = 'text' onChange = {this.onChangeInputHandler}/>
                    <Button onClick = {this.onCreateItemHandler}> add</Button>
                </div>
                {this.state.todos.map(item=>(
                    <TodoItem
                    key = {item.id}
                    id = {item.id}
                    title = {item.title}
                    onRemove = {this.onRemoveHandler}/>
                ))}
            </div>
        )
    }
}