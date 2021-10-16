import PostSummaryList from "../PostSummaryList/PostSummaryList.js";
const ExploreComponent = (active) => {
    return(`
<div>
            <div class="row mb-2">
                <div class="col-10">
                    <i class="fas fa-search magnifying-glass"></i>
                    <input class="form-control rounded-pill position-search"
                           placeholder="Search Twitter"/>
                </div>
                <div class="col-2">
                    <i class="fas fa-cog fa-2x cog-color"></i>
                </div>
           </div>

            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link text-color ${active === 'for you' ? 'active' : ''}" href="#" data-toggle="tab">
                        <span class="d-lg-block d-md-4 d-xl-4 col-xxl-4">For you</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-color ${active === 'trending' ? 'active' : ''}" href="#">
                        <span class="d-lg-block d-md-4 d-xl-4 col-xxl-4">Trending</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-color ${active === 'more' ? 'active' : ''}" href="#">
                        <span class="d-lg-block d-md-4 d-xl-4 col-xxl-4">News</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-color ${active === 'sports' ? 'active' : ''}" href="#">
                        <span class="d-lg-block d-md-4 d-xl-4 col-xxl-4">Sports</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-color ${active === 'entertainment' ? 'active' : ''}" href="#">
                        <span class="d-sm-none d-md-block">Entertainment</span>
                    </a>
                </li>
            </ul>
       
    <div class="card mt-2">
                    <img src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg"
                         class="card-img-top">
                    <div class="lr">
                        <p>SpaceX's Starship</p>
                    </div>
                   
    </div>
    </div>
      ${PostSummaryList()}
  `);
}
export default ExploreComponent;
