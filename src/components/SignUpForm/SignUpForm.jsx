import { useForm } from "react-hook-form";
import { logIn, signUp } from "../../api/auth";
import css from "./SignUpForm.module.css";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // сначала запустим login, если не залогинены, то запускаем signup
    try {
      const isLogedIn = await logIn(data);
      console.log("isLogedIn", isLogedIn);

      if (!isLogedIn) {
        console.log("нужно регаться");
        const signUpResponse = await signUp(data);
        console.log("signUpResponse", signUpResponse);
        if (signUpResponse) {
          const logInResonse = await logIn(data);
          console.log("logInResonse TOTAL -----   ", logInResonse);
        }
      }
    } catch (error) {
      console.log("error", error);
    }

    // const response = await signUp(data);

    // в любом случае запускаем logIn
    // if (response.id) {
    //   const logInData = await logIn(data);
    //   console.log("logInData", logInData);
    // }

    // console.log(response);
  };

  return (
    <form className={css.authForm} onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <div className={css.mesContainer}>
      <input
        className={css.mesClient}
        placeholder="example@mail.com"
        {...register("email", { required: true })}
      />

      {/* include validation with required or other standard HTML validation rules */}
      <input
        className={css.mesClient}
        placeholder="password"
        {...register("password", { required: true })}
      /></div>
      
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <button className={css.btn} type="submit">
        go!
      </button>

      {/* <input type="submit" /> */}
    </form>
  );
};

export default SignUpForm;
