export interface ICard {
  id: number;
  image_url: string;
  title: string;
  description: string;
  price: number;
  
}

export type updateItem = {
  updateItem: ({ ...item }: { id: number, title: string, quantity?: number, price?: number, totalPrice?: number }) => void;
  addItem: ({ ...item }: { id: number, title: string, quantity?: number, price?: number, totalPrice?: number }) => void;
  removeItem: (id: number) => void;
}