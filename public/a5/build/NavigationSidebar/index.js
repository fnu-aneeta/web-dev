const NavigationSidebar = (active) => {
    return(`
        <div>
            <div class="list-group">
                <a class="list-group-item col-color" href="#">
                    <i class="fab fa-twitter icon-color"></i>
                </a>       
                <a class = "list-group-item text-color col-color ${active === 'home' ? 'active' : ''}"  
                 href = "../HomeScreen/home.html">
                    <i class="fa fa-home fa-fw icon-color" aria-hidden="true"></i>&nbsp;
                    <span class="d-none d-xl-inline-block">Home</span>
                </a>
                <a class="list-group-item text-color col-color ${active === 'explore' ? 'active' : ''}"  
                href="../ExploreScreen/explore.html">
                    <i class="fas fa-hashtag icon-color"></i>&nbsp;
                    <span class="d-none d-xl-inline-block">Explore</span>
                </a>
                <a class="list-group-item text-color col-color ${active === 'notifications' ? 'active' : ''}" 
                href="#">
                    <i class="fas fa-bell icon-color"></i>&nbsp;
                    <span class="d-none d-xl-inline-block">Notifications</span>
                </a>
                <a class="list-group-item text-color col-color ${active === 'messages' ? 'active' : ''}" 
                href="#">
                    <i class="fas fa-envelope icon-color"></i>&nbsp;
                    <span class="d-none d-xl-inline-block">Messages</span>
                </a>
                <a class="list-group-item text-color col-color ${active === 'bookmarks' ? 'active' : ''}" 
                href="#">
                    <i class="fas fa-bookmark icon-color"></i>&nbsp;
                    <span class="d-none d-xl-inline-block">Bookmarks</span>
                </a>
                <a class="list-group-item text-color col-color ${active === 'lists' ? 'active' : ''}"
                href="#">
                    <i class="fas fa-list icon-color"></i>&nbsp;
                    <span class="d-none d-xl-inline-block">Lists</span>
                </a>
                <a class="list-group-item text-color col-color ${active === 'profile' ? 'active' : ''}"
                href="#">
                    <i class="fas fa-user-alt icon-color"></i>&nbsp;
                    <span class="d-none d-xl-inline-block">Profile</span>
                </a>
                <a class="list-group-item text-color col-color ${active === 'more' ? 'active' : ''}"
                href="#">
                    <i class="fas fa-comment-dots icon-color"></i>&nbsp;
                    <span class="d-none d-xl-inline-block">More</span>
                </a>
            </div>
            <button class="btn btn-primary mt-2 rounded-pill mx-auto-new">Tweet</button>
        </div>
    `);
}
export default NavigationSidebar;
