import React from "react";
import '../HomeScreen/home.css';

const PostItem = (
    {
    posts = {
        avatarIcon: 'https://pbs.twimg.com/profile_images/1442634650703237120/mXIcYtIs_400x400.jpg',
        userName: 'Elon Musk',
        handle: '@elonmusk',
        time: '23h',
        body: 'Amazing show about',
        color: '@Inspiration4x',
        mission: 'mission!',
        linkImage: 'https://i.ytimg.com/vi/_nwSmOEiDls/maxresdefault.jpg',
        linkTitle: 'Countdown: Inspiration4 Mission to Space | Netflix Official Site',
        linkBody: 'From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space...',
        linkText: 'netflix.com',
        replies: '4.2k',
        retweets: '3.5k',
        favs: '37.5k'
    }
}
) => {
    return(
        <div>

        <div className="row mt-1">
            <div className="col-1 d-md-inline-block d-lg-inline-block d-xl-inline-block">
                <img src={posts.avatarIcon} alt = "Avatar" width="32" className="rounded-circle float-start"/>&nbsp;
            </div>
            <div className="col-11 d-md-inline-block d-lg-inline-block d-xl-inline-block">
                <div className="wd-name fw-bold">{posts.userName}&nbsp;
                    <i className="fas fa-check-circle text-detail-color">&nbsp;</i>
                    <span className="wd-author-handle fw-normal">&nbsp;{posts.handle} &middot; &nbsp;{posts.time}
                        <i className="fa fa-ellipsis-h float-end"></i>
               </span>
                </div>
                <p className="wd-main-content">{posts.body}&nbsp;
                   <a className="wd-text-link-inspiration4x">{posts.color}</a>&nbsp;
                    {posts.mission}
                   </p>



        <div className = "card border-left border-right wd-card-rounded-border wd-color-card-body">
            <img src = {posts.linkImage}
                 className="card-img-top wd-card-image-border" style={{"border-style":"1px solid dimgray;"}}/>

            <div className = {`card-body ${posts.linkBody ? '' : 'd-none'}`}>
                <div className = "card-title">
                    <h6 className = "text-detail-color">{posts.linkTitle}</h6>
                    <h7 className = "fw-normal">{posts.linkBody}</h7>
                    <p>
                    <i className="fas fa-link" style={{"width": "33rem;"}}>&nbsp;

                        <a className="wd-text-link fw-normal" href="https://www.netflix.com/title/81441273">{posts.linkText}</a>
                    </i>
                    </p>

                </div>
            </div>

        </div>


        <div className="wd-icons">
            <div className="wd-icon-distant">
                <a className="wd-text-link" href = "/#">
                    <i className="far fa-comment"></i>
                </a>
                <span className="wd-numbers">
                    {posts.replies}
                </span>
            </div>
            <div className="wd-icon-distant">
                <a className="wd-text-link" href = "/#">
                    <i className="fas fa-retweet"></i>
                </a>
                <span className="wd-numbers">
                    {posts.retweets}
                </span>
            </div>
            <div className="wd-icon-distant">
                <a className="wd-text-link" href = "/#">
                    <i className="fa fa-heart wd-icon-heart" aria-hidden="true"></i>
                </a>
                <span className="wd-numbers">
                    {posts.favs}
                </span>
            </div>
            <div className="wd-icon-distant">
                <a className="wd-text-link d-sm-none d-md-inline-block d-lg-inline-block d-xl-inline-block" href = "/#">
                    <i className="fas fa-upload"></i>
                </a>
                <span className="wd-numbers"></span>
            </div>
        </div>
            </div>
        </div>
        <br/>
        <br/>
        <hr/>
        </div>

        );


}
export default PostItem;



