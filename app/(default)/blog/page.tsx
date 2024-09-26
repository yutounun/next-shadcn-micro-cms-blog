import { PostList } from "./_components/post-list";
// import { getPosts } from "@/sanity/lib/sanity";
import HeroSection from "@/components/hero-section";
import fetchBlog from "@/microcms/api/blog";

export default async function Home() {
  // const allPosts = await getPosts();
  const blog = await fetchBlog();
  const allPosts = blog.contents;

  return (
    <main className="min-h-screen antialiased">
      <HeroSection
        title="Fuel Your Passion for Learning"
        description="From tech to culture, discover the trends shaping tomorrow."
      />
      <PostList allPosts={allPosts} />
    </main>
  );
}
