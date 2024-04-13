import { FC } from 'react';
import styles from './CardList.module.scss';
import { ICard } from '@/entities/Card/types';
import { ICardListProps } from '@/widgets/CardList/types';
import { CardFeature } from '@/features/CardFeature/CardFeature';


export const CardList: FC<ICardListProps> = ({ cards }) => {
  return (
    <>
      <ul className={styles.cardlist}>
        {cards.map((card: ICard) => (
          <CardFeature
            key={card.id}
            image_url={card.image_url}
            title={card.title}
            id={card.id}
            description={card.description}
            price={card.price} />
        ))}
      </ul>
    </>
  );
};