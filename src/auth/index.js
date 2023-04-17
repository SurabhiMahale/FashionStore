import axios from "axios";

const IsUserLoggedIn = async (email, password) => {
  const { Buffer } = require("buffer");
  const credentials = Buffer.from(`${email}:${password}`).toString("base64");
  var config = {
    method: "POST",
    headers: {
      Authorization: `Basic ${credentials}`,
      "Content-Type": "application/json",
    },
    url: "http://myproject.local:8000/auth/login",
    withCredentials: true,
  };

  const response = await axios(config);
  localStorage.setItem("loginStatus", JSON.stringify(response.data));
  return response ? true : false;
};

const isUserLoggedOut = () => {
  localStorage.removeItem("loginStatus");
  console.log("User Logged out");
};

export { IsUserLoggedIn, isUserLoggedOut };
