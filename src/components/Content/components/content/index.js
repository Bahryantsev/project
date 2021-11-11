import React from "react";
import styles from './style/style.module.scss'
import Form from "./components/form";
import Todo from "components/Todo"
import ShouldComponentsUpdateExample from "../../../ShouldComponentUpdateExample";
import RegistrationForm from "../../../Form/RegistrationForm/RegistrationForm";

export default class Content extends React.Component{
    render(){
        return(
            <div className={styles.content}>
                <RegistrationForm/>
            </div>
        )
    }
}