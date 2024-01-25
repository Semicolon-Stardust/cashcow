import Input from "../Utilities/Input";

function Personal({input, handleChange}) {
  return (
    <div className="w-full">
      <div className="h-full flex flex-col justify-center gap-5">
        <Input
          label="Full Name"
          type="text"
          placeholder="Enter your Full Name Here"
          name="username"
          value={input.username}
          handleChange={handleChange}
        />
        <Input label="Date of Birth" type="Date" placeholder="DD/MM/YYYY" name="dob" value={input.dob} handleChange={handleChange} />
        {/* <Input label="" type="" placeholder="" /> */}
      </div>
    </div>
  );
}

export default Personal;
