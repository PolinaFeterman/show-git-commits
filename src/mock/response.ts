export const responseMock = [
  {
    sha: "3ee1ffef93f933034705f2727a6853186b1c9885",
    node_id:
      "C_kwDOA6UhjdoAKDNlZTFmZmVmOTNmOTMzMDM0NzA1ZjI3MjdhNjg1MzE4NmIxYzk4ODU",
    commit: {
      author: {
        name: "firstName",
        email: "firstName@gmail.com",
        date: "2022-06-22T16:57:19Z",
      },
      committer: {
        name: "GitHub",
        email: "noreply@github.com",
        date: "2022-06-22T16:57:19Z",
      },
      message:
        "message1",
      tree: {
        sha: "fbd4bd3399b65e3c332a25db219006bb93b582ea",
        url: "https://api.github.com/repos/m3db/m3/git/trees/fbd4bd3399b65e3c332a25db219006bb93b582ea",
      },
      url: "https://api.github.com/repos/m3db/m3/git/commits/3ee1ffef93f933034705f2727a6853186b1c9885",
      comment_count: 0,
      verification: {
        verified: true,
        reason: "valid",
        signature:
          "-----BEGIN PGP SIGNATURE-----\n\nwsBcBAABCAAQBQJis0nvCRBK7hj4Ov3rIwAAvCoIAF78P3chQy55dJXvk7tojAP3\n3uPulmgBJ4H/Vvr1pZL4cNWywg2lccHWChqImekBXcBFDgFObshVPy1uQvhbFj0X\nGCeitU/pA9fghp5SBlyd0yCgJYgdDTp3Q2rddd9cNp3ikpu4LC9gL2PqZEhK+9KB\ntHj8AFFQPeKhPvrEgXZdCKmfisny01KwbJrCcZr2uBswvffJ1v+33E1KYeOidUMr\nDz0s91iNzajbkLoUe0pv7bQ3BGfpNsI1hzLdQBm4PACfmuK1CWta9e18o9T2y5ix\nPgyRwBXqYTG/D85AnlNU2XSpRyT73fkDGWuW2J3C80Rdmv7RQd33edMS1C0ebv0=\n=baSZ\n-----END PGP SIGNATURE-----\n",
        payload:
          "tree fbd4bd3399b65e3c332a25db219006bb93b582ea\nparent f9379ea3dc41c57b243cbc2da8f54bc38b5164b7\nauthor gandhikrishna <gandhikrishna81@gmail.com> 1655917039 +0530\ncommitter GitHub <noreply@github.com> 1655917039 -0400\n\n[tchannel-go] Bump tchannel-go to v1.31.0 (#4115)\n\nWhat this PR does / why we need it:\r\n\r\nApache thrift versions >=0.10.0 contain breaking changes this is primarily due to the introduction of ctx parameter and the difference in generated goTypes. These breaking changes cause a lot of pain for project building, which has Apache thrift dependencies along with tchannel-go (thrift-gen plugin).\r\n\r\nWith tchannel-go v1.31.0 release we fixed this issue by vendoring pinned version of apache/thrift.\r\n\r\nThis PR aims to update the tchannel-go dependency in m3db to version 1.31.0. Subsequently updating the import path of apache thrift to vendored tchannel-go apache/thrift.\r\n\r\nm3db also uses a forked version of apache/thrift that contains Tbinary pooling to help memory usage from connections. That package has been migrated from github.com/m3dbx/thrift to utils in this PR.\r\nFixes #\r\n\r\nSpecial notes for your reviewer:\r\n\r\nDoes this PR introduce a user-facing and/or backwards incompatible change?:\r\n\r\nNONE\r\nDoes this PR require updating code package or user-facing documentation?:\r\n\r\nNONE",
      },
    },
    url: "https://api.github.com/repos/m3db/m3/commits/3ee1ffef93f933034705f2727a6853186b1c9885",
    html_url:
      "https://github.com/m3db/m3/commit/3ee1ffef93f933034705f2727a6853186b1c9885",
    comments_url:
      "https://api.github.com/repos/m3db/m3/commits/3ee1ffef93f933034705f2727a6853186b1c9885/comments",
    author: {
      login: "gandhikrishna",
      id: 10990524,
      node_id: "MDQ6VXNlcjEwOTkwNTI0",
      avatar_url: "https://avatars.githubusercontent.com/u/10990524?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/gandhikrishna",
      html_url: "https://github.com/gandhikrishna",
      followers_url: "https://api.github.com/users/gandhikrishna/followers",
      following_url:
        "https://api.github.com/users/gandhikrishna/following{/other_user}",
      gists_url: "https://api.github.com/users/gandhikrishna/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/gandhikrishna/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/gandhikrishna/subscriptions",
      organizations_url: "https://api.github.com/users/gandhikrishna/orgs",
      repos_url: "https://api.github.com/users/gandhikrishna/repos",
      events_url: "https://api.github.com/users/gandhikrishna/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/gandhikrishna/received_events",
      type: "User",
      site_admin: false,
    },
    committer: {
      login: "web-flow",
      id: 19864447,
      node_id: "MDQ6VXNlcjE5ODY0NDQ3",
      avatar_url: "https://avatars.githubusercontent.com/u/19864447?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/web-flow",
      html_url: "https://github.com/web-flow",
      followers_url: "https://api.github.com/users/web-flow/followers",
      following_url:
        "https://api.github.com/users/web-flow/following{/other_user}",
      gists_url: "https://api.github.com/users/web-flow/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/web-flow/subscriptions",
      organizations_url: "https://api.github.com/users/web-flow/orgs",
      repos_url: "https://api.github.com/users/web-flow/repos",
      events_url: "https://api.github.com/users/web-flow/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/web-flow/received_events",
      type: "User",
      site_admin: false,
    },
    parents: [
      {
        sha: "f9379ea3dc41c57b243cbc2da8f54bc38b5164b7",
        url: "https://api.github.com/repos/m3db/m3/commits/f9379ea3dc41c57b243cbc2da8f54bc38b5164b7",
        html_url:
          "https://github.com/m3db/m3/commit/f9379ea3dc41c57b243cbc2da8f54bc38b5164b7",
      },
    ],
  },
  {
    sha: "f9379ea3dc41c57b243cbc2da8f54bc38b5164b7",
    node_id:
      "C_kwDOA6UhjdoAKGY5Mzc5ZWEzZGM0MWM1N2IyNDNjYmMyZGE4ZjU0YmMzOGI1MTY0Yjc",
    commit: {
      author: {
        name: "secondName",
        email: "secondName@gmail.com",
        date: "2022-06-08T18:25:43Z",
      },
      committer: {
        name: "GitHub",
        email: "noreply@github.com",
        date: "2022-06-08T18:25:43Z",
      },
      message:
        "message2",
      tree: {
        sha: "74ad92441fbf9813deab8c838578f9d4e57d9b3d",
        url: "https://api.github.com/repos/m3db/m3/git/trees/74ad92441fbf9813deab8c838578f9d4e57d9b3d",
      },
      url: "https://api.github.com/repos/m3db/m3/git/commits/f9379ea3dc41c57b243cbc2da8f54bc38b5164b7",
      comment_count: 0,
      verification: {
        verified: true,
        reason: "valid",
        signature:
          "-----BEGIN PGP SIGNATURE-----\n\nwsBcBAABCAAQBQJioOmnCRBK7hj4Ov3rIwAAHLYIAKy0OTFKmZfFqLjW/qWmrJYQ\n5nFsTS7ad+IosNbgAxJ1URdc+HDB7xnQYjMasiksIMGk+Op1ms7dpg5ZQP14EU7T\ntvtD+ysYfnUjR4kJntqLEW3TKwq10UO3w9ZRYw3kh57x/ZxiJv+Q5LSZspJkbkrM\ntUHI8QL/2dADkAF/e3PGBVZbl7ohd/okQ8//H4QB+MiX8NCAp12LjeKlU2rlu4ij\n44w6wY5G8aSSBsIPVYlq97bJHpg5x1CzBahVO1HjULTsX2fCikKTNOezpfzAtLUB\nfAdoU575+QpWtkwh6jI4v3bnznZjonAoNc48T2RjKGKJ6KBAzGAibZd/n/Kn3g0=\n=w4p3\n-----END PGP SIGNATURE-----\n",
        payload:
          "tree 74ad92441fbf9813deab8c838578f9d4e57d9b3d\nparent ddcfc1f80fdddcdd1dc30b873919df461990f3b8\nauthor Rob Skillington <rob@chronosphere.io> 1654712743 -0400\ncommitter GitHub <noreply@github.com> 1654712743 -0700\n\n[query] Add Graphite find integration test that verifies complex trees return valid results (#3636)\n\n",
      },
    },
    url: "https://api.github.com/repos/m3db/m3/commits/f9379ea3dc41c57b243cbc2da8f54bc38b5164b7",
    html_url:
      "https://github.com/m3db/m3/commit/f9379ea3dc41c57b243cbc2da8f54bc38b5164b7",
    comments_url:
      "https://api.github.com/repos/m3db/m3/commits/f9379ea3dc41c57b243cbc2da8f54bc38b5164b7/comments",
    author: {
      login: "robskillington",
      id: 339615,
      node_id: "MDQ6VXNlcjMzOTYxNQ==",
      avatar_url: "https://avatars.githubusercontent.com/u/339615?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/robskillington",
      html_url: "https://github.com/robskillington",
      followers_url: "https://api.github.com/users/robskillington/followers",
      following_url:
        "https://api.github.com/users/robskillington/following{/other_user}",
      gists_url: "https://api.github.com/users/robskillington/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/robskillington/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/robskillington/subscriptions",
      organizations_url: "https://api.github.com/users/robskillington/orgs",
      repos_url: "https://api.github.com/users/robskillington/repos",
      events_url:
        "https://api.github.com/users/robskillington/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/robskillington/received_events",
      type: "User",
      site_admin: false,
    },
    committer: {
      login: "web-flow",
      id: 19864447,
      node_id: "MDQ6VXNlcjE5ODY0NDQ3",
      avatar_url: "https://avatars.githubusercontent.com/u/19864447?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/web-flow",
      html_url: "https://github.com/web-flow",
      followers_url: "https://api.github.com/users/web-flow/followers",
      following_url:
        "https://api.github.com/users/web-flow/following{/other_user}",
      gists_url: "https://api.github.com/users/web-flow/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/web-flow/subscriptions",
      organizations_url: "https://api.github.com/users/web-flow/orgs",
      repos_url: "https://api.github.com/users/web-flow/repos",
      events_url: "https://api.github.com/users/web-flow/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/web-flow/received_events",
      type: "User",
      site_admin: false,
    },
    parents: [
      {
        sha: "ddcfc1f80fdddcdd1dc30b873919df461990f3b8",
        url: "https://api.github.com/repos/m3db/m3/commits/ddcfc1f80fdddcdd1dc30b873919df461990f3b8",
        html_url:
          "https://github.com/m3db/m3/commit/ddcfc1f80fdddcdd1dc30b873919df461990f3b8",
      },
    ],
  },
];

export const headerLinkMock=`<https://api.github.com/repositories/61153677/commits?per_page=10&page=2>; rel="next", <https://api.github.com/repositories/61153677/commits?per_page=10&page=420>; rel="last"`;
 
