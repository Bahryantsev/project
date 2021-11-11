import React from "react";
import Button from "../Form/Button";
import styles from './style.module.scss'

export default class ShouldComponentsUpdateExample extends React.PureComponent{
    constructor(props){
        super(props)

        this.state = {
            count: 0
        }
    }

    onClickHandler = () =>{
        this.setState({
            count: 10
        })
    }


    // shouldComponentUpdate(nextProps, nextState){
    //     console.log(this.state,nextState)
    //     if (this.state.count !== nextState.count){
    //         return true
    //     }else{
    //         return false
    //     }
        

    // }

  
    render(){
        console.log('render')
        return(
            <div>
                <span className = {styles.span}>click count:{this.state.count}</span>
                <Button onClick = {this.onClickHandler}> clickme</Button>
            </div>
        )
    }
}