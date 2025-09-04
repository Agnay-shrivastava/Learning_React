import React from 'react'

const colorClasses = {
  success: "bg-green-400 hover:bg-green-700",
  error: "bg-red-400 hover:bg-red-700",
  warning: "bg-yellow-400 hover:bg-yellow-700",
};

const AlertComp = ({type , message}) => {
  return (
    <div>
      <h1 className='text-4xl font-bold text-white text-center bg-gray-800 p-5'>Alert Component</h1>
      <div className={`${colorClasses[type]} flex flex-col items-center justify-center`}>
        <p>{type}</p>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default AlertComp