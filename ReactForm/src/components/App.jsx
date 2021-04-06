import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

function App() {
  //USESTATE TO CHANGE STEP NUMBER
  const [step, setStep] = useState(1);
  //DIFFERENT USE STATES FOR EACH FIELD VALUES-SIMPLIY INTO ONE OBJECT?
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");

  //FUNCTION TO GO TO THE NEXT STEP AS WELL AS UPDATING THE USESTATES
  //CHECK IF THE CONSTANTS ARE UNDEFINED AKA EMPTY, IF SO SEND AN ALERT
  function NextStepStep1(event) {
    if (name === "") {
      alert("You need to enter a name!");
      event.preventDefault();
    } else if (number === "") {
      alert("You need to enter a number!");
      event.preventDefault();
    } else {
      setStep(step + 1);
      setName(name);
      setNumber(number);
    }
  }

  function NextStep(event) {
    //AGE VALIDATION-MUST BE OLDER THAN 18 TO ACCESS WEBSITE
    var DobCheck = +new Date(dob);
    var age = +~~((Date.now() - DobCheck) / 31557600000);
    console.log(age);

    if (email === "") {
      alert("You need to enter an email!");
      setStep(2);
      event.preventDefault();
    } else if (dob === "") {
      alert("You need to enter a date of birth!");
      setStep(2);
      event.preventDefault();
    } else if (age < 18) {
      alert("You need to be 18 years of age!");
      setStep(2);
      event.preventDefault();
    } else {
      setStep(step + 1);
      setEmail(email);
      setDob(dob);
    }
  }

  //FUNCTION TO GO BACK A STEP
  function PreviousStep() {
    setStep(step - 1);
    console.log(step);
  }

  //HANDLE  FOR NAME
  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  //HANDLE  CHANGE FOR NUMBER
  function handleNumberChange(event) {
    console.log(event.target.value);
    setNumber(event.target.value);
  }

  //HANDLE  CHANGE FOR EMAIL
  function handleChangeEmail(event) {
    console.log(event.target.value);
    setEmail(event.target.value);
  }
  //HANDLE  CHANGE FOR DOB
  function handleChangeDob(event) {
    console.log(event.target.value);
    setDob(event.target.value);
  }

  //SUBMIT USER DETAILS-CURRENTLY THIS IS JUST A WARNING,
  //IT WOULD NEED THE DATA TO BE ADDED TO THE SERVER
  function SubmitDetails() {
    alert(
      "Thank you for your submission! Your confirmed details are:" +
        "\n" +
        "    Fullname:  " +
        name +
        "\n" +
        "    Number: " +
        number +
        "\n" +
        "    Email:  " +
        email +
        "\n" +
        "    Date Of Birth:  " +
        dob
    );
    window.location.reload();
  }

  //CONTAINER
  //CONDITONAL RENDERING USED TO DISPLAY THE COMPONENT DEPENDING ON THE USE STATE NUMBER
  //USE PROPS FOR EACH INPUT
  return (
    <div>
      {step === 1 ? (
        <Step1
          submit={NextStepStep1}
          name="fName"
          change={handleChange}
          placeholder="Enter Full Name"
          statevalue={name}
          //
          number="number"
          numberChange={handleNumberChange}
          placeholderNumber="Enter Mobile Number"
          statevalueNumber={number}
        />
      ) : step === 2 ? (
        <Step2
          submit={NextStep}
          previous={PreviousStep}
          email="email"
          change={handleChangeEmail}
          placeholder="Enter Email"
          statevalue={email}
          //
          dob="dob"
          dobChange={handleChangeDob}
          placeholderChange="Enter Date of Birth"
          stateDob={dob}
        />
      ) : step === 3 ? (
        <Step3
          fullname={name}
          number={number}
          email={email}
          dob={dob}
          previous={PreviousStep}
          submit={SubmitDetails}
        />
      ) : null}
    </div>
  );
}

export default App;
