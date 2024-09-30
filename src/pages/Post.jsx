import * as contentful from "contentful";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import s from "./Page.module.scss";
import {Markdown} fr

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
  return <>
  
  {item.fields.content}</>;
};
