import React from "react";
import ProfileItem from "./ProfileItem";
import {useSelector} from "react-redux";

const selectAllProfile = (state) => state.profile.profile;

const ProfileList = () => {
    const profile = useSelector(selectAllProfile);

    return(
        <ul className="list-group">
            {
                profile.map(profile => {
                    return(
                        <ProfileItem profile={profile}/>
                    );
                })
            }
        </ul>
    );

}
export default ProfileList;

