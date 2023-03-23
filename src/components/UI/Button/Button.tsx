import { FC, PropsWithChildren } from 'react';

import "./Button.scss";

interface IButtonProps {
  onClick?: () => void;
  clazz?: string;
  disabled?: boolean;
}

const Button: FC<PropsWithChildren<IButtonProps>> = ({onClick, clazz, disabled, children}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clazz ? `${clazz} default-btn` : "default-btn"}>
      {children}
    </button>
  );
};

export default Button;