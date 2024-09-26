import { client } from "../client";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fetchWork = async (queries?: any, contentId?: string) => {
  return await client.get({
    endpoint: "resume",
    queries: {
      orders: "-startDate", // Sort by startDate in descending order
    },
    contentId,
  });
};

export default fetchWork;
