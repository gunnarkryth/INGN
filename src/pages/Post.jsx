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

  useEffect(() => {
    client
      .getEntry({ content_type: "post", slug: slug })
      .then((res) => setPost(res));
  }, []);
  console.log(post);
  return (
    <>
      {post?.fields ? (
        <article>
          <div
            className={s.hero}
            style={{
              backgroundImage: `url(${post.fields.image.fields.file.url})`,
            }}
          ></div>
          <hgroup>
            <h2>{post?.fields?.title}</h2>
            <h4>{post?.fields?.postedAt} - af {post?.fields?.author?.fields?.name}</h4>
          </hgroup>
          <Markdown>{post?.fields?.content}</Markdown>
        </article>
      ) : null}
    </>
  );
};
