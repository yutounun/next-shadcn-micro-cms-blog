"use client";

import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { formatDate } from "@/lib/date-format";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

async function PostDetail({ post }: any) {
  return (
    <article className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8">
          {/* Back button */}
          <Link
            href="/blog"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "mt-8 inline-flex"
            )}
          >
            &larr; See all posts
          </Link>

          {/* Title */}
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            {post.title}
          </h1>

          {/* Category */}
          <Link
            href={`/blog/category/${post.category.id}`}
            className="mt-3 flex items-center"
          >
            <Badge variant="secondary" className="">
              {post.category.name}
            </Badge>
          </Link>

          {/* Main Img */}
          <div className="w-full h-56 sm:h-72 md:h-96 lg:h-[500px] mt-8 relative">
            <Image
              src={post.eyecatch.url}
              alt={post.title}
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </div>

          {/* Date */}
          <div className="mt-6 flex items-center space-x-4">
            {/* <Image
              src={post.authorImg}
              alt={post.author}
              width={48}
              height={48}
              className="rounded-full"
            /> */}
            <div>
              {/* <p className="text-lg font-medium">{post.author}</p> */}
              <time
                dateTime={post.publishedAt}
                className="mt-2 block text-xs text-muted-foreground"
              >
                {formatDate(post.publishedAt)}
              </time>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="prose mx-auto">
          <div
            className="prose mx-auto content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        <Separator className="my-8" />

        <div className="flex justify-center">
          <Link
            href="/blog"
            className={cn(buttonVariants({ variant: "ghost" }))}
          >
            See all posts
          </Link>
        </div>
      </div>
    </article>
  );
}

export default PostDetail;
