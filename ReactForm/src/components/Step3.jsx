import React from "react";

function Step3(props) {
  return (
    <div className="container">
      <h1>Step 3: Are these details Correct? If so,click submit</h1>
      <h3>Full Name: </h3>
      <p>{props.fullname}</p>
      <h3>Number: </h3>
      <p> {props.number}</p>
      <h3>Email: </h3>
      <p>{props.email}</p>
      <h3>Date of Birth: </h3>
      <p>{props.dob}</p>
      <button onClick={props.submit} id="Step3Submit">
        {" "}
        Submit{" "}
      </button>
      <button onClick={props.previous}> Previous</button>
    </div>
  );
}

export default Step3;
