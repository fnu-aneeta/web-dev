import React from "react";
import {Route} from "react-router-dom";
import HelloWorld from "./HelloWorld";
import Practice from "./Practice";
import Build from "./Build";
import HomeScreen from "./Build/HomeScreen/HomeScreen";
import ExploreScreen from "./Build/ExploreScreen/ExploreScreen";

function A6() {

    return (
        <div>

        <Route path="/a6/hello" exact={true}>
            <HelloWorld/>
        </Route>
        <Route path={["/", "/a6", "/a6/practice"]} exact={true}>
            <Practice/>
        </Route>
        <Route path="/a6/build" exact={true}>
            <Build/>
        </Route>
        <Route path="/a6/twitter/home" exact={true} component={HomeScreen}/>
        <Route path="/a6/twitter/explore" exact={true}
               component={ExploreScreen}/>

    </div>

);
}

export default A6;
