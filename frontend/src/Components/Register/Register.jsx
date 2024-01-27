import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Personal from "./Personal";
import Professional from "./Professional";
import Credentials from "./Credentials";
import { UserContext } from "../../context/UserContext";
import axios from "axios";
import Input from "../Utilities/Input";
import Navbar from "../Navbar/Navbar";

function Register() {
  const { user, setUser } = useContext(UserContext);
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
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (input.password !== input.confirmPassword) {
      setToastMessage("Passwords do not match");
      return;
    }

    const age = Math.floor(
      (new Date() - new Date(input.dob).getTime()) / 3.15576e10
    );

    if (age < 7) {
      setToastMessage("You must be atleast 7 years old to register");
      return;
    } else if (age > 130) {
      setToastMessage("You must be less than 130 years old to register");
      return;
    }
    try {
      const { data } = await axios.post("/register", input);

      if (data.success == true) {
        setToastMessage(`${data.user.name} registered successfully`);
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

  const [currentStep, setCurrentStep] = useState(1);
  const steps = [
    {
      id: 1,
      name: "Personal",
      component: <Personal input={input} handleChange={handleChange} />,
    },
    {
      id: 2,
      name: "Professional",
      component: <Professional input={input} handleChange={handleChange} />,
    },
    {
      id: 3,
      name: "Credentials",
      component: <Credentials input={input} handleChange={handleChange} />,
    },
  ];
  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div>
      <div className="">
        <Navbar />
      </div>

      <div className="h-screen flex justify-between items-center px-8 relative bg-gradient-to-bl from-blue-100 via-transparent dark:from-blue-950 dark:via-transparent">

      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid items-center md:grid-cols-2 gap-8 lg:gap-12">
          <div className="flex justify-between items-center">
            <div className="mt-4 md:mb-12 max-w-2xl">
              <h1 className="mb-4 font-semibold text-gray-800 text-4xl lg:text-5xl dark:text-gray-200">
                Register
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
              Follow the stepper and register your account.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700 flex flex-col gap-5 p-7">
        <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700 p-3">
          <ul className="relative flex flex-row gap-x-2">
            {steps.map((step, index) => {
              return (
                <li
                  key={index}
                  className="flex items-center gap-x-2 shrink basis-0 flex-1 group"
                >
                  <div className="min-w-[28px] min-h-[28px] inline-flex justify-center items-center text-xs align-middle">
                    <span
                      className={`w-7 h-7 flex justify-center items-center flex-shrink-0 ${
                        currentStep === step.id
                          ? "bg-gray-700 dark:bg-gray-900 text-white"
                          : "bg-gray-100 dark:bg-gray-700 dark:text-white"
                      } font-medium text-gray-800 rounded-full`}
                    >
                      {step.id}
                    </span>
                    <span className="ms-2 block text-sm font-medium text-gray-800 dark:text-white">
                      {step.name}
                    </span>
                  </div>
                  <div className="w-full h-px flex-1 bg-gray-200 group-last:hidden dark:bg-gray-700"></div>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          {steps.map((step, index) => {
            return (
              <div
                key={index}
                className={`my-7 flex flex-col gap-5 text-center ${
                  currentStep === step.id ? "block" : "hidden"
                }`}
              >
                <h1 className="text-2xl font-bold dark:text-white">
                  {step.name}
                </h1>
                <p className="dark:text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam
                </p>
              </div>
            );
          })}
        </div>

        <form onSubmit={submitHandler} className="flex flex-col gap-5">
          <div>
            {steps.map((step, index) => {
              return (
                <div
                  key={index}
                  className={`h-full flex flex-col justify-center dark:text-white ${
                    currentStep === step.id ? "block" : "hidden"
                  }`}
                >
                  {step.component}
                </div>
              );
            })}
          </div>

          <div className="flex justify-between items-center w-full px-[8rem]">
            <button
              type="button"
              onClick={prevStep}
              className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-800 text-gray-800 hover:border-gray-500 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:border-white dark:text-white dark:hover:text-gray-300 dark:hover:border-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              {...(currentStep === 1 ? { disabled: true } : null)}
            >
              Previous
            </button>
            {currentStep === steps.length ? (
              <button
                type="submit"
                className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-500 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                Register
              </button>
            ) : (
              <button
                type="button"
                onClick={nextStep}
                className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-500 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                Next
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Register;
