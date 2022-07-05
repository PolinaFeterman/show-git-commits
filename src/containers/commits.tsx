import { CommitCard } from "./commitCard";

export type commitsProps = {
    repositories: Array<any>;
    className: string;
};

export const Commits = (data: commitsProps) => {
  if (data.repositories.length === 0) {
    return (
      <div className="alert alert-warning" role="alert">
        No results.
      </div>
    );
  }

  return (
    <div className={data.className}>
      {data.repositories.map((repository, index) => (
        <div className="repository-entry" key={index}>
           <CommitCard gitBranch={repository.sha} gitCommitHash={index.toString()}/>
        </div>
      ))}
    </div>
  );
}