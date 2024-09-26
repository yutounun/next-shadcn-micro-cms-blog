import { client } from "../client";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fetchBlog = async (queries?: any, contentId?: string) => {
  return await client.get({ endpoint: "blogs", queries, contentId });
};

export default fetchBlog;
