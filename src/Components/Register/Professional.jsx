import Input from "../Utilities/Input";

function Professional({input, handleChange}) {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-5 text-center">
        <h1 className="text-2xl font-bold">Professional</h1>
      </div>
      <div className="h-full flex flex-col justify-center">
        <Input
          label="Ocupation"
          type="text"
          placeholder="Enter your Ocupation here"
          name="ocupation"
          value={input.ocupation}
          handleChange={handleChange}
        />
        <Input
          label="Company"
          type="text"
          placeholder="Enter your Company here"
          name="company"
          value={input.company}
          handleChange={handleChange}
        />
        {/* <Input label="PAN Card Number" type="text" placeholder="Enter your PAN Card Number"/> */}

      </div>
    </div>
  );
}

export default Professional;
