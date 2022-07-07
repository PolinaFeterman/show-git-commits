export type fetchCommitsData={
    perPage:string,
    pageOffset:string,
    orgName:string,
    repoName:string
}
export const PaginationService=class PaginationClass{
public static getGitHubPageCount(response:Response): number {
    const REGEX_GITHUB_HEADER_LINK = /<\S*\&page=([0-9]+)>; rel="last"/gm;
    const l = response.headers.get("Link");
    if(l){
        const link = REGEX_GITHUB_HEADER_LINK.exec(l);
        if(link){
          return (Number(link[1]));
        }
    }
    return -1;
  }

  public static async fetchCommits(data:fetchCommitsData):Promise<Response>{
    const urlParams = new URLSearchParams({
        "per_page": data.perPage,
        "page": data.pageOffset
      });

    const obj = {  
      method: 'GET',
      headers: {
        'Authorization': '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',
        'Content-Type': 'application/json',
      }
    }
    const response = await fetch(
      `https://api.github.com/repos/${data.orgName}/${data.repoName}/commits?${urlParams}`, obj
      //`https://api.github.com/users/${props.orgName}/repos?${urlParams}`
      );
      return response;
  }
}