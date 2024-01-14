import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-7">
      <div className="flex flex-col gap-5 text-center">
        <h1 className="text-4xl font-bold">Login</h1>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </p>
      </div>
      <div className="flex justify-center items-center">
        <form className="sm:w-[30rem] lg:w-[50rem] flex flex-col gap-5">
          <div className="">
            <label>
              <div className="label">
                <span className="label-text">E-Mail</span>
              </div>
              <input
                type="text"
                placeholder="Type your E-Mail here"
                className="input input-bordered input-info w-full"
              />
            </label>
          </div>
          <div className="">
            <label>
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input
                type="password"
                placeholder="Type your Password here"
                className="input input-bordered input-info w-full"
              />
            </label>
          </div>

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
                <p>New Here? To create a new account : <Link to="/register" className="link">click here</Link></p>
            </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
