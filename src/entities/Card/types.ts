export interface ICard {
  id: number;
  image_url: string;
  title: string;
  description: string;
  price: number;
  
}

export type updateItem = {
  updateItem: ({ ...item }: { id: number, title: string, count?: number, quantity?: number }) => void;
  addItem: ({ ...item }: { id: number, title: string, count?: number, quantity?: number }) => void;
  removeItem: (id: number) => void;
}