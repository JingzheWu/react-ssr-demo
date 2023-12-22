import React from 'react';
import classNames from 'classnames';
import styles from './index.module.css';

export interface IButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<IButtonProps> = ({
  text,
  className,
  onClick,
}) => {
  return (
    <button onClick={onClick} className={classNames(styles.btn, className)}>
      {text}
    </button>
  );
};
