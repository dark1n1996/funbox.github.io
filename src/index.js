import './styles.css';
import './images/Cat.png';
import Card from './js/Card';
import CardAction from './js/CardAction';
import { DATA, VARIABLE, CARDS } from './js/constants';

const cardObj = new Card(CARDS);

const cardActionObj = new CardAction(VARIABLE);

cardObj.renderCards(DATA);

document.addEventListener('mouseout', cardActionObj.point);

document.addEventListener('mouseover', cardActionObj.point);

document.addEventListener('mouseover', cardActionObj.pointOnSelectedCard);

document.addEventListener('mouseout', cardActionObj.pointNotOnSelectedCard);

document.addEventListener('click', cardActionObj.switchCard);

document.addEventListener('click', cardActionObj.selectCard); 

