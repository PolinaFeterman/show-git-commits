import "../css/settings.css";
import AppContextInterface from "../interfaces/app-context-interface";
import { AppCtx } from "../app";
import React,{ FormEventHandler, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Settings = () => {
  const appContext = React.useContext(AppCtx) as AppContextInterface;

  const [org, setOrg] = React.useState("");
  const [repo, setRepo] = React.useState("");
  const [perPage, setPerPage] = React.useState(appContext.perPage.toString());

  const navigate = useNavigate();
  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    appContext.perPage = Number(perPage);
    event.preventDefault();
    return navigate(`/${org}/${repo}`);
  };

  return (
    <form onSubmit={submitForm} data-testid="form">
      <div className="input">
        <label id="organization" className="input label">Organization:</label>
        <input
          className="rounded"
          aria-labelledby="organization"
          name="organization"
          type="text"
          value={org}
          onChange={(e) => setOrg(e.target.value)}
        />
      </div>
      <div className="input">
        <label id="repo" className="label">Repo:</label>
        <input
          className="rounded"
          aria-labelledby="repo"
          name="repo"
          type="text"
          value={repo}
          onChange={(e) => setRepo(e.target.value)}
        />
      </div>
      <div className="input">
        <label id="perPage" className="label">Commits per page:</label>
        <input
          className="rounded"
          aria-labelledby="perPage"
          name="perPage"
          type="number"
          value={perPage}
          onChange={(e) => setPerPage(e.target.value)}
        />
      </div>
      <div className="button">
        <button type="submit" className="rounded" disabled={!repo || !org}>
          Submit
        </button>
      </div>
    </form>
  );
};
