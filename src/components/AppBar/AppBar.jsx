import { useSelector } from "react-redux";
import { AuthNav } from "../AuthNav/AuthNav";
import { selectUserDataIsLoggedIn } from "../../redux/auth/selectors";
import css from "./AppBar.module.css";
import { UserMenu } from "../UserMenu/UserMenu";
import { Navigation } from "../Navigation/Navigation";

export const AppBar = () => {
  const isLoggedIn = useSelector(selectUserDataIsLoggedIn);

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
