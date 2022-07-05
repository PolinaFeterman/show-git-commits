export const PaginationService=class PaginationClass{
public static getGitHubPageCount(response:Response): number {
    const REGEX_GITHUB_HEADER_LINK = /<\S*\&page=([0-9]+)>; rel="last"/gm;
    // Extract pageCount from Link header.
    const l = response.headers.get("Link");
    if(l){
        const link = REGEX_GITHUB_HEADER_LINK.exec(l);
        if(link){
          return (Number(link[1]));
        }
    }
    return -1;
  }
}