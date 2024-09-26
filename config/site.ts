export type SiteConfig = {
  name: string;
  title: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    github: string;
  };
  contacts: {
    email: string;
    phone: string;
  };
};
export const siteConfig: SiteConfig = {
  name: "next-shadcn-sanity-blog",
  title: " Andrew Blog",
  description: "About tech and life in Vancouver",
  url: "",
  ogImage: "/og.jpg",
  links: {
    github: "https://github.com/kaganmert/next-shadcn-sanity-blog",
  },
  contacts: {
    email: "geek.yuto@gmail.com",
    phone: "236-785-9611",
  },
};
