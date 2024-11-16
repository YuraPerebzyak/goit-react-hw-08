import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectUserDataIsLoggedIn } from "../redux/auth/selectors";

const PrivateRoute = ({ component, redirectTo = "/login" }) => {
  const isLoggedIn = useSelector(selectUserDataIsLoggedIn);
  return isLoggedIn ? component : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
