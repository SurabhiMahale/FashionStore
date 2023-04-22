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
    await login(email, password);

    //get the API response from LocalStorage and destructuring it
    const { status, redirect } = loginStatus;
    console.log(loginStatus);

    if (status === "success" && redirect === "True") {
      navigate("/userinfo", { replace: true });
    } else if (status === "success") {
      navigate("/home", { replace: true });
    } else alert("Invalid Credentials");
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

// export default Login;
// import React from "react";
// import person from "../assets/3854.jpg";
// import Image from "./Image";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = React.useState("");
//   const [password, setPassword] = React.useState("");

//   const onFormSubmit = (e) => {
//     e.preventDefault();

//     const Login = async () => {
//       const { Buffer } = require("buffer");
//       const credentials = Buffer.from(`${email}:${password}`).toString(
//         "base64"
//       );
//       var config = {
//         method: "POST",
//         headers: {
//           "Authorization": `Basic ${credentials}`,
//           "Content-Type": "application/json",
//         },
//         url: "http://myproject.local:8000/auth/login",
//         withCredentials: true,
//       };

//       const response = await axios(config);
//       console.log(response);
//       if (
//         response.data.status === "success" &&
//         response.data.redirect === "True"
//       ) {
//         navigate("/userinfo", { replace: true });
//       } else if (response.data.status === "success") {
//         navigate("/home", { replace: true });
//       } else {
//         alert("Entered Credentials are invalid");
//       }
//     };

//     Login();
//   };

//   return (
//     <>
//       <div className="container mt-5">
//         <div className="row">
//           <div className="col-md-6 col-sm-3 col-lg-6 mx-auto">
//             <form action=" " onSubmit={onFormSubmit}>
//               <div className="card">
//                 <div className="card-body">
//                   {/*Person Logo */}
//                   <div className="row">
//                     <div className="col">
//                       <center>
//                         <Image src={person} width="55px" alt="person-logo" />
//                       </center>
//                     </div>
//                   </div>

//                   {/*Member login */}
//                   <div className="row">
//                     <div className="col">
//                       <center>
//                         <h3> Login</h3>
//                       </center>
//                     </div>
//                   </div>
//                   <hr />
//                   <div className="row">
//                     <div className="col">
//                       {/*Email Id InputText */}
//                       <div className="mt-3">
//                         <label htmlFor="email">Email ID</label>
//                         <div className="form-group">
//                           <input
//                             className="form-control"
//                             type="text"
//                             id="email"
//                             placeholder="Enter the Email ID"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                           />
//                         </div>
//                       </div>

//                       {/*Password InpuText*/}
//                       <div className="mt-3">
//                         <label htmlFor="password">Password</label>
//                         <div className="form-group">
//                           <input
//                             className="form-control"
//                             type="text"
//                             id="password"
//                             placeholder="Enter the Password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                           />
//                         </div>
//                       </div>

//                       <hr className="mt-5" />
//                       <div className="mt-2 text-center">
//                         Don't have an account yet ?
//                         <Link
//                           to="/register"
//                           className="text-decoration-none text-black-50 mx-2"
//                         >
//                           Sign up
//                         </Link>
//                       </div>

//                       <div className="mt-3">
//                         <div className="form-group">
//                           <button className="form-control btn btn-success text-center">
//                             Login
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

export default Login;
