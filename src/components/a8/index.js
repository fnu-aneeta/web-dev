import React from "react";
import {Route} from "react-router-dom";
import HelloWorld from "./HelloWorld";
import Practice from "./Practice";
import Build from "./Build";
import HomeScreen from "./Build/HomeScreen/HomeScreen";
import ExploreScreen from "./Build/ExploreScreen/ExploreScreen";
import ProfileScreen from "./Build/ProfileScreen/ProfileScreen";
import EditProfileScreen from "./Build/EditProfileScreen/EditProfileScreen";

function A8() {

    return (
        <div>

        <Route path="/a8/hello" exact={true}>
            <HelloWorld/>
        </Route>
        <Route path={["/a8", "/a8/practice"]} exact={true}>
            <Practice/>
        </Route>
        <Route path="/a8/build" exact={true}>
            <Build/>
        </Route>
        <Route path="/a8/twitter/home" exact={true} component={HomeScreen}/>
        <Route path="/a8/twitter/explore" exact={true}
               component={ExploreScreen}/>
        <Route path="/a8/twitter/profile" exact={true} component={ProfileScreen}/>
            <Route path="/a8/twitter/editProfile" exact={true} component={EditProfileScreen}/>

    </div>

);
}

export default A8;
