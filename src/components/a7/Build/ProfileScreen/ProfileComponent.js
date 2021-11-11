import React from "react";
// import PostList from "../PostList/PostList.js";
// import TweetList from "../TweetList/TweetList";
// import EditProfileList from "../Profile/ProfileList";
import EditProfileItem from "../EditProfile/EditProfileItem";
import EditProfileList from "../EditProfile/EditProfileList";
import ProfileList from "../Profile/ProfileList";

const ProfileComponent = () => {
    return(
        <>
            <EditProfileList/>
            <ProfileList/>
        </>
    );
}
export default ProfileComponent;
