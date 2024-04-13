import { FC } from 'react';
import styles from './Card.module.scss';
import Image from 'next/image';
import { Button } from '@/shared/ui/Button/Button';
import { ICard, InBasket } from '@/entities/Card/types';
import { Counter } from '@/shared/ui/Counter/Counter';
import { ICounter } from '@/shared/ui/Counter/types';


export const Card: FC<ICard & ICounter & InBasket> = ({
  id,
  image_url = '',
  title = '',
  description = 'description, description',
  price = 0,
  count = 1,
  increase,
  decrease,
  handleInputChange,
  isInBasket,
  handleToBasket
}) => {
  
  return (
    <>
      <div className={styles.card}>
        <Image width={281} height={366} priority={true}
               className={styles.image} src={image_url} alt={''} />
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>{price * count}</p>
        
        {isInBasket ? (
          <Counter
            count={count}
            increase={increase}
            decrease={decrease}
            handleInputChange={handleInputChange}
          ></Counter>
        ) : (
          <Button onClick={handleToBasket}>
            <span>Купить</span>
          </Button>
        )}
      </div>
    </>
  );
};

