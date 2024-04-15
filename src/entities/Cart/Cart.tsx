import { FC } from 'react';
import styles from './Cart.module.scss';
import { ICartProps } from '@/entities/Cart/types';

export const Cart: FC<ICartProps> = ({ items, total }) => {
  return (
    <div className={styles.cart}>
      <h2>Корзина</h2>
      <ul className={styles.cartItems}>
        {items.map((item) => (
          <li key={item.id} className={styles.cartItem}>
            <span className={styles.itemName}>{item.title}</span>
            <span className={styles.itemPrice}>Цена за 1 ед.: ${item.price}</span>
            <span className={styles.itemQuantity}>Цена за {item.quantity}ед. : {item.totalPrice}</span>
            <span className={styles.itemQuantity}>Количество: {item.quantity}</span>
          </li>
        ))}
      </ul>
      <div className={styles.cartTotal}>
        <span className={styles.totalLabel}>Общая стоимость:</span>
        <span className={styles.totalAmount}>${total}</span>
      </div>
      <button className={styles.checkoutButton}>Оформить заказ</button>
    </div>
  );
};