import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/a6/HelloWorld";
import Practice from "./components/a6/Practice/index";
import Build from "./components/a6/Build/index";
import {BrowserRouter, Route} from "react-router-dom";
import ExploreScreen from "./components/a6/Build/ExploreScreen/ExploreScreen";
import HomeScreen from "./components/a6/Build/HomeScreen/HomeScreen";


function App() {
  return (
       <BrowserRouter>
        <div className="container">

          <Route path="/a6/hello" exact={true}>
            <HelloWorld/>
          </Route>
          <Route path={["/", "/a6", "/a6/practice"]} exact={true}>
            <Practice/>
          </Route>
          <Route path="/a6/build" exact={true}>
            <Build/>
          </Route>
            <Route path="/a6/twitter/home" exact={true} component={HomeScreen}/>
            <Route path="/a6/twitter/explore" exact={true}
                   component={ExploreScreen}/>

        </div>
       </BrowserRouter>

  );
}

export default App;
