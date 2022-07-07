import { FormEventHandler, useContext, useEffect, useState } from 'react';
 import {AppCtx} from '../App'
import AppContextInterface from '../interfaces/AppContextInterface';

import { useNavigate } from "react-router-dom";


 export  const Navigation = ()=>{
    //  const appContext = useContext(AppCtx) as AppContextInterface;
    //  return (<div>{appContext.name}</div>)
    const [org, setOrg] = useState('');
    const [repo, setRepo] = useState('');
    const navigate = useNavigate();
    // useEffect(() => {
       
    //        return navigate("/m3db/m3");
        
    //  },[org, repo]);
    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        // setOrg('m3db');
        // setRepo('m3');
        event.preventDefault();
        return navigate(`/${org}/${repo}`);
    };
    {
    return (
        <form onSubmit={submitForm}>
            <div>
                <label>
                    Organization:
                    <input
                        type="text" 
                        value={org}
                        onChange={(e) => setOrg(e.target.value)}
                        />
                </label>
            </div>
            <div>
                <label>
                    Repo:
                    <input
                        type="text" 
                        value={repo}
                        onChange={(e) => setRepo(e.target.value)}
                        />
                </label>
            </div>
           <button type="submit">Submit</button>
        </form>
        );
    }
}

