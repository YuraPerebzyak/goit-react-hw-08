
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <>      <div style={css.container}>
        <h1 style={css.title}>
          Welcome to home page{" "}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h1>
      </div>
    </>
  );
}
