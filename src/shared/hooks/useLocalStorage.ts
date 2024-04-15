const useLocalStorage = (key: string, initialValue: any[]) => {
  
  
  const addItem = (item: any) => {
    localStorage.setItem(key, JSON.stringify(item));
  };
  
  const updateItem = ({ ...item }: { id: number, title: string, quantity?: number, total?: number }) => {
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
  
  const getItem = () => {
    const items = JSON.parse(localStorage.getItem(key) || '[]');
    return items;
  };
  
  
  return { addItem, updateItem, removeItem, getItem };
};

export default useLocalStorage;
