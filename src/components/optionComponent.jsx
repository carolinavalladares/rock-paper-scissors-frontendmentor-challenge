import React from "react";

const OptionComponent = ({ step, setStep, option, setPlayersPick }) => {
  if (!option) {
    option = {
      name: "",
      icon: "",
      beats: "",
    };
  }
  const handleClick = () => {
    setPlayersPick(option);

    if (step === 1) {
      setStep(step + 1);
    }
  };
  return (
    <div
      onClick={handleClick}
      className={`${"option-container"} ${option.name} ${
        !option.name ? "empty" : ""
      }`}
      title={option.name}
    >
      <div className={`${!option.name ? "empty" : ""} ${"option-wrapper"}`}>
        <img src={option.icon} alt={option.name} />
      </div>
    </div>
  );
};

export default OptionComponent;
