import React from 'react';
import generatedGitInfo from '../generatedGitInfo.json';
import CommitCard from './commitCard';
 function Main():JSX.Element{
    return (<div className="git-info">{
        generatedGitInfo.map(info => {return <CommitCard gitBranch={info.gitBranch} gitCommitHash={info.gitCommitHash}/>})};
    {/* <p>
      <strong>Git Branch:</strong>{' '}
      <code>{generatedGitInfo.gitBranch}</code>
    </p>
    <p>
      <strong>Git Commit Hash:</strong>{' '}
      <code>{generatedGitInfo.gitCommitHash}</code>
    </p> */}
  </div>)
 }

 export default Main;