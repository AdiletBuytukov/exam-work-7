import React, { useState } from 'react';
import ItemsList from './Components/ItemList.tsx';
import ITEM from '../src/Components/Item.tsx'

const App: React.FC = () => {
  const [order, setOrder] = useState<{ name: string; quantity: number }[]>([]);

  const addItem = (itemName: string): void => {
    const existingItemIndex = order.findIndex((item) => item.name === itemName);

    if (existingItemIndex !== -1) {
      setOrder((prevOrder) => {
        const newOrder = [...prevOrder];
        newOrder[existingItemIndex].quantity += 1;
        return newOrder;
      });
    } else {
      setOrder((prevOrder) => [...prevOrder, { name: itemName, quantity: 1 }]);
    }
  };

  return (
    <div>
      <ItemsList items={ITEM} onAdd={addItem} />
    </div>
  );
};

export default App;
