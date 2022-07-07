import React, { useContext, useEffect, useState } from 'react';
import  '../css/paginate.css'
import  '../css/main.css'
//import generatedGitInfo from '../generatedGitInfo.json';
import { CommitCard }from './commitCard';
import ReactPaginate from "react-paginate";  
import ReactDOM from "react-dom";
import { useParams } from 'react-router';
import { fetchCommitsData, PaginationService } from '../services/pagination';
import { Commits } from './commits';
import { Pagination } from '../pagination';
import { useNavigate } from "react-router-dom";

export type mainProps={
    orgName?:string;
    repoName?:string;
    perPage?: number;
}

export const Main=(props:mainProps)=> {
  const [repositories, setRepositories] = useState([]);
  const [pageOffset, setPageOffset] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  // const [apiError, setApiError] = useState('');
  const { org, repo } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
  (async ()=> {
    const fetchCommitsData: fetchCommitsData={
      perPage: props.perPage?.toString()|| '10',
      pageOffset: (pageOffset+1).toString(),
      orgName: org || '',
      repoName: repo || ''
    }
      const response = await PaginationService.fetchCommits(fetchCommitsData);
      const responseJson = await response.json();
      if (!response.ok) {
        handleResponseError(responseJson.message);
        return;
      }
      const newPageCount = PaginationService.getGitHubPageCount(response);
      setRepositories(responseJson);
      if(newPageCount != -1){
        setPageCount(newPageCount);
      }
      
  })();
}, [pageOffset]);

  const handleResponseError=(message:string)=>{
    return navigate("/does/not/exist");
    // setApiError(message);
    // setRepositories([]);
    // setPageCount(0);
  }
  const handlePageChange = (event:{selected:number}) => {
    setPageOffset(event.selected);
  };
  // const getApiError=()=>{
  //   return apiError && (
  //     <div className="alert alert-danger" role="alert">
  //       {apiError}
  //     </div>
  //   )
  // }

  const className = repositories.length? "mainDiv": "hidden";
  return (
    <div className={className}>
      <h3 className="repo-title">{props.orgName} GitHub repositories</h3>
      <h2 className="repo-title">{org} {repo}</h2>
      <div className="paginationWrapper">
        <Pagination pageCount={pageCount} handlePageChange={handlePageChange} pageOffset={pageOffset}/>
      </div>
      {/* {getApiError()} */}
      <Commits className="listing" repositories={repositories} />
    </div>
  );
}
