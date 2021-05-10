export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60998a28d748b72284c16f69",
                  title: "Sanity Studio",
                  name: "gatsby-blog-studio-7euqyx9a",
                  apiId: "7dd2f851-c0fb-4ad0-bf1c-c1a87fc2997f",
                },
                {
                  buildHookId: "60998a29995b881db581a72b",
                  title: "Blog Website",
                  name: "gatsby-blog-web-icet2wcj",
                  apiId: "450061e5-09fa-49db-96d3-67c1b64b77cd",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/abraham-yusuf/gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://gatsby-blog-web-icet2wcj.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
