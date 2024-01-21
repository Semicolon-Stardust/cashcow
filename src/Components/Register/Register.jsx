import Personal from "./Personal";
import Professional from "./Professional";
import Credentials from "./Credentials";
import Review from "./Review";

function Register() {

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
          <form className="sm:w-[80rem] flex sm:flex-row min-[767px]:flex-col flex-col gap-5">
            <Personal />
            <div className="divider lg:divider-horizontal sm:divider-vertical"></div>
            <Professional />
            <div className="divider lg:divider-horizontal sm:divider-vertical"></div>
            <Credentials />
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
