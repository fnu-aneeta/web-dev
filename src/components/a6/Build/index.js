import React from "react";
// import NavigationSidebar from "./NavigationSidebar";
// import WhoToFollowListItem from "./WhoToFollowList/WhoToFollowListItem";
// import PostSummaryItem from "./PostSummaryList/PostSummaryListItem";
// import PostSummaryList from "./PostSummaryList/PostSummaryList";
import {Link} from "react-router-dom";
import ExploreScreen from "./ExploreScreen/ExploreScreen";
import HomeScreen from "./HomeScreen/HomeScreen";
//import HomeScreen from "./HomeScreen/HomeScreen";

const Build = () => {
    return(
        <>
            <h1>Build</h1>
            <Link to = "/a6/hello">
                Hello
            </Link> |
            <Link to = "/a6/practice">
                Practice
            </Link> |
            <Link to="/a6/twitter/home">
                Challenge
            </Link>
            <ExploreScreen/>
            <HomeScreen/>

        {/*    <PostSummaryList/>*/}
        {/*<PostSummaryItem/>*/}
        {/*    <NavigationSidebar active="home"/>*/}
        {/*    <WhoToFollowListItem/>*/}
        </>
    )
};

export default Build;