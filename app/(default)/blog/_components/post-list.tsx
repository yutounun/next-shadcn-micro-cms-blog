import Link from "next/link";
import { Post } from "@/sanity/lib/sanity";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { PostFooter } from "./post-footer";
import { PostImage } from "./post-image";
// import { ArticleType } from "@/microcms/type";

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
  publishedAt: string;
};

export const PostList = ({ allPosts }: { allPosts: ArticleType[] }) => {
  return (
    <BentoGrid className="max-w-4xl mx-auto mb-10 md:mb-26">
      {allPosts.map((post: ArticleType, i) => (
        <Link href={`/blog/${post.id}`} key={post.id}>
          <BentoGridItem
            title={post.title}
            description={post.summary}
            header={<PostImage mainImageUrl={post.eyecatch.url} />}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            footer={
              <PostFooter
                category={post.category.name}
                publishedAt={post.publishedAt} // Ensure ArticleType has this property
              />
            }
          />
        </Link>
      ))}
    </BentoGrid>
  );
};
