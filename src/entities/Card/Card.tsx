import { FC, useState } from 'react';
import styles from './Card.module.scss';
import { ICardProps } from '@/entities/Card/types';
import Image from 'next/image';
import { Button } from '@/shared/ui/Button/Button';


export const Card: FC<ICardProps> = ({
  image_url = '',
  title = '',
  description = 'description, description',
  price = 0
}) => {
  
  const [counter, setCounter] = useState(1);
  
  return (
    <>
      <div className={styles.card}>
        <Image className={styles.image} src={image_url} alt={''} />
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