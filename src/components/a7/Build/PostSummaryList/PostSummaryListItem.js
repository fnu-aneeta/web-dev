import React from "react";
import '../ExploreScreen/explore.css';

const PostSummaryListItem = (
    {
        post = {
            // topic: 'Web Development',
            // userName: '',
            // time: ' last month',
            // title: 'NodeJS',
            // image: 'https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png',
            // tweets: '123k Tweets',

                topic: 'Web Development',
                userName: 'ReactJS',
                time: '2h',
                title: 'React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs',
                image: 'https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png'

        }
    }
) => {

    return(
              <li className="list-group-item">

                  {/*{JSON.stringify(post)}*/}
                            <div className="row">
                                {/*<div className="col-10 wd-new-line">*/}

                                {/*    <div className={`fw-normal text-color ${post.topic ? '\n' : ''}`}>{post.topic}</div>*/}
                                <div className="col-9 col-md-10">
                                    <div className="text-muted">{post.topic}</div>

                                   {/*<span className="fw-bold text-detail-color">{post.userName}</span>*/}

                                   {/* <span className = "fa-stack" style={{"fontSize": "0.8em"}}>*/}
                                   {/*     <i className = "fas fa-check-circle fa-stack-1x fa-inverse">&nbsp;</i>*/}
                                   {/* </span>*/}
                                   {/* <h7 className = "text-color">{post.time}</h7>*/}
                                   {/*     <br/>*/}
                                    <div>
                                      <span className="fw-bold">
                                          {post.userName}
                                          <span className="fa-stack" style={{"fontSize": "0.5em"}}>
                                            <i className="fas fa-circle fa-stack-2x"></i>
                                            <i className="fas fa-check fa-stack-1x fa-inverse"></i>
                                          </span>
                                      </span>
                                        <span className="text-muted">
                                            - {post.time}
                                        </span>
                                    </div>
                                {/*    <h7 className="text-detail-color">{post.title}</h7>*/}
                                {/*  <br/>*/}
                                {/*    <h7 className="fw-normal text-color">{post.tweets}</h7>*/}
                                {/*</div>*/}
                                {/*<div className="col-2 mt-3">*/}
                                {/*    <img className="rounded img-fluid" src={post.image}*/}
                                {/*         width="75px"*/}
                                {/*         height="75px"/>*/}
                                {/*</div>*/}
                                    <div className="fw-bold">{post.title}</div>
                                </div>
                                <div className="col-3 col-md-2">
                                    {/*<img src={post['logo-image']}*/}
                                         <img src={post.image}
                                         // alt="qwe"
                                         width="75"
                                         height="75"
                                         className="float-end"
                                         style={{"borderRadius" : "10px"}}/>
                                </div>

                        
                        </div>
              </li>
    );
}
export default PostSummaryListItem;