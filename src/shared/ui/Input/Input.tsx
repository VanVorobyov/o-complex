import { FC } from 'react';

import { PatternFormat } from 'react-number-format';
import { IInputProps } from '@/shared/ui/Input/types';
import styles from './Input.module.scss';


export const Input: FC<IInputProps> = ({
  name,
  ...props
}) => {
  return (
    <PatternFormat value={''} name={name} className={styles.input} format='+7 (###) ### ##-##' allowEmptyFormatting mask='_' />
  );
};