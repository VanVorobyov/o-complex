import { FC, useState } from 'react';
import styles from './Card.module.scss';
import Image from 'next/image';
import { Button } from '@/shared/ui/Button/Button';
import { ICard } from '@/entities/Card/types';


export const Card: FC<ICard> = ({
  id,
  image_url = '',
  title = '',
  description = 'description, description',
  price = 0
}) => {
  
  const [counter, setCounter] = useState(1);
  
  return (
    <>
      <div className={styles.card}>
        <Image width={281} height={366} priority={true}
               className={styles.image} src={image_url} alt={''} />
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>{price * counter}</p>
        <Button>
          <span>Купить</span>
        </Button>
      </div>
    </>
  );
};

