import * as React from 'react';

const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = props => (
  <button {...props} className="button">
    {props.children}
  </button>
);

export default Button;
