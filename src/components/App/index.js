import React from "react";
import Header from "../Content/components/header";
import Footer from "../Content/components/footer";
import Content from "../Content/components/content";
import styles from './style/style.module.scss'


class App extends React.Component{
    render(){
        return(
            <div className = {styles.container}>
            <Header/>
            <Content/>
            <Footer/>
            </div>
           
        )
    }
}

export default App;