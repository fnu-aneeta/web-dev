import React from "react";
import './profile.css';
import {Link} from "react-router-dom";
import EditProfileItem from "../EditProfile/EditProfileItem";
import {useSelector} from "react-redux";

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
        <div>
            <div>
            <div className="row mt-2">
                <div className="col-2">
                    <i className="fa fa-arrow-left"/>
                </div>
                <div className="col-8">
                    <h4 className="fw-bold">{profile.username}</h4>
                    <span>5196 Tweets</span>
                </div>
            </div>
            <div className="row mt-2">
                <img src={profile.bannerPicture} alt="bannerPicture"
                     width="100%"
                     height="200"/>
            </div>

            <div className="row mt-2">
                <div className="col-9">
                   <img src={profile.profilePicture}
                     alt="bannerPicture"
                     width="100px"
                     height="100px"
                        className="rounded-circle"
                        style={{display: "inline-block",
                            position: "relative",

                            bottom: "40px",
                            left: "10px"}}/>
                </div>
                <div className="col-3">
                        <Link to="/a7/twitter/editProfile">
                            <button className="btn btn-dark text-white bg-black rounded-pill mt-1 float-end">Edit Profile</button>
                        </Link>
                </div>
            </div>


            <div className="row">
                <h4 className="fw-bold">{profile.username}</h4>
                    <span>{profile.handle}</span>
            </div>
            <div className="row mt-2">
                <div className="wd-text-detail-color">{profile.bio}</div>
            </div>
            <div className="row">
                <div>{profile.website}</div>
            </div>
                <br/>
            <div>
                <i className="fas fa-map-marker-alt wd-icon-distant">{' '}{profile.location}</i>
                <i className="fas fa-stopwatch wd-icon-distant">{' '}Born{' '}{profile.dateOfBirth}{' '}</i>
                <i className="fas fa-calendar wd-icon-distant">{' '}Joined{' '}{profile.dateJoined}</i>
            </div>

            <div>
<br/>
                 <span className="wd-text-detail-color">{profile.followingCount} </span> Following {' '}
                 <span className="wd-text-detail-color">{' '}{profile.followersCount} </span> Followers
            </div>


        </div>
        </div>

    );

}
export default ProfileItem;