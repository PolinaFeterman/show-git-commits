import { createContext } from "react";
import './App.css';
import { Main } from './containers/main';
import {Navigation} from './containers/navigation';
import AppContextInterface from "./interfaces/AppContextInterface";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
  Outlet, Link
} from "react-router-dom";

export  const AppCtx = createContext<AppContextInterface | null>(null);
export  const App = () => {
  const sampleAppContext: AppContextInterface = {
    name: "Using React Context in a Typescript App",
    author: "thehappybug",
    url: "http://www.example.com",
  };
  const AppRouters = () => {
    let routes = useRoutes([
      { path: "/:org/:repo", element: <Main orgName="m3db" repoName="m3" perPage={2}/> },
      { path: "navigation", element: <Navigation /> },
      { path: "/", element: <Navigation /> },
      { path: "*", element: <NoMatch /> },
    ]);
    return routes;
  };

 return(
  <AppCtx.Provider value={sampleAppContext}>
    <div className="App">

    <Router>
      <Layout/>
      <AppRouters />
    </Router>
    </div>
    </AppCtx.Provider>)

}
const Layout =() => {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <div className='main'><Link to="/m3db/m3">Main</Link></div>
         <div><Link to="/navigation">Navigation</Link></div>
      </nav>
      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

