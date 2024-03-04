// import BackgroundPart from "../../components/BackgroundPart/BackgroundPart";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import css from "./AuthPage.module.css";

const AuthPage = () => {
  console.log("window.innerWidth = ", window.innerWidth);
  console.log("typeof window.innerWidth - ", typeof window.innerWidth);
  console.log("window.innerWidth = ", window.innerWidth >= 768);

  return (
    <div className={css.mainContainer}>
      
      <div className={css.container}>
        <h1 className={css.header}>Questify</h1>
        <p className={css.paragraph_big}>
          Questify will turn your life into a thrilling game full of amazing
          quests and exciting challenges.
        </p>
        <p className={css.paragraph_small}>
          Choose your name to sign up or log in
        </p>
        <SignUpForm />
      </div>
      {/* <BackgroundPart/> */}
      
      
    </div>
  );
};

export default AuthPage;
