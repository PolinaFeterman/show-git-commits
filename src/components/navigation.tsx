import { FormEventHandler, useContext, useEffect, useState } from 'react';
 import {AppCtx} from '../App'
import AppContextInterface from '../interfaces/app-context-interface';
import  '../css/navigation.css'

import { useNavigate } from "react-router-dom";


 export  const Navigation = ()=>{
    const appContext = useContext(AppCtx) as AppContextInterface;
    //  return (<div>{appContext.name}</div>)
    const [org, setOrg] = useState('');
    const [repo, setRepo] = useState('');
    const [perPage, setPerPage] = useState(appContext.perPage.toString());
    const navigate = useNavigate();
    // useEffect(() => {
       
    //        return navigate("/m3db/m3");
        
    //  },[org, repo]);
    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        // setOrg('m3db');
        // setRepo('m3');
        appContext.perPage = Number(perPage);
        event.preventDefault();
        return navigate(`/${org}/${repo}`);
    };
    {
    return (
        <form onSubmit={submitForm}>
            <div className = "input">
                <label className="label">
                    Organization:</label>
                    <input className = "rounded"
                        type="text" 
                        value={org}
                        onChange={(e) => setOrg(e.target.value)}
                        />
                
            </div>
            <div className = "input">
                <label className="label">
                    Repo: </label>
                    <input className = "rounded"
                        type="text" 
                        value={repo}
                        onChange={(e) => setRepo(e.target.value)}
                        />
               
            </div>
            <div className = "input">
                <label className="label">
                    Commits per page:</label>
                    <input className = "rounded"
                        type="number" 
                        value={perPage}
                        onChange={(e) => setPerPage(e.target.value)}
                        />
                
            </div>
            <div className = "button">
           <button type="submit" className = "rounded">Submit</button></div>
        </form>
        );
    }
}

