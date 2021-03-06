import React from "react";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoItem from "./Todo/TodoItem";
import TodoList from "./Todo/TodoList";
import {Link} from "react-router-dom";
import ReduxExamples from "./ReduxExamples/components/index";


const Practice = () => {
    return(
        <div>
            <h1>Practice</h1>
            <Link to = "/a7/hello">
                Hello
            </Link> |
            {/*<Link to = "/a7/build">*/}
            {/*    Build*/}
            {/*</Link>*/}
            {/*<Link to="/a7/twitter/explore">Build</Link> |*/}
            {/*<Link to="/a7/twitter/home">Challenge</Link>*/}
            <Link to="/a7/twitter/home">Build</Link> |
            <Link to="/a7/twitter/profile">Challenge</Link>
            <ReduxExamples/>
            <TodoList/>
            <TodoItem/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
        </div>
    )
};



export default Practice;