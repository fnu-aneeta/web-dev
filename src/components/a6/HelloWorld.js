import React from "react";
import {Link} from "react-router-dom";


const HelloWorld = () => {
    return( <>
            <h1>Hello World!</h1>
            <Link to="/a6/practice">
                Practice
            </Link> |
            <Link to="/a6/build">
                Build
            </Link> |
            <Link to="/a6/twitter/home">
                Challenge
            </Link>
        </>
    )
};


export default HelloWorld;