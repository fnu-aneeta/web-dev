import React from "react";
import post from "./post.json";
import PostSummaryListItem from "./PostSummaryListItem";

const PostSummaryList = () => {
    return(
        <ul className="list-group">
    {
        post.map(post => {
            return(
                <PostSummaryListItem post = {post}/>
            );
        })
    }
        </ul>
    );

}
export default PostSummaryList;