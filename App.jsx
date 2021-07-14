import React from "react";
import ReactDOM from "react-dom";

import Nav from './Components/Nav';
import BodyComp from './Components/Body'

class App extends React.Component {
    render(){
        return (
            <>
                <Nav/>
                <BodyComp/>
            </>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));