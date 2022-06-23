import React, { useContext, useEffect, useState } from 'react';
import  '../css/paginate.css'
import generatedGitInfo from '../generatedGitInfo.json';
import { CommitCard }from './commitCard';

import ReactPaginate from "react-paginate";

import ReactDOM from "react-dom";


// Util for GitHub API.

function getGitHubPageCount(response:Response):number {
  const REGEX_GITHUB_HEADER_LINK = /<\S*\&page=(\d)>; rel="last"/gm;
  // Extract pageCount from Link header.
  const l =response.headers.get("Link");
  if(l){
      const link = REGEX_GITHUB_HEADER_LINK.exec(l);
      if(link){
        return (Number(link[1]));
      }
  }
  return -1;
}

// Actual React-Paginate example.
// https://github.com/AdeleD/react-paginate

function Repositories({ repositories, className}: {
    repositories: Array<any>;
    className: string;
}) {
  if (repositories.length === 0) {
    return (
      <div className="alert alert-warning" role="alert">
        No results.
      </div>
    );
  }
  // TODO Format with https://getbootstrap.com/docs/5.1/components/card/
  //   https://getbootstrap.com/docs/5.1/components/list-group/
  return (
    <div className={className}>
      {repositories.map((repository, index) => (
        <div className="repository-entry" key={index}>
          <h4>{repository.name} {index}</h4>
        </div>
      ))}
    </div>
  );
}

export type mainProps={
    orgName:string;
    perPage: number;
}

export const Main=(props:mainProps)=> {
  const [repositories, setRepositories] = useState([]);
  const [pageOffset, setPageOffset] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [apiError, setApiError] = useState(null);

  
    useEffect(() => {
    // Using an IIFE
    (async ()=> {
        const urlParams =new URLSearchParams({
            "per_page": props.perPage.toString(),
            "page": (pageOffset+1).toString()


          });
        const response = await fetch(
          `https://api.github.com/users/${props.orgName}/repos?${urlParams}`
        );
        const responseJson = await response.json();
        if (!response.ok) {
          setApiError(responseJson.message);
          setRepositories([]);
          setPageCount(0);
          return;
        }
        const newPageCount = getGitHubPageCount(response);
        console.log(responseJson, newPageCount);
        setRepositories(responseJson);
        if(newPageCount != -1){
            setPageCount(newPageCount);
        }
        
    })();
  }, [pageOffset, props.perPage]);

  const handlePageChange = (event:any) => {
    console.log(event);
    // TODO Only change displayed selected page
    // when its content is loaded in useEffect.
    setPageOffset(event.selected);
  };

  return (
    <div style={{ marginTop: "1rem" }}>
      <h3 className="repo-title">{props.orgName} GitHub repositories</h3>
      <ReactPaginate
        previousLabel="Previous"
        nextLabel="Next"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName="pagination"
        activeClassName="active"
        forcePage={pageOffset}
      />
      {apiError && (
        <div className="alert alert-danger" role="alert">
          {apiError}
        </div>
      )}
      <Repositories className="listing" repositories={repositories} />
      <ReactPaginate
        previousLabel="Previous"
        nextLabel="Next"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName="pagination"
        activeClassName="active"
        forcePage={pageOffset}
      />
    </div>
  );
}



// export const Main=()=>{
//    const [length,setLength] = useState(0);
//     const [abs,setAbs] = useState<boolean>(true);
    
// const updateAPI = useEffect(()=>{
//    // fetch callAPI(abs);
// }, [abs]);

//     const f = () => {
//      setLength(length + 1);
//     };
//     return (
//         <>
//         <button onClick = {f}> {length}</button>
//     <div className="git-info">{
       
//         generatedGitInfo.map((info,index) => {return <div key={index}>
//             <CommitCard gitBranch={info.gitBranch} gitCommitHash={info.gitCommitHash}/></div>})}
 
//   </div>
//   </>)
//  }