import { PaginationService } from "./pagination";
import { responseMock, headerLinkMock } from "../mock/response";

describe("PaginationService", () => {
  test("should get commit info", async () => {
    const mockResponse: any = {
      json: jest.fn().mockResolvedValue(responseMock)
    };

    const result = await PaginationService.getCommitsInfo(mockResponse);
    expect(result).toBe([
      {
        commitAuthor: "firstName",
        commitDate: "2022-06-22T16:57:19Z",
        commitMessage: "message1",
        commitUrl:
          "https://api.github.com/repos/m3db/m3/commits/3ee1ffef93f933034705f2727a6853186b1c9885",
      },
      {
        commitAuthor: "secondName",
        commitDate: "2022-06-08T18:25:43Z",
        commitMessage: "message2",
        commitUrl:
          "https://api.github.com/repos/m3db/m3/commits/f9379ea3dc41c57b243cbc2da8f54bc38b5164b7",
      },
    ]);
  });
  test("should get count", () => {
    const mockHeader: any = {
        get: jest.fn().mockReturnValue(headerLinkMock)
      };
    const result = PaginationService.getGitHubPageCount(mockHeader);
    expect(result).toBe(420);
  })
});
