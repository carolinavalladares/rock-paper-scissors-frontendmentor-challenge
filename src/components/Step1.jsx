import React from "react";
import OptionComponent from "./optionComponent";

const Step1 = ({ step, setStep, options, setPlayersPick }) => {
  return (
    <div className="step-1">
      {/* <!-- Triangle --> */}
      <img src="./images/bg-triangle.svg" alt="" />

      {/* <!-- Options --> */}
      {options.map((option, index) => {
        return (
          <OptionComponent
            step={step}
            setStep={setStep}
            key={index}
            option={option}
            setPlayersPick={setPlayersPick}
          />
        );
      })}
    </div>
  );
};

export default Step1;
