export interface ICard {
  id: number;
  image_url: string;
  title: string;
  description: string;
  price: number;
  
}

export type InBasket = {
  isInBasket: boolean;
  handleToBasket: () => void;
}
