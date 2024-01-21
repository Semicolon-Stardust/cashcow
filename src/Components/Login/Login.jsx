import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Input from "../Utilities/Input";
import { UserContext } from "../../context/UserContext";

function Login() {

  const {user, setUser} = useContext(UserContext);

  const [input, setInput] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [toastMessage, setToastMessage] = useState("");

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  }
  
  const submitHandler = async (e) => {
    e.preventDefault();
    
    try{
      const data = await fetch("/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(input)
      })

      const response = await data.json();
      console.log(response)
    //   if (response.success == true) {
    //     setToastMessage(`${response.user.name} logged in successfully`);
    //     if (user === null) {
    //       setUser(response.user);
    //     }

    //   }
    //   else {
    //     setToastMessage(response.message);
    //   }
    }
    catch(err){
      // setToastMessage(err);
      console.log(err)
    }

  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-7">
      <div className="flex flex-col gap-5 text-center">
        <h1 className="text-4xl font-bold">Login</h1>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </p>
      </div>
      <div className="flex justify-center items-center">
        { (toastMessage !== "") ?
        <div className="flex w-[50%] m-auto">
          <h2 className="text-[red] font-semibold text-[20px]">{toastMessage}</h2>
          <button onClick={() => { setToastMessage(""); }}>remove</button>
        </div>
        : null}
        <form onSubmit={submitHandler} className="sm:w-[30rem] lg:w-[50rem] flex flex-col gap-5">
          <Input label="Name" type="text" placeholder="Enter your Name Here" name="username" value={input.username} handleChange={handleChange} />
          <Input
            label="Email"
            type="email"
            placeholder="Enter your Email Here"
            name="email"
            value={input.email}
            handleChange={handleChange}
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your Password Here"
            name="password"
            value={input.password}
            handleChange={handleChange}
          />

          <div className="flex flex-col gap-5 justify-center items-center">
            <div className="flex justify-center items-center w-full">
              <div className="w-full">
                <a className="link">Forgot Password?</a>
              </div>
              <div className="divider divider-horizontal"></div>
              <label className="cursor-pointer label w-full">
                <span className="label-text">Remember Me</span>
                <input type="checkbox" className="checkbox checkbox-info" />
              </label>
            </div>

            <button className="btn btn-info w-full">Login</button>
          </div>
          <div className="divider">OR</div>
          <div className="flex justify-center items-center">
            <p>
              New Here? To create a new account :{" "}
              <Link to="/register" className="link">
                click here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
