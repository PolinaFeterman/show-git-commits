import React from 'react'
import CommitCardInterface from '../interfaces/CommitCardInterface'
export default class CommitCard extends React.Component<CommitCardInterface, {}> {
        constructor (props: CommitCardInterface){
          super(props);
        }
    render():JSX.Element{
        return (
            <div className="git-info">
            <p>
              <strong>Git Branch:</strong>{' '}
              <code>{this.props.gitBranch}</code>
            </p>
            <p>
              <strong>Git Commit Hash:</strong>{' '}
              <code>{this.props.gitCommitHash}</code>
            </p>
          </div>
        )
      }
}
