import NavigationSidebar from "../NavigationSidebar/index.js";
import HomeComponent from "./HomeComponent.js";
import ExploreComponent from "../HomeScreen/ExploreComponent.js";

(function ($) {
    $('#wd-home').append(`
      <div class = "container">
        <div class="row mt-2">
           <div class="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
                ${NavigationSidebar()}
            </div>
            <div class="col-6 col-sm-10 col-md-10 col-lg-7 col-xl-6 col-xxl-6">
             ${HomeComponent()}
             </div>
            <div class="col-4 d-none d-lg-block col-lg-4 col-xl-4 col-xxl-4">
                 ${ExploreComponent()}
            </div>

        </div>
        </div>
    `);
})($);
