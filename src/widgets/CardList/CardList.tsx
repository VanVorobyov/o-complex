import { FC, useState, useEffect } from 'react';
import styles from './CardList.module.scss';
import { ICard } from '@/entities/Card/types';
import { ICardListProps } from '@/widgets/CardList/types';
import { CardFeature } from '@/features/CardFeature/CardFeature';
import { fetchCardData } from '@/shared/api/api';

export const CardList: FC<ICardListProps> = () => {
  const [cards, setCards] = useState<ICard[]>([]);
  const [currentPage, setCurrentPAge] = useState<number>(1);
  const [fetching, setFetching] = useState<boolean>(true);
  const [totalCount, setTotalCount] = useState<number>(0);
  
  useEffect(() => {
    if (fetching) {
      fetchCardData(currentPage, 20).then(response => {
        if (currentPage > 1) {
          setCards((prevCards) => [...prevCards, ...response.products]);
        } else {
          setCards(response.products);
        }
        setCurrentPAge(currentPage + 1);
        setTotalCount(Number(response.total)); // можно использовать response.headers.['x-total-count'] если задано
        
      })
        .finally(() => setFetching(false));
      
    }
  }, [fetching, currentPage]);
  
  
  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    
    return function() {
      document.removeEventListener('scroll', scrollHandler);
    };
  });
  
  const scrollHandler = (e: any) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 4200) {
      if (cards.length < totalCount) {
        console.log(`массивы --> `, Boolean(cards.length < totalCount));
        setFetching(true);
      }
    }
  };
  
  console.log(`fetching `, fetching);
  console.log(`cards.length `, cards.length);
  console.log(`totalCount `, totalCount);
  console.log(`fetching `, fetching);
  
  
  return (
    <ul className={styles.cardlist}>
      {cards.map((card, index) => (
        <CardFeature
          key={`${card.id}-${index}`}
          image_url={card.image_url}
          title={card.title}
          id={card.id}
          description={card.description}
          price={card.price}
        />
      ))}
      {fetching && <div>Loading...</div>}
    </ul>
  );
};
