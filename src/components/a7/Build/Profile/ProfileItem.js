import React from "react";
import './profile.css';
import {Link} from "react-router-dom";
// import EditProfileItem from "../EditProfile/EditProfileItem";
// import {useSelector} from "react-redux";

const ProfileItem = (

    {
        profile =
            {
                username: 'Aneeta',	handle: '@aneeta',
                profilePicture: 'https://e7.pngegg.com/pngimages/545/575/png-clipart-bender-robot-cartoon-robotics-cartoon-artwork.png',
                bannerPicture: 'https://miro.medium.com/max/750/1*3T7J7csXY8u36acofw5N8g.jpeg',
                bio: 'Software Engineer',
                website: 'youtube.com/webdevtv',
                location: 'Boston, MA',	dateOfBirth: '1968-09-09',	dateJoined: '2009/4',
                followingCount: '312',	followersCount: '180'

            }
    }
) => {
    // const profile = useSelector(state => state.profile.profile)
    return(
        <div className="mb-2">
                <div className="row">
                    <div className="col-2">
                    <i className="fa fa-arrow-left"/>
                    </div>
                    <div className="col-8">
                        <h4 className="fw-bold">{profile.username}</h4>
                        <span>5196 Tweets</span>
                    </div>
                </div>
                <div className="border border-dark mt-0">
                <img src={profile.bannerPicture} alt="bannerPicture"
                     width="100%"
                     height="200"/>
                    {/*<span><i className="fas fa-times wd-cross-icon-banner"></i>*/}
                    {/*<i className="fas fa-camera wd-camera-icon-banner"></i></span>*/}
                </div>

            <div className="row">
                <div className="col-9">
                   <img src={profile.profilePicture}
                     alt="bannerPicture"
                     width="100px"
                     height="100px"
                        className="align-text-top rounded-circle"
                        style={{display: "inline-block",
                            position: "relative",
                            border: "2px darkgray solid",
                            bottom: "40px",
                            left: "10px"}}/>
                    <i className="fas fa-camera wd-camera-icon"></i>
                </div>
                <div className="col-3">
                        <Link to="/a7/twitter/editProfile">
                            <button className="btn btn-dark text-white bg-black rounded-pill mt-1 float-end">Edit Profile</button>
                        </Link>
                </div>
            </div>

<table>
            <div className="row">
                <h4 className="fw-bold">{profile.username}</h4>
                    <span>{profile.handle}</span>
            </div>
            <div className="row mt-1">
                <div className="wd-text-detail-color">{profile.bio}</div>
            </div>
            <div className="row">
                <div>{profile.website}</div>
            </div>

            <div className="row mt-1">
                <i className="col-4 fas fa-map-marker-alt">&nbsp;{profile.location}</i>
                <i className="col-5 fas fa-stopwatch">&nbsp;Born&nbsp;{profile.dateOfBirth}</i>
                <i className="col-3 fas fa-calendar">&nbsp;Joined&nbsp;{profile.dateJoined}</i>
            </div>

            <div className="row mt-1">
                 <span className="col-1 wd-text-detail-color">{profile.followingCount}</span>
                 <span className="col-5">Following</span>
                 <span className="col-1 wd-text-detail-color">{profile.followersCount}</span>
                 <span className="col-5">Followers</span>
            </div>
</table>

        </div>

    );

}
export default ProfileItem;