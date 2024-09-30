import s from "./Style.module.scss";

import { Logo } from "../Logo/Logo";
import { Account } from "../Account/Account";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";

export const Header = () => {
  return (
    <header className={s.Header}>
      <Logo></Logo>
      <div className={s.Navigation}>
        <Account></Account>
        <BurgerMenu></BurgerMenu>
      </div>
    </header>
  );
};
