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

  const removeItem = (itemName: string): void => {
    setOrder((prevOrder) => prevOrder.filter((item) => item.name !== itemName));
  };

  const calcTotalPrice = (): number => {
    return order.reduce((total, item) => {
      const selectedItem = ITEM.find((i) => i.name === item.name);
      return total + Number(selectedItem?.price || '0') * item.quantity;
    }, 0);
  };

  return (
    <div>
      <ItemsList items={ITEM} onAdd={addItem} />
      <div>
        <h2>Подробности заказа:</h2>
        {order.length === 0 ? (
          <p className='order-text'>Здесь отображается текущий заказ. Сделайте заказ!</p>
        ) : (
          <>
            {order.map((item) => (
              <div key={item.name}>
                <span className='order-text'>{item.name} x {item.quantity}</span>
                <span className='order-text'> {(ITEM.find((i) => i.name === item.name)?.price || '0')} Сом</span>
                <button className="order-rmv-btn" onClick={() => removeItem(item.name)}>Удалить</button>
              </div>
            ))}
            <p className='total-price'>К оплате: {calcTotalPrice()} Сом</p>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
