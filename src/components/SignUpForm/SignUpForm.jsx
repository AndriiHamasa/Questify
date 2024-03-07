import { useForm } from "react-hook-form";
import { logIn, signUp } from "../../api/auth";
import { Link, useNavigate } from "react-router-dom";

import css from "./SignUpForm.module.css";
import { useDispatch } from "react-redux";
import { setTokenToStore } from "../../redux/auth/authSlice";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
          const logInResponse = await logIn(data);
          console.log("logInResonse TOTAL -----   ", logInResponse);
          if (logInResponse) {
            dispatch(
              setTokenToStore({
                token: logInResponse.accessToken,
                email: logInResponse.userData.email,
              })
            );
            navigate("/dashboard");
          }
          
        }
      } else {
        console.log(
          "хотел перекинуть",
          "isLogedIn.accessToken - ",
          isLogedIn.accessToken
        );

        dispatch(
          setTokenToStore({
            token: isLogedIn.accessToken,
            email: isLogedIn.userData.email,
          })
        );
        navigate("/dashboard");
      }
    } catch (error) {
      console.log("error", error);
    }
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
        />
      </div>

      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <button className={css.btn} type="submit">
        go!
      </button>

      {/* <Link className={css.btn} type="submit" to="/dashboard">
        go!
      </Link> */}

      {/* <input type="submit" /> */}
    </form>
  );
};

export default SignUpForm;
