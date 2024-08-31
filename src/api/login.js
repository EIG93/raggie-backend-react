import md5 from "js-md5";
import api from "./api";

export const login = (username, pwd) => {

  const password = md5(pwd);
  console.log("md5pwd==" + password);
  
  return api.post("/employee/login", { username, password });
};