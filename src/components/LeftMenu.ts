type LeftMenu = {
  sections: [
    {
      title: string;
      links: Link[]
    },
  ];
};

type Link = {
    title: string;
    link: string;
  }

const leftMenu: LeftMenu = {
  sections: [
    {
      title: "Examples",
      links: [
        {
          title: "Error Handling",
          link: "/examples/errorHandling",
        },
        {
          title: "Loading Banners",
          link: "/examples/loadingBanners",
        },
      ],
      
    },
    {
        title: "Other Stuff",
        links: [
          {
            title: "About Us",
            link: "/about",
          },
          {
            title: "HTMX",
            link: "https://htmx.org/",
          },
        ],
        
      },
  ],
};

export default leftMenu;
