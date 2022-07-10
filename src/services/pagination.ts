import CommitCardInterface from "../interfaces/commit-card-interface";

export type fetchCommitsData = {
  perPage: string;
  pageOffset: string;
  orgName: string;
  repoName: string;
};
export const PaginationService = class PaginationClass {
  public static async getCommitsInfo(
    response: Response
  ): Promise<Array<CommitCardInterface>> {
    const responseJson = await response.json();
    const repositories = responseJson as Array<any>;
    const commits: Array<CommitCardInterface> = repositories.map(
      (repository, index) => {
        return {
          commitDate: repository.commit.author.date,
          commitAuthor: repository.commit.author.name,
          commitMessage: repository.commit.message,
          commitUrl: repository.url,
        };
      }
    );
    return commits;
  }
  public static getGitHubPageCount(response: Response): number {
    const REGEX_GITHUB_HEADER_LINK = /<\S*&page=([0-9]+)>; rel="last"/gm;
    const l = response.headers.get("Link");
    if (l) {
      const link = REGEX_GITHUB_HEADER_LINK.exec(l);
      if (link) {
        return Number(link[1]);
      }
    }
    return -1;
  }

  public static async fetchCommits(data: fetchCommitsData): Promise<Response> {
    const urlParams = new URLSearchParams({
      per_page: data.perPage,
      page: data.pageOffset,
    });

    const obj = {
      method: "GET",
      headers: {
        Authorization: "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",
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(
      `https://api.github.com/repos/${data.orgName}/${data.repoName}/commits?${urlParams}`,
      obj
    );
    return response;
  }
};
