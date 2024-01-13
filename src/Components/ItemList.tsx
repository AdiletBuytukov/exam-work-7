import React from 'react';

interface ItemsListProps {
  items: { name: string; price: string; image: string }[];
  onAdd: (itemName: string) => void;
}

const ItemsList: React.FC<ItemsListProps> = ({ items, onAdd }) => {
  return (
    <div>
      <h2>Добавить в заказ:</h2>
      {items.map((item) => (
        <button className='item-btn' key={item.name} onClick={() => onAdd(item.name)}>
          <img src={item.image} alt=""/>
          {item.name} {item.price} Сом
        </button>
      ))}
    </div>
  );
};

export default ItemsList;