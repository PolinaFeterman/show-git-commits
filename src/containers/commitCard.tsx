import React from 'react'
import '../css/commitCard.css'

export type commitCardProps = {
    gitBranch: string;
    gitCommitHash: string;
};

export const CommitCard = ( props: commitCardProps)=>{

    return (
        <div className="commit-card">
        <p>
          <strong>Git Branch:</strong>{' '}
          <code>{props.gitBranch}</code>
        </p>
        <p>
          <strong>Git Commit Hash:</strong>{' '}
          <code>{props.gitCommitHash}</code>
        </p>
      </div>
    )
};

