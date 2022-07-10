import React, { useEffect } from "react";
import "../css/main.css";
import { useParams } from "react-router";
import { fetchCommitsData, PaginationService } from "../services/pagination";
import { Commits } from "./commits";
import { Pagination } from "./pagination";
import { Link, useNavigate } from "react-router-dom";
import { AppCtx } from "../app";
import AppContextInterface from "../interfaces/app-context-interface";

export const Main = () => {
  const [repositories, setRepositories] = React.useState([
    { commitDate: "", commitAuthor: "", commitMessage: "", commitUrl: "" },
  ]);
  const [pageOffset, setPageOffset] = React.useState(0);
  const [pageCount, setPageCount] = React.useState(1);
  const [commitsInfoLength, setCommitsInfoLength] = React.useState(0);
  const { org, repo } = useParams();
  const navigate = useNavigate();
  const appContext = React.useContext(AppCtx) as AppContextInterface;

  useEffect(() => {
    (async () => {
      const fetchCommitsData: fetchCommitsData = {
        perPage: appContext.perPage.toString() || "10",
        pageOffset: (pageOffset + 1).toString(),
        orgName: org || "",
        repoName: repo || "",
      };
      const response = await PaginationService.fetchCommits(fetchCommitsData);
      if (!response.ok) {
        setRepositories([]);
        setPageCount(0);
        return navigate("/does/not/exist");
      }
      const newPageCount = PaginationService.getGitHubPageCount(
        response.headers
      );
      const commitsInfo = await PaginationService.getCommitsInfo(response);
      setRepositories(commitsInfo);
      setCommitsInfoLength(commitsInfo.length);
      if (newPageCount !== -1) {
        setPageCount(newPageCount);
      }
    })();
  }, [appContext.perPage, navigate, org, pageOffset, repo]);

  const handlePageChange = (event: { selected: number }) => {
    setPageOffset(event.selected);
  };

  const className = commitsInfoLength > 0 ? "mainDiv" : "hidden";
  return (
    <div className={className}>
      <div className="backWrapper">
        <Link to="/settings" className="settingsLink">
          <button type="button" className="settingsButton">
            Back to Settings
          </button>
        </Link>{" "}
      </div>
      <h2 className="repo-title">
        Commits from {org}, repository {repo}
      </h2>
      <div className="paginationWrapper">
        <Pagination
          pageCount={pageCount}
          handlePageChange={handlePageChange}
          pageOffset={pageOffset}
        />
      </div>
      <Commits className="listing" repositories={repositories} />
    </div>
  );
};
