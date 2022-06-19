import { createContext } from "react";
import './App.css';
import { Main } from './containers/main';
import {Navigation} from './containers/navigation';
import AppContextInterface from "./interfaces/AppContextInterface";

export  const AppCtx = createContext<AppContextInterface | null>(null);
export  const App = () => {
  const sampleAppContext: AppContextInterface = {
    name: "Using React Context in a Typescript App",
    author: "thehappybug",
    url: "http://www.example.com",
  };

 return(
  <AppCtx.Provider value={sampleAppContext}>
    <div className="App">
      
      <Navigation/>
      <Main/>
      
    </div>
    </AppCtx.Provider>)

}

