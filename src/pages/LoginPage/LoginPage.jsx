import css from "./LoginPage.module.css";

import LoginForm from "../../components/LoginForm/LoginForm";

export default function LoginPage() {
  return (
    <main className={css.loginPage}>
      <LoginForm />
    </main>
  );
}
