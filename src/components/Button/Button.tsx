import React from "react";

interface ButtonsProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  text: string;
  className: string;
}

function Button({text, className, ...rest }: ButtonsProps) {
  return (
    <button className={className} {...rest}>
      {text}
    </button>
  );
}

export default Button;
