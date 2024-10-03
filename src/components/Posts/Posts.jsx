import * as contentful from "contentful";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import s from "./Style.module.scss";

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState("all"); // State for selected category
  const [categories, setCategories] = useState([]); // State to store unique categories

  const client = contentful.createClient({
    space: import.meta.env.VITE_PUBLIC_SPACE_ID,
    accessToken: import.meta.env.VITE_PUBLIC_ACCESS_TOKEN,
  });

  useEffect(() => {
    client.getEntries({ content_type: "post" }).then((res) => {
      setPosts(res.items);

      // Extract unique categories from posts
      const uniqueCategories = [
        ...new Set(res.items.map((item) => item.fields.category)),
      ];
      setCategories(uniqueCategories);
    });
  }, []);

  // Debugging to ensure category is updating correctly
  const handleCategoryClick = (clickedCategory) => {
    console.log("Category clicked:", clickedCategory); // Log the clicked category
    setCategory(clickedCategory); // Set the selected category
  };

  // Filter posts based on the selected category
  const filteredPosts =
    category === "all"
      ? posts
      : posts.filter((post) => post.fields.category === category);

  return (
    <section className={s.Posts}>
      {/* Navbar for category selection */}
      <nav className={s.Navbar}>
        <ul>
          <li
            onClick={() => handleCategoryClick("all")}
            className={category === "all" ? s.active : ""}
          >
            All
          </li>
          {categories.map((cat) => (
            <li
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={category === cat ? s.active : ""}
            >
              {cat}
            </li>
          ))}
        </ul>
      </nav>

      {/* Posts list */}
      <div className={s.PostsGrid}>
        {filteredPosts?.map((item) => (
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
    </section>
  );
};
