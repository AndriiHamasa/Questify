import axios from "axios";

const instance = axios.create({
  baseURL: "https://questify-backend.goit.global",
});

export const setToken = (token) => {
  instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const delToken = () => {
  instance.defaults.headers.common["Authorization"];
};

export const signUp = async (body) => {
  const { data } = await instance.post("/auth/register", body);
  console.log("data", data);

  return data;
};

export const logIn = async (body) => {
  try {
    const response = await instance.post("/auth/login", body);
    console.log('response', response)
    const {data} = response

    setToken(data.accessToken);

    return data;
  } catch (error) {
    console.log('error in login', error)
  }
};
