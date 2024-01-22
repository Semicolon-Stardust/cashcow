import React from 'react'

function Input(props) {

    const label = props.label;
    const placeholder = props.placeholder;
    const type = props.type;
    const name = props.name;

  return (
    <div>
        <div className="">
            <label>
              <div className="label">
                <span className="label-text">{label}</span>
              </div>
              <input
                type={type}
                placeholder={placeholder}
                name={name}
                value={props.value}
                className="input input-bordered input-info w-full"
                onChange={props.handleChange}
              />
            </label>
          </div>
    </div>
  )
}

export default Input