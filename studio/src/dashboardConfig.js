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
                    "606068daf6618e0c92ed163a",
                  title: "Sanity Studio",
                  name: "jennys-sanity-gatsby-blog-studio",
                  apiId: "3f69caed-9a80-4ac9-be79-037714657e92",
                },
                {
                  buildHookId: "606068da5c9cdf16e067a263",
                  title: "Blog Website",
                  name: "jennys-sanity-gatsby-blog",
                  apiId: "99d4d6c6-cb7d-40bb-a622-571035306039",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/jnnrdn/jennys-sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://jennys-sanity-gatsby-blog.netlify.app",
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
