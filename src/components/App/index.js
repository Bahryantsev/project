import React from "react";
import Header from "../Content/components/header";
import Footer from "../Content/components/footer";
import Content from "../Content/components/content";


class App extends React.Component{
    render(){
        return(
            <div>
            <Header/>
            <Content/>
            <Footer/>
            </div>
           
        )
    }
}

export default App;