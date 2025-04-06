import React from "react"

interface OverviewProps {
  children : React.ReactNode;
}

const Overview = ({children}:OverviewProps) => {
  return (
    <div className=''>
        <h1 className="text-[28px] hidden lg:block font-extrabold">Overview</h1>
        {children}
    </div>
  )
}

export default Overview