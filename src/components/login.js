import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginContext } from "../context/loginContext";

const Login = () => {
  const { loginStatus, login } = useLoginContext();

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onFormSubmit = async (e) => {
    e.preventDefault();
    authenticateUser();
  };
  const authenticateUser = async () => {
    await login(email, password);

    //get the API response from LocalStorage and destructuring it

    const { status, redirect } = loginStatus;
    console.log(loginStatus);

    if (status === "success" && redirect === "True") {
      navigate("/userinfo", { replace: true });
    } else if (status === "success") {
      navigate("/home", { replace: true });
    } else if (status === "failed") alert("Invalid Credentials");
  };
  return (
    <>
      <div className=" col-sm-4 col-md-5 col-lg-4 mx-auto">
        <form action="" onSubmit={onFormSubmit}>
          <div
            className="card mt-5"
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          >
            <div className="card-body">
              {/*Member login */}
              <div className="row">
                <div className="col">
                  <center>
                    <h2>USER SIGN IN</h2>
                  </center>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col">
                  {/*Email Id InputText */}
                  <div className="mt-3">
                    <label htmlFor="email" className="mb-2">
                      Email ID
                    </label>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        id="email"
                        placeholder="Enter the Email ID"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  {/*Password InpuText*/}
                  <div className="mt-3">
                    <label htmlFor="password" className="mb-2">
                      Password
                    </label>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        id="password"
                        placeholder="Enter the Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>

                  <hr className="mt-5" />
                  <div className="mt-2 text-center">
                    Not a member yet ?
                    <Link
                      to="/signup"
                      className="text-decoration-none text-dark mx-2"
                    >
                      Sign up
                    </Link>
                  </div>

                  <div className="mt-3 text-center">
                    <Link
                      to="#"
                      className="text-decoration-none text-dark mx-2"
                    >
                      Forgot Password
                    </Link>
                  </div>

                  <div className="mt-3 mb-3">
                    <div className="form-group">
                      <button className="form-control btn btn-success text-center">
                        Sign In
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
