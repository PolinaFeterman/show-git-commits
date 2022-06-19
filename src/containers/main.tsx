import React, { useContext, useEffect, useState } from 'react';
import generatedGitInfo from '../generatedGitInfo.json';
import { CommitCard }from './commitCard';



export const Main=()=>{
   const [length,setLength] = useState(0);
    const [abs,setAbs] = useState<boolean>(true);
    
const updateAPI = useEffect(()=>{
   // fetch callAPI(abs);
}, [abs]);

    const f = () => {
     setLength(length + 1);
    };
    return (
        <>
        <button onClick = {f}> {length}</button>
    <div className="git-info">{
       
        generatedGitInfo.map((info,index) => {return <div key={index}>
            <CommitCard gitBranch={info.gitBranch} gitCommitHash={info.gitCommitHash}/></div>})}
 
  </div>
  </>)
 }