import s from "./Style.module.scss";
import { NavLink } from "react-router-dom";
import {Home} from "../../pages/Home"

export const Logo = () => {
  return (
    <h1 className={s.Logo}>
      <NavLink to={"/"}>INGN</NavLink>
    </h1>
  );
};
