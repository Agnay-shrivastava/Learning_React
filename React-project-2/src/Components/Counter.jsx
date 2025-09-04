import React, { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);
  const [like, setLike] = useState(false);
  return (
    <div className="text-center text-white">
      <h1>Counter</h1>
      <p>current value: {value} </p>
      <button
        className="bg-blue-600 p-2 rounded-lg mr-2 mt-2"
        onClick={() => setValue(value + 1)}
      >
        Increment{" "}
      </button>
      <button
        className="bg-green-600 p-2 rounded-lg mr-2 mt-2"
        onClick={() => setValue(value - 1)}
      >
        Decrement{" "}
      </button>
      {value === 0 ? null : (
        <button
          className="bg-yellow-600 p-2 rounded-lg mr-2 mt-2"
          onClick={() => setValue(0)}
        >
          Reset
        </button>
      )}


      <div>
        <h1>toggle like dislike</h1>
        <button onClick={()=>setLike(!like)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={`${like ? "red" : "none"}`}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Counter;
