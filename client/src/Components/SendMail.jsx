import React from 'react'
import { IoSendOutline, IoSend } from "react-icons/io5";

const SendMail = () => {
  return (
    <div className="flex w-fit max-w-[240px] h-12 items-center bg-zinc-900 border-2 border-zinc-100 rounded-md overflow-hidden">

      {/* Input */}
      <input
        type="text"
        placeholder="Enter your Email"
        className="flex-1 px-3 text-zinc-300 placeholder-zinc-400  outline-none truncate h-full"
      />

      {/* Send icon */}
      <div className="flex items-center justify-center pr-3  cursor-pointer group transition-all duration-200 ">
        <IoSendOutline className="w-6 h-6 text-white group-hover:hidden transition-all duration-200" />
        <IoSend className="w-6 h-6 text-white hidden group-hover:block transition-all duration-200" />
      </div>

    </div>

  )
}

export default SendMail
