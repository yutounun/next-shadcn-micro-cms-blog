import { PostList } from "../../_components/post-list";
import HeroSection from "@/components/hero-section";
import fetchBlog, { fetchCategories } from "@/microcms/api/blog";

export default async function Category({ params }: any) {
  const queries = { filters: `category[equals]${params.categoryId}` };
  const categorizedblog = await fetchBlog(queries);

  if (!categorizedblog) {
    return <div>Category not found</div>;
  }

  const category = await fetchCategories({
    filters: `id[equals]${params.categoryId}`,
  });

  if (category.contents.length === 0) {
    return (
      <main className="min-h-screen antialiased">
        <HeroSection
          title="Page Not Found"
          description="I'm sorry, but this category doesn't exist."
        />
      </main>
    );
  }

  return (
    <main className="min-h-screen antialiased">
      <HeroSection
        title={category.contents[0]?.name}
        description="Let's build something great together."
      />
      <PostList allPosts={categorizedblog.contents} />
    </main>
  );
}
