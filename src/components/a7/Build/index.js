import React from "react";
// import NavigationSidebar from "./NavigationSidebar";
//import WhoToFollowListItem from "./WhoToFollowList/WhoToFollowListItem";
//import WhoToFollowList from "./WhoToFollowList/WhoToFollowList";
// import PostSummaryItem from "./PostSummaryList/PostSummaryListItem";
// import PostSummaryList from "./PostSummaryList/PostSummaryList";
//import {Link} from "react-router-dom";
import {Route} from "react-router-dom";
import ExploreScreen from "./ExploreScreen/ExploreScreen";
import HomeScreen from "./HomeScreen/HomeScreen";
import ProfileScreen from "./ProfileScreen/ProfileScreen";
import EditProfileScreen from "./EditProfileScreen/EditProfileScreen";
//import HomeScreen from "./HomeScreen/HomeScreen";
import who from "../../../reducers/who";
import {createStore} from "redux";
import {Provider} from "react-redux";
import tweets from "../../../reducers/tweets";
import EditProfileItem from "./EditProfile/EditProfileItem";
//import WhoToFollowListItem from "./WhoToFollowList/WhoToFollowListItem";

// const store = createStore(who);



const Build = () => {
    return(
        // <Provider store={store}>
        <div>

            <h1>Build</h1>

            {/*<Link to = "/a7/hello">*/}
            {/*    Hello*/}
            {/*</Link> |*/}
            {/*<Link to = "/a7/practice">*/}
            {/*    Practice*/}
            {/*</Link>*/}
            {/*<ExploreScreen/>*/}

            <Route path={["/", "/a7/twitter/home"]}
                   exact={true} component={HomeScreen}/>
            <Route path="/a7/twitter/explore"
                   exact={true} component={ExploreScreen}/>
            <Route path="/a7/twitter/profile"
                   exact={true} component={ProfileScreen}/>
            <Route path="/a7/twitter/editProfile"
                   exact={true} component={EditProfileScreen}/>



            {/*    <PostSummaryList/>*/}
        {/*<PostSummaryItem/>*/}
        {/*    <NavigationSidebar active="home"/>*/}
        {/*    <WhoToFollowListItem/>*/}
        </div>
        // </Provider>

    );
};

export default Build;