import * as contentful from "contentful";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import s from "./Style.module.scss";

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState("all");
  const [categories, setCategories] = useState([]);

  const client = contentful.createClient({
    space: import.meta.env.VITE_PUBLIC_SPACE_ID,
    accessToken: import.meta.env.VITE_PUBLIC_ACCESS_TOKEN,
  });

  useEffect(() => {
    client.getEntries({ content_type: "post" }).then((res) => {
      setPosts(res.items);

      const uniqueCategories = [
        ...new Set(res.items.map((item) => item.fields.category)),
      ];
      setCategories(uniqueCategories);
    });
  }, []);

  const handleCategoryClick = (clickedCategory) => {
    setCategory(clickedCategory);
  };

  const filteredPosts =
    category === "all"
      ? posts
      : posts.filter((post) => post.fields.category === category);

  // Split posts into chunks of 9
  const postsChunks = [];
  for (let i = 0; i < filteredPosts.length; i += 9) {
    postsChunks.push(filteredPosts.slice(i, i + 9));
  }

  return (
    <section className={s.Posts}>
      <nav className={s.Navbar}>
        <ul>
          <li
            onClick={() => handleCategoryClick("all")}
            className={category === "all" ? s.active : ""}
            style={{ cursor: "pointer" }}
          >
            All
          </li>
          {categories.map((cat) => (
            <li
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={category === cat ? s.active : ""}
              style={{ cursor: "pointer" }}
            >
              {cat}
            </li>
          ))}
        </ul>
      </nav>

      {/* Render posts in chunks of 9 */}
      {postsChunks.map((chunk, chunkIndex) => (
        <div key={chunkIndex} className={s.PostsGrid}>
          {chunk.map((item) => (
            <figure key={item.sys.id} className={s.Post}>
              <hgroup>
                <h3>{item.fields.title}</h3>
                <h4>
                  {item.fields.postedAt} - af {item.fields.author.fields.name}
                </h4>
                <NavLink className={s.Link} to={`/post/${item.fields.slug}`}>
                  Læs mere
                </NavLink>
              </hgroup>
              <div
                className={s.img_container}
                style={{
                  backgroundImage: `url(${item.fields.image.fields.file.url})`,
                }}
              ></div>
            </figure>
          ))}
        </div>
      ))}
    </section>
  );
};
