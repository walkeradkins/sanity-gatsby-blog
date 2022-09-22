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
                    "632ce11a49f85d12eb3b8f51",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-hhrfvczf",
                  apiId: "42a805bd-54d0-4340-ac34-a459d8ddc493",
                },
                {
                  buildHookId: "632ce11bbe86830af4a3b154",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-7vz9kxnb",
                  apiId: "df1d0231-037a-415f-b5e6-feefca3d1302",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/walkeradkins/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-7vz9kxnb.netlify.app",
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
