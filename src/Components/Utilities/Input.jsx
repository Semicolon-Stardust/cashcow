import React from 'react'

function Input(props) {

    const label = props.label;
    const placeholder = props.placeholder;
    const type = props.type;

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
                className="input input-bordered input-info w-full"
              />
            </label>
          </div>
    </div>
  )
}

export default Input