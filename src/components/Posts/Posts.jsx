import * as contentful from "contentful";
import { useEffect, useState } from "react";
import s from "./Style.module.scss";

export const Posts = () => {
  const [post, setPost] = useState();

  const client = contentful.createClient({
    space: import.meta.env.VITE_PUBLIC_SPACE_ID,
    accessToken: import.meta.env.VITE_PUBLIC_ACCESS_TOKEN,
  });

  useEffect(() => {
    client.getEntries({ content_type: "post" }).then((res) => setPost(res));
  }, []);
  console.log(post);

  return (
    <section className={s.Posts}>
      {post?.items?.map((item) => (
        <figure className={s.Post}>
          <hgroup>
            <h3>{item.fields.title}</h3>
            <h4>
              {item.fields.postedAt} - af {item.fields.author.fields.name}
            </h4>
          </hgroup>
          <div
            className={s.img_container}
            style={{
              backgroundImage: `url(${item.fields.image.fields.file.url})`,
            }}
          ></div>
        </figure>
      ))}
    </section>
  );
};
