import { FC } from 'react';
import styles from './Cart.module.scss';
import { ICartProps } from '@/entities/Cart/types';
import { Button } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';


export const Cart: FC<ICartProps> = ({ items, total }) => {
  return (
    <div className={styles.cart}>
      <h2 className={styles.title}>Добавленные товары</h2>
      <ul className={styles.cartItems}>
        {items.map((item) => (
          <li key={item.id} className={styles.cartItem}>
            <span className={styles.itemText}>{item.title}</span>
            <span className={styles.itemText}>{item.quantity} ед.</span>
            <span className={styles.itemText}>{item.totalPrice}₽</span>
          </li>
        ))}
      </ul>
      <span className={styles.total}>{total}</span>
      <div className={styles.button}>
        <Input name={'phone'} />
        <Button>
          <span>Заказать</span>
        </Button>
      </div>
    </div>
  );
};