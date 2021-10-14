import posts from "./posts.js";
import PostItem from "./PostItem.js";

const PostList = () => {
    return (`
    ${
        posts.map(posts => {
            return(PostItem(posts));
        }).join('')
    }
    `);

}
export default PostList;