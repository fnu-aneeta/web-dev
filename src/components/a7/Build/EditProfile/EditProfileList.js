import EditProfileItem from "../EditProfile/EditProfileItem";
import {useSelector} from "react-redux";

const selectAllProfile = (state) => state.profile.profile;

const ProfileList = () => {
    const profile = useSelector(selectAllProfile);
// console.log(profile);
    return(
        <ul className="list-group">
            {
                <EditProfileItem profile={profile}/>
            }
        </ul>
    );

}
export default ProfileList;