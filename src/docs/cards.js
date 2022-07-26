import card1 from '../img/card1.jpg';
import card2 from '../img/card2.jpg';
import card3 from '../img/card3.jpg';
import card4 from '../img/card4.jpg';
import card5 from '../img/card5.jpg';
import card6 from '../img/card6.jpg';

const cards = [
  {
    name: 'Card 1',
    text: 'Este é um card, que pode representar um produto',
    pic: card1,
    button: 'primary',
  },
  {
    name: 'Card 2',
    text: 'Mas também pode representar um serviço, ou uma lista de serviços',
    pic: card2,
    button: 'secondary',
  },
  {
    name: 'Card 3',
    text: 'Este espaço pode ser usado para descrever as características do que deseja ser apresentado',
    pic: card3,
    button: 'success',
  },
  {
    name: 'Card 4',
    text: 'A foto serve para dar destaque ao que está sendo escrito aqui, mas é opicional',
    pic: card4,
    button: 'warning',
  },
  {
    name: 'Card 5',
    text: 'A quantidade de cards é de livre escolha.',
    pic: card5,
    button: 'danger',
  },
  {
    name: 'Card 6',
    text: 'Os cards são responsíveis, e se comportam bem em qualquer tela',
    pic: card6,
    button: 'info',
  },
]

export default cards;
