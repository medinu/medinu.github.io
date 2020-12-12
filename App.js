import React from "react";
import ReactDOM from "react-dom";

import Nav from './Components/Nav';

class App extends React.Component {
    render(){
        return (
            <>
                <Nav/>
                <h1>Dinesh Pandey</h1>
            </>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));