import { FC, PropsWithChildren } from 'react';

import "./Button.scss";

interface IButtonProps {
  onClick?: () => void;
  classes?: string[];
  disabled?: boolean;
}

const Button: FC<PropsWithChildren<IButtonProps>> = ({onClick, classes, disabled, children}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classes ? [...classes, "default-btn"].join(' ') : "default-btn"}>
      {children}
    </button>
  );
};

export default Button;