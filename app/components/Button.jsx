import React from "react";

const Button = () => {
  const getNewBill = async () => {
    const response = await fetch("api/bill");
    const bill = await response.json();
    const billsArray = bill.textVersions[0].formats[0].url;
  };

  return (
    <div>
      <button
        className="btn"
        onClick={() => {
          console.log("clicked!");
        }}
      >
        Hero
      </button>
    </div>
  );
};

export default Button;
