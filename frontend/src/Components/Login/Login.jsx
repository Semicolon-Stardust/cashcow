import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../Utilities/Input";
import { UserContext } from "../../context/UserContext";
import axios from "axios";
import Navbar from "../Navbar/Navbar";

function Login() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [toastMessage, setToastMessage] = useState("");

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/login", input);

      if (data.success == true) {
        setToastMessage(`${data.user.name} logged in successfully`);
        if (user === null) {
          setUser(data.user);
          navigate("/dashboard");
        }
      } else {
        setToastMessage(data.message);
      }
    } catch (err) {
      setToastMessage(err);
    }
  };

  return (
    <div className="">
      <div className="">
        <Navbar />
      </div>

      <div className="h-screen flex justify-center items-center">
        <div className="relative overflow-hidden bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700 flex flex-col gap-5 p-7">
          <div className="mx-auto max-w-screen-md py-12 px-4 sm:px-6 md:max-w-screen-xl md:py-20 lg:py-32 md:px-8 ">
            <div className="md:pe-8 md:w-1/2 xl:pe-0 xl:w-5/12">
              <h1 className="text-3xl text-gray-800 font-bold md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight dark:text-gray-200">
                Log <span className="text-blue-600 dark:text-blue-500">In</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 my-4">
                Built on standard web technology, teams use Preline to build
                beautiful cross-platform hybrid apps in a fraction of the time.
              </p>

              <form onSubmit={submitHandler}>
                <div className="mb-4">
                  <label className="block text-sm font-medium dark:text-white">
                    <span className="sr-only">Email address</span>
                  </label>
                  <Input
                    type="email"
                    placeholder="Enter your Email Here"
                    name="email"
                    value={input.email}
                    handleChange={handleChange}
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium dark:text-white">
                    <span className="sr-only">Password</span>
                  </label>
                  <Input
                    type="password"
                    placeholder="Enter your Password Here"
                    name="password"
                    value={input.password}
                    handleChange={handleChange}
                  />
                </div>

                <div className="grid">
                  <button
                    type="submit"
                    className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="hidden md:block md:absolute md:top-0 md:start-1/2 md:end-0 h-full bg-[url('https://source.unsplash.com/random')] bg-no-repeat bg-center bg-cover"></div>
        </div>
      </div>
    </div>
  );
}

export default Login;
