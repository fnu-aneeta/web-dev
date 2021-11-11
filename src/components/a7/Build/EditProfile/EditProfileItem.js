import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import profile from "../../../../reducers/profile";
import {Link} from "react-router-dom";

const EditProfileItem = () => {
    const profile = useSelector(state => state.profile.profile)

    const [localProfile, setLocalProfile] = useState(profile);
    const updateProfile = (event) => {
        setLocalProfile({
                ...profile,
            username: event.target.value})
    }
    const dispatch = useDispatch();
    const save = () => {
        dispatch({
            type: 'update-profile',
            profile: localProfile
        })
    }

    const discard = () => {
        dispatch({
            type: 'discard-update',
            // profile: localProfile
        })
    }

    return(
        <div>
            {/*<h5>Edit Profile for: {profile.username} </h5>*/}
            {/*<h4>Profile: {editProfile}</h4>*/}
            {/*Name: <input*/}
            {/*onChange={handleNameChange}*/}
            {/*type="text"*/}
            {/*value={name}/>*/}
            {/*<button onClick={editClickHandler}>Edit</button>*/}
            {/*<h1>Profile</h1>*/}
            {/*<input onChange={updateProfile}*/}
            {/*       value={localProfile.username}/>*/}
            <div className="row mt-2">
                <div className="col-2">
                    <Link to="/a7/twitter/profile">
                    <i onClick={discard}
                       className="fas fa-times"/>
                     </Link>

            </div>

                <div className="col-8">
                    <h4>Edit profile</h4>
                </div>

                <div className="col-1">
                    <Link to="/a7/twitter/profile">
                        <button onClick={save}
                                className="rounded-pill margin-left">Save
                        </button>
                    </Link>
                </div>
            {/*// <button onClick={save}> save </button>*/}
            {/*// {JSON.stringify(profile)}*/}
  </div>
            <div className="row">
                <img src={localProfile.bannerPicture} alt="bannerPicture"
                     width="100%"
                     height="200"/>
            </div>
            <div>
                <img src={localProfile.profilePicture} alt="profilePicture" width="100px" height="100px"
                className="rounded-circle"
                     style={{display: "inline-block",
                         position: "relative",

                    bottom: "40px",
                    left: "10px"}}/>
            </div>
            <div>
                <form>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Name</label>
                        <input onChange={updateProfile}
                               type="text" className="form-control" id="name"
                               value={localProfile.username}
                               style={{width: "100%", color: "white",
                                   padding: "10px",
                                   paddingTop: "15px",
                                   background: "none",
                                   border: "1px solid"}}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Bio</label>
                        <input onChange={updateProfile}
                               type="text" className="form-control" id="bio"
                               value={localProfile.bio}
                               style={{width: "100%", color: "white",
                                   padding: "10px",
                                   paddingTop: "15px",
                                   background: "none",
                                   border: "1px solid",
                                   display: "block",
                                   }}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Location</label>
                        <input onChange={updateProfile}
                               type="text" className="form-control" id="location"
                               value={localProfile.location}
                               style={{width: "100%", color: "white",
                                   padding: "10px",
                                   paddingTop: "15px",
                                   background: "none",
                                   border: "1px solid"}}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Website</label>
                        <input onChange={updateProfile}
                               type="text" className="form-control" id="website"
                               value={localProfile.website}
                               style={{width: "100%", color: "white",
                                   padding: "10px",
                                   paddingTop: "15px",
                                   background: "none",
                                   border: "1px solid"}}/>
                    </div>

                    <div className="form-group mb-2">
                        <label htmlFor="formGroupExampleInput">Date of Birth</label>
                        <input onChange={updateProfile}
                               type="date" className="form-control" id="birth"
                               value={localProfile.dateOfBirth}
                               style={{width: "100%", color: "white",
                                   padding: "10px",
                                   paddingTop: "15px",
                                   background: "none",
                                   border: "1px solid"}}/>
                    </div>
                </form>
            </div>
</div>
    )
}

export default EditProfileItem;