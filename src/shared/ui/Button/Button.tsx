import { FC } from 'react';
import type { IButtonProps } from './types';
import styles from './Button.module.scss';

export const Button: FC<IButtonProps> = ({
  children,
  ...props
}) => {
  return (
    <button
      className={styles.button}
      {...props}>
      {children}
    </button>
  );
};