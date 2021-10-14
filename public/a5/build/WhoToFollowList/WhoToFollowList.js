import who from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";
const WhoToFollowList = () => {
    return(`
     <ul class="list-group">
                <li class="list-group-item fw-bold follow-color col-color">Who To follow</li>

    ${
        who.map(who => {
            return(WhoToFollowListItem(who));
        }).join('')
    }

</ul>
    `);

}
export default WhoToFollowList;