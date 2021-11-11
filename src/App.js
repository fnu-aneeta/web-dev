import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/a7/HelloWorld";
import Practice from "./components/a7/Practice/index";
import Build from "./components/a7/Build";
import {BrowserRouter, Route} from "react-router-dom";
import ExploreScreen from "./components/a7/Build/ExploreScreen/ExploreScreen";
import HomeScreen from "./components/a7/Build/HomeScreen/HomeScreen";
import ProfileScreen from "./components/a7/Build/ProfileScreen/ProfileScreen";
// import WhoToFollowList from "./components/a7/Build/WhoToFollowList/WhoToFollowList";
import {combineReducers,createStore} from "redux";
import {Provider} from "react-redux";
import who from "./reducers/who";
import tweets from "./reducers/tweets";
import profile from "./reducers/profile";
//
// const store = createStore(who);
const reducer = combineReducers({tweets: tweets, who, profile})
const store = createStore(reducer);

function App() {
  return (
       <BrowserRouter>
     <Provider store={store}>

         <div className="container">

          <Route path="/a7/hello" exact={true}>
            <HelloWorld/>
          </Route>
          <Route path={["/", "/a7", "/a7/practice"]} exact={true}>
            <Practice/>
          </Route>
          <Route path="/a7/build">
            <Build/>
          </Route>
            <Route path="/a7/twitter/home" exact={true} component={HomeScreen}/>
            <Route path="/a7/twitter/explore" exact={true}
                   component={ExploreScreen}/>
             <Route path="/a7/twitter/profile" exact={true}
                    component={ProfileScreen}/>

        </div>
           </Provider>
       </BrowserRouter>

  );
}

export default App;
