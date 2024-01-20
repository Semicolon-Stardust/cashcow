import { Link } from "react-router-dom";
import Input from "../Utilities/Input";

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
          <Input label="Name" type="text" placeholder="Enter your Name Here" />
          <Input
            label="Email"
            type="text"
            placeholder="Enter your Email Here"
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your Password Here"
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
