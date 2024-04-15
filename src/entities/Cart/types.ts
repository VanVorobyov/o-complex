export interface ICartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export interface ICartProps {
  items: ICartItem[];
  total: number;
}