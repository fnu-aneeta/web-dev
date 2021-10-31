import React from "react";
import '../ExploreScreen/explore.css';

const PostSummaryListItem = (
    {
        post = {
            topic: 'Web Development',
            userName: '',
            time: ' last month',
            title: 'NodeJS',
            image: 'https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png',
            tweets: '123k Tweets',
        }
    }
) => {

    return(
              <li className="list-group-item">
                            <div className="row">
                                <div className="col-10 wd-new-line">

                                    <div className={`fw-normal text-color ${post.topic ? '\n' : ''}`}>{post.topic}</div>

                                   <span className="fw-bold text-detail-color">{post.userName}</span>

                                    <span className = "fa-stack" style={{"fontSize": "0.9em"}}>
                                        <i className = "fas fa-check-circle fa-stack-1x fa-inverse">&nbsp;</i>
                                    </span>
                                    <h7 className = "text-color">{post.time}</h7>
                                        <br/>
                                    <h7 className="text-detail-color">{post.title}</h7>
                                  <br/>
                                    <h7 className="fw-normal text-color">{post.tweets}</h7>
                                </div>
                                <div className="col-2 mt-3">
                                    <img className="rounded img-fluid" src={post.image}
                                         width="75px"
                                         height="75px"/>
                                </div>

                        
                        </div>
              </li>
    );
}
export default PostSummaryListItem;