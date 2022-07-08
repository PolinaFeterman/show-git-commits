import { createContext } from "react";
import './App.css';
import { Main } from './components/main';
import { Navigation } from './components/settings';
import { DoesNotExist } from './components/does-not-exist';
import AppContextInterface from "./interfaces/app-context-interface";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
  Outlet, Link, 
  Navigate,
  BrowserRouter
} from "react-router-dom";

export  const AppCtx = createContext<AppContextInterface | null>(null);
export  const App = () => {
  const appContext: AppContextInterface = {
    perPage: 10
  };
  // const AppRouters = () => {
  //   const routes = useRoutes([
  //     { path: "/:org/:repo", element: <Main orgName="m3db" repoName="m3" perPage={2}/> },
  //     { path: "navigation", element: <Navigation /> },
  //     { path: "/", element: <Navigation /> },
  //     { path: "*", element: <NoMatch /> },
  //   ]);
  //   return routes;
  // };

 return(
  <AppCtx.Provider value={appContext}>
    <div className="App">
      <BrowserRouter>
        <Layout/>
        <Routes>
          <Route  path="/" element={<Navigation />}/>
          <Route  path="navigation" element={<Navigation />}/>
          <Route  path="/:org/:repo" element={<Main/>}/>
          <Route  path="/does/not/exist" element={<DoesNotExist />}/>
          <Route path="*" element={<Navigate to="/does/not/exist" replace />} />
      </Routes>
      </BrowserRouter>
      </div>
  </AppCtx.Provider>)

}
const Layout =() => {
  return (
    <div className="header">
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      {/* <nav>
        <div className='main'><Link to="/m3db/m3">Main</Link></div>
        <div><Link to="/navigation">Navigation</Link></div>
      </nav>
      <hr /> */}

     <h3> Commit Feed </h3>

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

// function NoMatch() {
//   return (
//     <div>
//       <h2>Nothing to see here!</h2>
//       <p>
//         <Link to="/">Go to the home page</Link>
//       </p>
//     </div>
//   );
// }

