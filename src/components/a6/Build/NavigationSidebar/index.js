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
    <>
        <div>
            <div className="list-group">
                <a className="list-group-item" href="#">
                    <i className="fab fa-twitter"></i>
                </a>       
                <a className = {isActive(active, 'home')}
                 href = "../HomeScreen/home.html">
                    <i className="fa fa-home"></i>&nbsp;
                    <span className="d-none d-xl-inline-block">Home</span>
                </a>
                <a className={isActive(active, 'explore')}
                href="../ExploreScreen/explore.html">
                    <i className="fas fa-hashtag"></i>&nbsp;
                    <span className="d-none d-xl-inline-block">Explore</span>
                </a>
                <a className={isActive(active, 'notifications')}
                 href="notifications.html">
                    <i className="fas fa-bell"></i>&nbsp;
                    <span className="d-none d-xl-inline-block">Notifications</span>
                </a>
                <a className={isActive(active, 'messages')}
                href="messages.html">
                    <i className="fas fa-envelope"></i>&nbsp;
                    <span className="d-none d-xl-inline-block">Messages</span>
                </a>
                <a className={isActive(active, 'bookmarks')}
                href="bookmarks.html">
                    <i className="fas fa-bookmark"></i>&nbsp;
                    <span className="d-none d-xl-inline-block">Bookmarks</span>
                </a>
                <a className={isActive(active, 'lists')}
                href="lists.html">
                    <i className="fas fa-list"></i>&nbsp;
                    <span className="d-none d-xl-inline-block">Lists</span>
                </a>
                <a className={isActive(active, 'profile')}
                href="profile.html">
                    <i className="fas fa-user-alt"></i>&nbsp;
                    <span className="d-none d-xl-inline-block">Profile</span>
                </a>
                <a className={isActive(active, 'more')}
                href="more.html">
                    <i className="fas fa-comment-dots"></i>&nbsp;
                    <span className="d-none d-xl-inline-block">More</span>
                </a>
            </div>
            <button className="btn btn-primary mt-2 rounded-pill mx-auto-new">Tweet</button>
        </div>
    </>
    );
}
export default NavigationSidebar;
