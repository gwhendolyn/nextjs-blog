import React, { useState } from "react";

export default function Counter(props) {
    const [count, setCount] = useState(0);
    
    const buttonStyle = {
        backgroundColor: "black",
        color: "white",
        padding: props.size + "rem",
        borderRadius: "10px",
    };
    
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1 * props.mult)} style={buttonStyle}>{props.name}</button>
        </div>
    );
}