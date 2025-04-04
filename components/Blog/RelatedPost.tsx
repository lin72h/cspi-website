import React from "react";
import Image from "next/image";
import { getPosts } from "@/sanity/sanity-utils";
import { imageBuilder } from "@/sanity/sanity-utils";
import Link from "next/link";

const RelatedPost = async () => {
  const posts = await getPosts();

  return (
    <>
      <div className="animate_top rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
        <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
          Related Posts
        </h4>

        <div>
          {posts.slice(0, 3).map((post, key) => (
            <div
              className="mb-7.5 grid grid-cols-1 gap-5 md:grid-cols-2"
              key={key}
            >
              <div className="max-w-45 relative h-18">
                {post.mainImage ? (
                  <Image
                    fill
                    src={imageBuilder(post.mainImage).url()}
                    alt="Blog"
                  />
                ) : (
                  "No image"
                )}
              </div>
              <h5 className="text-md font-medium text-black transition-all duration-300 hover:text-primary dark:text-white dark:hover:text-primary">
                <Link href={`/blog/${post.slug.current}`}>
                  {" "}
                  {post.title.slice(0, 40)}...
                </Link>
              </h5>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RelatedPost;
