import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/WhoToFollowList.js";
import ExploreComponent from "./ExploreComponent.js";

(function ($) {
    $('#wd-explore').append(`
      <div class = "container">
        <div class="row mt-2">
           <div class="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
                ${NavigationSidebar('explore')}
            </div>
            <div class="col-6 col-sm-10 col-md-10 col-lg-7 col-xl-6 col-xxl-6">
             ${ExploreComponent()}
             </div>
            <div class="col-4 d-none d-lg-block col-lg-4 col-xl-4 col-xxl-4">
                 ${WhoToFollowList()}
            </div>

        </div>
        </div>
    `);
})($);

//
// <div className="container">
//     <div className="row mt-2">
//         <div className="col-2                   col-sm-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
//             ${NavigationSidebar()}
//         </div>
//
//         <div className="col-4 d-none d-lg-block                  col-lg-4 col-xl-4 col-xxl-4">
//             ${WhoToFollowList()}
//         </div>
//
//     </div>
// </div>

