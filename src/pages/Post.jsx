import * as contentful from "contentful";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Markdown from "markdown-to-jsx";
import s from "./Page.module.scss";

export const Post = () => {
  const [post, setPost] = useState();

  const { slug } = useParams();
  console.log(slug);

  const client = contentful.createClient({
    space: import.meta.env.VITE_PUBLIC_SPACE_ID,
    accessToken: import.meta.env.VITE_PUBLIC_ACCESS_TOKEN,
  });

  // useEffect(() => {
  //   client
  //     .getEntry({ content_type: "post", slug: slug })
  //     .then((res) => setPost(res));
  // }, []);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await client.getEntries({
          content_type: "post",
          "fields.slug": slug,
        });

        if (res.items.length > 0) {
          const entry = res.items[0];
          setPost(entry);
        } else {
          console.log("404");
        }
      } catch (error) {
        console.log("Error: ", error);
      }
    };
    fetchPost();
  });

  console.log(post);

  return (
    <>
      {post?.fields ? (
        <article className={s.Page}>
          <div
            className={s.hero}
            style={{
              backgroundImage: `url(${post.fields.image.fields.file.url})`,
            }}
          ></div>
          <hgroup>
            <h2>{post?.fields?.title}</h2>
            <h4>
              {post?.fields?.postedAt} - af {post?.fields?.author?.fields?.name}
            </h4>
          </hgroup>
          <Markdown>{post?.fields?.content}</Markdown>
        </article>
      ) : null}
    </>
  );
};
