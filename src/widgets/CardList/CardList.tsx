import { FC } from 'react';
import styles from './CardList.module.scss';
import { Card } from '@/entities/Card/Card';
import { ICard } from '@/entities/Card/types';
import { ICardListProps } from '@/widgets/CardList/types';


export const CardList: FC<ICardListProps> = ({ cards }) => {
  return (
    <>
      <ul className={styles.cardlist}>
        {cards.map((card: ICard) => (
          <Card
            key={card.id}
            image_url={card.image_url}
            title={card.title}
            id={card.id}
            description={card.description}
            price={card.price}
          />
        ))}
      </ul>
    </>
  );
};