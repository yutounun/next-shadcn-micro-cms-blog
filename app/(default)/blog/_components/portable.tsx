"use client";

import { ptComponents } from "./pt-components";
import DOMParserReact from "dom-parser-react";
import { PortableText } from "@portabletext/react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { formatDate } from "@/lib/date-format";
import { buttonVariants } from "@/components/ui/button";

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

          {/* TODO: Insert main Img */}

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
                className="mt-2 block text-sm text-muted-foreground"
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
