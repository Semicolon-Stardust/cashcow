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
                onChange={props.handleChange}
                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              />
            </label>
          </div>
    </div>
  )
}

export default Input