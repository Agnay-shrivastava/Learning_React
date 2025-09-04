import React from "react";

const colorClasses = {
  blue: "bg-blue-400 hover:bg-blue-700",
  red: "bg-red-400 hover:bg-red-700",
  green: "bg-green-400 hover:bg-green-700",
};

const sizeClasses = {
  sm: "py-2 px-4",
  md: "py-3 px-6",
  lg: "py-4 px-8",
};

const ReusableButton = (props) => {
  const { color, size, children } = props;
  console.log("props", props);

  return (
    <div className="bg-black flex justify-center items-center p-2">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Reusable Button</h1>
        <button
          className={` text-white font-bold ${colorClasses[color]} ${sizeClasses[size]} rounded mt-4`}
        >
          {children}
        </button>
      </div>
    </div>
  );
};

export default ReusableButton;
