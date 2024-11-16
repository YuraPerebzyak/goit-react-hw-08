import { useDispatch, useSelector } from "react-redux";
import css from "./UserMenu.module.css";
import { selectUserData } from "../../redux/auth/selectors";
import { logoutUser } from "../../redux/auth/operations";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUserData);

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logoutUser())}>
        Logout
      </button>
    </div>
  );
};
