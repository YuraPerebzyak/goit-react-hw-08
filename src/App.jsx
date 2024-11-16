import { useDispatch, useSelector } from "react-redux";
import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { selectUserDataIsRefreshing } from "./redux/auth/selectors";
import { refreshUser } from "./redux/auth/operations";

import RestrictedRoute from "./components/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute";
import { Layout } from "./components/Layout/Layout";
import ContactsPage from "./pages/ContactsPage/ContactsPage";

import "./App.css";

const HomePage = lazy(() => import("../src/pages/HomePage/HomePage"));
const RegisterPage = lazy(() =>
  import("../src/pages/RegisterPage/RegisterPage")
);
const LoginPage = lazy(() => import("../src/pages/LoginPage/LoginPage"));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectUserDataIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing contacts...</b>
  ) : (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={<RestrictedRoute component={<RegisterPage />} />}
          />
          <Route
            path="/login"
            element={<RestrictedRoute component={<LoginPage />} />}
          />
          <Route
            path="/contacts"
            element={<PrivateRoute component={<ContactsPage />} />}
          />
        </Routes>
      </Suspense>
    </Layout>
  );
};
export default App;
