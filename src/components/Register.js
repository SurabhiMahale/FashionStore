import React, { useState } from "react";

import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const Register = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      let data = JSON.stringify({
        email,
        password,
      });
      const config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "http://myproject.local:8000/auth/register",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      try {
        const response = await axios.request(config);
        if (response.data.status === "success") {
          navigate("/signin", { replace: true });
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Password is not matching");
    }
  };

  return (
    <>
      <div className=" col-sm-4 col-md-5 col-lg-4 mx-auto">
        <form action=" " onSubmit={Register}>
          <div
            className="card mt-3"
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          >
            <div className="card-body">
              {/*Member login */}
              <div className="row">
                <div className="col">
                  <center>
                    <h2>USER SIGN UP</h2>
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

                  {/* Confirm Password*/}

                  <div className="mt-3">
                    <label htmlFor="confirmPassword" className="mb-2">
                      Confirm Password
                    </label>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        id="confirmPassword"
                        placeholder="Enter the Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </div>
                  </div>

                  <hr className="mt-5" />
                  <div className="mt-2 text-center">
                    Not a member yet ?
                    <Link
                      to="/register"
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
                        Sign Up
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 col-sm-3 col-lg-6 mx-auto">
            <form action=" " onSubmit={Register}>
              <div className="card">
                <div className="card-body">
                  {/*Person Logo */}
      {/* <div className="row">
                    <div className="col">
                      <center> */}
      {/* <Image src={person} width="55px" alt="person-logo" /> */}
      {/* </center>
                    </div>
                  </div> */}

      {/*Member login */}
      {/* <div className="row">
                    <div className="col">
                      <center>
                        <h3> Register</h3>
                      </center>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col"> */}
      {/*Email Id InputText */}
      {/* <div className="mt-3">
                        <label htmlFor="email">Email ID</label>
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
                      </div> */}

      {/*Password InpuText*/}
      {/* <div className="mt-3">
                        <label htmlFor="password">Password</label>
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
                      </div> */}

      {/* <div className="mt-3">
                        <label htmlFor="password">Confirm Password</label>
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            id="password"
                            placeholder="Enter the Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                          />
                        </div>
                      </div>

                      <hr className="mt-5" />
                      <div className="mt-2 text-center">
                        Don't have an account yet ?
                        <Link
                          to="/register"
                          className="text-decoration-none text-black-50 mx-2"
                        >
                          Sign up
                        </Link>
                      </div>

                      <div className="mt-3">
                        <div className="form-group">
                          <button className="form-control btn btn-success text-center">
                            Login
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Register;
