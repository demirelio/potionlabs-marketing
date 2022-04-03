import React from "react"
export default function Layout({ children }) {
  return (
    <div className="bg-[#000] text-white grid grid-cols-1">
      {children}
    </div>
  )
}