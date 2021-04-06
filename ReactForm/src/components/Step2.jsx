import React from "react";

function Step2(props) {
  return (
    <div className="container">
      <h1>Step 2: Email & Date Of Birth</h1>
      <form onSubmit={props.submit}>
        <input
          name={props.email}
          type="text"
          onChange={props.change}
          placeholder={props.placeholder}
          value={props.statevalue}
        />
        <input
          name={props.dob}
          type="date"
          onChange={props.dobChange}
          placeholder={props.placeholderChange}
          value={props.stateDob}
        />
        <button type="submit">Next</button>
      </form>
      <button onClick={props.previous}> Previous</button>
    </div>
  );
}

export default Step2;
