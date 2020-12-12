import React, { useState } from "react";

export default function Nav(props){

    const [count, setCount] = useState(0);

    return (
        <nav>
            <ul>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
                <li>Count: {count}</li>
            </ul>
            <button onClick={()=>{ setCount(count + 1)}}>increment count</button>
        </nav>
    )
}