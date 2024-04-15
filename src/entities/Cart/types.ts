export interface ICartItem {
  id: number;
  title: string;
  price: number;
  totalPrice: number;
  quantity: number;
}

export interface ICartProps {
  items: ICartItem[];
  total: number;
}