import "../css/commit-card.css";
import CommitCardInterface from "../interfaces/commit-card-interface";

export const CommitCard = (props: CommitCardInterface) => {
  return (
    <div className="commit-card">
      <p>
        <strong>Commit author: </strong> {props.commitAuthor}
      </p>
      <p>
        <strong>Commit date: </strong> {new Date(props.commitDate).toString()}
      </p>
      <p>
        <strong>Commit message: </strong> {props.commitMessage}
      </p>
      <p>
        <strong>Commit url: </strong>{" "}
        <a href={props.commitUrl}>{props.commitUrl}</a>
      </p>
    </div>
  );
};
