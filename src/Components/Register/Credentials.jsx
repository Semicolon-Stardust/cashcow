import Input from "../Utilities/Input";

function Credentials() {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-5 text-center">
        <h1 className="text-2xl font-bold">Credentials</h1>
      </div>
      <div className="h-full flex flex-col justify-center">
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
        <Input
          label="Confirm Password"
          type="password"
          placeholder="Confirm your Password Here"
        />
      </div>
    </div>
  );
}

export default Credentials;
