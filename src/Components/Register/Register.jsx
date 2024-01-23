import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Personal from "./Personal";
import Professional from "./Professional";
import Credentials from "./Credentials";
import Review from "./Review";
import { UserContext } from "../../context/UserContext";
import axios from "axios";

function Register() {

  const {user, setUser} = useContext(UserContext);
  const navigate = useNavigate();

  const [input, setInput] = useState({
    username: "",
    dob: "",
    ocupation: "",
    primaryCurrency: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [toastMessage, setToastMessage] = useState("");

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  }
  
  const submitHandler = async (e) => {
    e.preventDefault();
    
    if (input.password !== input.confirmPassword) {
      setToastMessage("Passwords do not match");
      return;
    }

    const age = Math.floor((new Date() - new Date(input.dob).getTime()) / 3.15576e+10);
    
    if (age < 7) {
      setToastMessage("You must be atleast 7 years old to register");
      return;
    }
    else if (age > 130){
      setToastMessage("You must be less than 130 years old to register");
      return;
    }
    try{
      const {data} = await axios.post('/register', input)

      if (data.success == true) {
        setToastMessage(`${data.user.name} registered successfully`);
        if (user === null) {
          setUser(data.user);
          navigate("/dashboard");
        }

      }
      else {
        setToastMessage(data.message);
      }
    }
    catch(err){
      setToastMessage(err);
    }
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-7 w-full sm:my-0 my-[7rem]">
      <div className="flex flex-col gap-5 text-center">
        <h1 className="text-4xl font-bold">Register</h1>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </p>
      </div>
      <div>
        <div className="flex justify-center items-center">
        { (toastMessage !== "") ?
        <div className="flex w-[50%] m-auto">
          <h2 className="text-[red] font-semibold text-[20px]">{toastMessage}</h2>
          <button onClick={() => { setToastMessage(""); }}> remove</button>
        </div>
        : null}
          <form onSubmit={submitHandler} className="sm:w-[80rem] flex sm:flex-row min-[767px]:flex-col flex-col gap-5">
            <Personal input={input} handleChange={handleChange} />
            <div className="divider lg:divider-horizontal sm:divider-vertical"></div>
            <Professional input={input} handleChange={handleChange} />
            <div className="divider lg:divider-horizontal sm:divider-vertical"></div>
            <Credentials input={input} handleChange={handleChange} />
            <div className="my-12 flex justify-end items-center">
          <button className="btn btn-primary">Register</button>
        </div>
          </form>
        </div>
        
      </div>
    </div>
  );
}

export default Register;
