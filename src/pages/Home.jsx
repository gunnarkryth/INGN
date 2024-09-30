import { Posts } from "../components/Posts/Posts";

import s from "./Page.module.scss";

export const Home = () => {
  return (
    <>
      <main className={s.Page}>
        <Posts></Posts>
      </main>
    </>
  );
};
