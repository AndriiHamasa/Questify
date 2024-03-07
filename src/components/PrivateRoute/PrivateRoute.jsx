import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  console.log("мы в приватном роуте")
  // const profile = useSelector(state => state.auth.profile)

  const profile = useSelector(state => state.auth.token)
  const location = useLocation()
  return profile ? children : <Navigate to={'/'} state={ location} />
};


