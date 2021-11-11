import NavigationSidebar from "../NavigationSidebar/index.js";
import HomeComponent from "./HomeComponent.js";
import ExploreComponent from "../HomeScreen/ExploreComponent.js";
import PostSummaryList from "../PostSummaryList/PostSummaryList";
import WhatsHappening from "../WhatsHappening";

// (function ($) {
//     $('#wd-home').append(`
const HomeScreen = () => {
    return (
      <div className = "container">


          {/*<h1>This is Home</h1>*/}
        <div className="row mt-2">
           <div className="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
               <NavigationSidebar active="home"/>
            </div>
            <div className="col-6 col-sm-10 col-md-10 col-lg-7 col-xl-6 col-xxl-6">
                <WhatsHappening/>
                <HomeComponent/>


             </div>
            <div className="col-4 d-none d-lg-block col-lg-4 col-xl-4 col-xxl-4">
                {/*<ExploreComponent active ="for you"/>*/}
                <PostSummaryList title="What's happening"/>
            </div>

        </div>
        </div>
    );
};

export default HomeScreen;