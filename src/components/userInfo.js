import { useState } from "react";
import { TextField } from "@mui/material";
import axios from "axios";
import { Button } from "@mui/material";
import shop from "../assets/shopping.svg";
import "../../src/css/userinfo.css";
import {useNavigate} from "react-router-dom";
function UserInfo() {
  const [info, setInfo] = useState({
    name: "",
    club_member_status: "Regularly",
    age: "",
    postal_code: "",
  });

  const inputEvent = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInfo((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const navigate = useNavigate();
  const onSubmits = (event) => {
    event.preventDefault();

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://myproject.local:8000/users/info/edit",
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
      data: JSON.stringify(info),
    };
     
    const SubmitData = async () =>{
      try {
        const response = await axios.request(config);
        if (response.data.status === "success") {
          navigate("/home", { replace: true });
        }
      } catch (error) {
        console.log(error);
      }
    }
    SubmitData();
    
    
  };

  return (
    <div className="p-10">
      <div className="container">
        <div className="left">
          <label className="Projecttitle">USER INFO</label>
          <img src={shop} className="shop" alt="shoplogo" />
        </div>
        <div className="right">
          <form onSubmit={onSubmits}>
            <div>
              {/* NAME */}
              <label className="Name">Name: </label>
              <br />
              <TextField
                className="inputbox"
                onChange={inputEvent}
                id="Name"
                name="name"
                variant="outlined"
                autoComplete="off"
              />
            </div>

            <br />

            

            <div className="container1">
              <div className="right1">
                {/* Age */}
                <label className="Name">Age: </label>
                <br />

                <TextField
                  type="text"
                  className="inputbox1"
                  value={info.regno}
                  onChange={inputEvent}
                  id="age"
                  name="age"
                  variant="outlined"
                  autoComplete="off"
                />
              </div>

              <div className="left1">
                {/* Postal code */}
                <label className="Name">Postal code: </label>
                <br />

                <TextField
                  type="text"
                  className="inputbox1"
                  value={info.postal_code}
                  onChange={inputEvent}
                  id="postalcode"
                  name="postal_code"
                  variant="outlined"
                  autoComplete="off"
                />
              </div>
            </div>
            <br />

           

            <div className="container2radio">
              <div className="radio">
                <label>
                  <input type="checkbox" value="option1" />
                  Do you want to be club member?
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="checkbox" value="option2" />
                  Would you like to recive fashion updates?
                </label>
              </div>
            </div>

            <br />
            <br />
            <div className="inputbox">
              {/* Button */}
              <Button
                className="Confirmbtn self-center"
                type="submit"
                variant="contained"
              >
                CONFIRM
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
