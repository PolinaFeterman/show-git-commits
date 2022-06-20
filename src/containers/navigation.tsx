import { useContext } from 'react';
 import {AppCtx} from '../App'
import AppContextInterface from '../interfaces/AppContextInterface';

 export  const Navigation = ()=>{
     const appContext = useContext(AppCtx) as AppContextInterface;
     return (<div>{appContext.name}</div>)
    
 }

