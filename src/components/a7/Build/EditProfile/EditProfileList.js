import EditProfileItem from "../EditProfile/EditProfileItem";
import {useSelector} from "react-redux";

const selectAllProfile = (state) => state.profile.profile;

const ProfileList = () => {
    const profile = useSelector(selectAllProfile);

    return(
        <ul className="list-group">
            {
                profile.map(profile => {
                    return(
                        <EditProfileItem profile={profile}/>
                    );
                })
            }
        </ul>
    );

}
export default ProfileList;