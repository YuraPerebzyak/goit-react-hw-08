import { useSelector } from "react-redux";
import css from "./Navigation.module.css";
import { selectUserDataIsLoggedIn } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  const isLoggedIn = useSelector(selectUserDataIsLoggedIn);

  return (
    <nav className={css.nav_list}>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
