import React, { useState } from "react";
import Personal from "./Personal";
import Professional from "./Professional";
import Credentials from "./Credentials";
import Review from "./Review";

function Register() {

  const [input, setInput] = useState({
    username: "",
    dob: "",
    ocupation: "",
    company: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  }
  
  const submitHandler = (e) => {
    e.preventDefault();

    console.log(input)
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
          <form onSubmit={submitHandler} className="sm:w-[80rem] flex sm:flex-row min-[767px]:flex-col flex-col gap-5">
            <Personal input={input} handleChange={handleChange} />
            <div className="divider lg:divider-horizontal sm:divider-vertical"></div>
            <Professional input={input} handleChange={handleChange} />
            <div className="divider lg:divider-horizontal sm:divider-vertical"></div>
            <Credentials input={input} handleChange={handleChange} />
          </form>
        </div>
        <div className="my-12 flex justify-end items-center">
          <button className="btn btn-primary">Register</button>
        </div>
      </div>
    </div>
  );
}

export default Register;
