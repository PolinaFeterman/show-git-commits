import CommitCardInterface from "../interfaces/commit-card-interface";
import { CommitCard } from "./commit-card";

export type commitsProps = {
  repositories: Array<CommitCardInterface>;
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
          <CommitCard
            commitAuthor={repository.commitAuthor}
            commitDate={repository.commitDate}
            commitMessage={repository.commitMessage}
            commitUrl={repository.commitUrl}
          />
        </div>
      ))}
    </div>
  );
};
