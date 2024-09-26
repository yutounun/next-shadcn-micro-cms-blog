export type ArticleType = {
  id: string;
  title: string;
  summary: string;
  slug: string;
  category: {
    name: string;
  };
  eyecatch: {
    url: string;
  };
};
