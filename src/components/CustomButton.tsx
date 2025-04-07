import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>  {
  children?: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> =  ({ children, className = "", ...props }) => {
  return (
    <button
      className={`lg:h-[50px] lg:min-w-[120px] inline-flex items-center 
        justify-center flex-nowrap text-center text-[12px] lg:text-base  
        font-semibold  border-l border-[#1D1D1D] cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
