import post from "./post.js";
import PostSummaryListItem from "./PostSummaryListItem.js";

const PostSummaryList = () => {
    return (`
    ${
        post.map(post => {
            return(PostSummaryListItem(post));
        }).join('')
    }
    `);

}
export default PostSummaryList;