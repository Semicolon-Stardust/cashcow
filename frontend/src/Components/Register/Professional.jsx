import Input from "../Utilities/Input";

function Professional({input, handleChange}) {
  return (
    <div className="w-full">
      <div className="h-full flex flex-col justify-center gap-5">
        <Input
          label="Ocupation"
          type="text"
          placeholder="Enter your Ocupation here"
          name="ocupation"
          value={input.ocupation}
          handleChange={handleChange}
        />
        <Input
          label="Primary Currency"
          type="text"
          placeholder="Enter your Primary Currency here"
          name="primaryCurrency"
          value={input.primaryCurrency}
          handleChange={handleChange}
        />
        {/* <Input label="PAN Card Number" type="text" placeholder="Enter your PAN Card Number"/> */}

      </div>
    </div>
  );
}

export default Professional;
