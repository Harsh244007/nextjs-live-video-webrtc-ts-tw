import { memo } from "react";
import { Ysabeau_Font } from "../Common/Fonts";
import ThemeToggle from "./ThemeToggle";
const Header = () => {
  return (
    <nav className={`${Ysabeau_Font.className} ${Ysabeau_Font.variable} max-w-screen-xl m-auto`}>
      <ThemeToggle />
    </nav>
  );
};
export default memo(Header);