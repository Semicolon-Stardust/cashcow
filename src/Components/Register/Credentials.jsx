import Input from "../Utilities/Input";

function Credentials({input, handleChange}) {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-5 text-center">
        <h1 className="text-2xl font-bold">Credentials</h1>
      </div>
      <div className="h-full flex flex-col justify-center">
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
        <Input
          label="Confirm Password"
          type="password"
          placeholder="Confirm your Password Here"
          name="confirmPassword"
          value={input.confirmPassword}
          handleChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Credentials;
