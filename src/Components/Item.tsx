import hamburgerImage from '../assets/hamburher.png';
import shaurmaImage from '../assets/shaurma.png';
import friImage from '../assets/fri.png';
import teaImage from '../assets/tea.png';
import coffeeImage from '../assets/coffee.png';
import colaImage from '../assets/cola.png';

interface Item {
  name: string;
  price: string;
  image: string;
}

const ITEM: Item[] = [
  {name: 'Hamburger', price: '80', image: hamburgerImage},
  {name: 'Shaurma', price: '100', image: shaurmaImage},
  {name: 'Fri', price: '45', image: friImage},
  {name: 'Tea', price: '50', image: teaImage},
  {name: 'Coffee', price: '70', image: coffeeImage},
  {name: 'Cola', price: '40', image: colaImage},
];

export default ITEM;