import {Link} from "react-router-dom";
import React from "react";
import '../ExploreScreen/explore.css';
const NavigationSidebar = (
    {
        active = 'explore'
    }
) =>
{
    const isActive = (active, path) => `list-group-item ${active === path? 'active' : ''}`
    return(

        <div>
            <div className="list-group">
                <Link className="list-group-item" to="/a6/">

                    <i className="fab fa-twitter"></i>
                </Link>
                <Link className = {isActive(active, 'home')}
                 to = "/a6/twitter/home">
                    <i className="fa fa-home"></i>&nbsp;
                    <span className="d-none d-xl-inline-block">Home</span>
                </Link>
                <Link className={isActive(active, 'explore')}
                to="/a6/twitter/explore">
                    <i className="fas fa-hashtag"></i>&nbsp;
                    <span className="d-none d-xl-inline-block">Explore</span>
                </Link>
                <Link className={isActive(active, 'notifications')}
                 to="notifications.html">
                    <i className="fas fa-bell"></i>&nbsp;
                    <span className="d-none d-xl-inline-block">Notifications</span>
                </Link>
                <Link className={isActive(active, 'messages')}
                to="messages.html">
                    <i className="fas fa-envelope"></i>&nbsp;
                    <span className="d-none d-xl-inline-block">Messages</span>
                </Link>
                <Link className={isActive(active, 'bookmarks')}
                to="bookmarks.html">
                    <i className="fas fa-bookmark"></i>&nbsp;
                    <span className="d-none d-xl-inline-block">Bookmarks</span>
                </Link>
                <Link className={isActive(active, 'lists')}
                to="lists.html">
                    <i className="fas fa-list"></i>&nbsp;
                    <span className="d-none d-xl-inline-block">Lists</span>
                </Link>
                <Link className={isActive(active, 'profile')}
                to="profile.html">
                    <i className="fas fa-user-alt"></i>&nbsp;
                    <span className="d-none d-xl-inline-block">Profile</span>
                </Link>
                <Link className={isActive(active, 'more')}
                to="more.html">
                    <i className="fas fa-comment-dots"></i>&nbsp;
                    <span className="d-none d-xl-inline-block">More</span>
                </Link>
            </div>
            <div className = "d-grid mt-2">
                <a href = "tweet.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet
                </a>
            </div>
        </div>

    );
}
export default NavigationSidebar;
