import React from "react";

//STEP 1- DISPLAY THE FORM, USE PROPS TO USE VALUES IN APP (EMAIL AND NAME)
function Step1(props) {
  return (
    <div className="container">
      <h1>Step 1: Full Name & Mobile Number</h1>
      <form onSubmit={props.submit}>
        <input
          name={props.name}
          type="text"
          onChange={props.change}
          placeholder={props.placeholder}
          value={props.statevalue}
        />
        <input
          name={props.number}
          type="number"
          onChange={props.numberChange}
          placeholder={props.placeholderNumber}
          value={props.statevalueNumber}
        />
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default Step1;
