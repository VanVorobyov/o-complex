import { FC } from 'react';
import styles from './Counter.module.scss';
import { ICounter } from '@/shared/ui/Counter/types';

export const Counter: FC<ICounter> = ({
  count,
  increase,
  decrease,
  handleInputChange
}) => {
  
  return (
    <div className={styles.counter}>
      <button className={styles.button} onClick={decrease}>-</button>
      <input
        className={styles.input}
        value={count}
        onChange={handleInputChange}
      />
      <button className={styles.button} onClick={increase}>+</button>
    </div>
  );
};
