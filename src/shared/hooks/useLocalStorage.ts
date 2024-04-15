const useLocalStorage = (key: string, initialValue: any[]) => {
  
  
  const addItem = (item: any) => {
    localStorage.setItem(key, JSON.stringify(item));
  };
  
  const updateItem = ({ ...item }: { id: number, title: string, count?: number, quantity?: number }) => {
    const items = JSON.parse(localStorage.getItem(key) || '[]');
    const itemIndex = items.findIndex((i: any) => i.id === item.id);
    if (itemIndex !== -1) {
      items[itemIndex] = item;
    } else {
      items.push(item);
    }
    localStorage.setItem(key, JSON.stringify(items));
  };
  
  const removeItem = (id: number) => {
    const items = JSON.parse(localStorage.getItem(key) || '[]');
    const filteredItems = items.filter((item: any) => item.id !== id);
    localStorage.setItem(key, JSON.stringify(filteredItems));
  };
  
  return { addItem, updateItem, removeItem };
};

export default useLocalStorage;
