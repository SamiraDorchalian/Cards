import { postData } from "./utils/httpReq.js";
import { setCookie } from "./utils/cookie.js";
import authHandler from "./utils/authorization.js";
import validataForm from "./utils/validation.js";

const inputBox = document.querySelectorAll("input");
const loginButton = document.querySelector("button");

const submitHandler = async (event) => {
  event.preventDefault();

  const username = inputBox[0].value;
  const password = inputBox[1].value;

  const validation = validataForm(username, password);
  if (!validation) return;

  const response = await postData("auth/login", {
    username,
    password,
  });
  setCookie(response.token);
  location.assign("index.html");
};

loginButton.addEventListener("click", submitHandler);
document.addEventListener("DOMContentLoaded", authHandler);
