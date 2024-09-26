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

export type ITechStack = {
  language: string;
  imgUrl: string;
};

export type IResume = {
  title: string;
  description: string;
  imgUrl: {
    url: string;
  };
  startDate: string;
  endDate: string;
  isCurrent: boolean;
};
