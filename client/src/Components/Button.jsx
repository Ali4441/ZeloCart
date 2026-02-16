import React from 'react'

const Button = ({ width, title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${width}  hover:bg-red-500 text-white p-3 rounded-md font-semibold transition cursor-pointer`} >
      {title}
    </button>
  )
}

export default Button
