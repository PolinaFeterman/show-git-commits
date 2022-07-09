import { createContext } from "react";
import "./css/app.css";
import { Main } from "./components/main";
import { Settings } from "./components/settings";
import { DoesNotExist } from "./components/does-not-exist";
import AppContextInterface from "./interfaces/app-context-interface";
import {
  Routes,
  Route,
  Outlet,
  Navigate,
  BrowserRouter,
} from "react-router-dom";

export const AppCtx = createContext<AppContextInterface | null>(null);
export const App = () => {
  const appContext: AppContextInterface = {
    perPage: 10,
  };
  return (
    <AppCtx.Provider value={appContext}>
      <div className="app">
        <BrowserRouter>
          <Layout />
          <Routes>
            <Route path="/" element={<Settings />} />
            <Route path="settings" element={<Settings />} />
            <Route path="/:org/:repo" element={<Main />} />
            <Route path="/does/not/exist" element={<DoesNotExist />} />
            <Route
              path="*"
              element={<Navigate to="/does/not/exist" replace />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </AppCtx.Provider>
  );
};
const Layout = () => {
  return (
    <div className="header">
      <h3> Commit Feed </h3>
      <Outlet />
    </div>
  );
};
