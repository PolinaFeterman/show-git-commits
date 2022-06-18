import React from 'react';
import generatedGitInfo from '../generatedGitInfo.json';
 function Main(){
    return (<div className="git-info">
    <p>
      <strong>Git Branch:</strong>{' '}
      <code>{generatedGitInfo.gitBranch}</code>
    </p>
    <p>
      <strong>Git Commit Hash:</strong>{' '}
      <code>{generatedGitInfo.gitCommitHash}</code>
    </p>
  </div>)
 }

 export default Main;