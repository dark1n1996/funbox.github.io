const DATA = [
    {
        id: '1',
        filling: 'с фуа-гра',
        amount: '10 порций',
        present: 'мышь в подарок',
        weight: '0,5',
        food: 'Печень утки разварная с артишоками.',
        quantity: Math.random(),
        fairyOverseasFood: 'Сказочное заморское яство',
        catNotAgree: 'Котэ не одобряет?',
    },
    {
        id: '2',
        filling: 'с рыбой',
        amount: '40 порций',
        present: '2 мыши в подарок',
        weight: '2',
        food: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
        quantity: Math.random(),
        fairyOverseasFood: 'Сказочное заморское яство',
        catNotAgree: 'Котэ не одобряет?',
    },
    {
        id: '3',
        filling: 'с курой',
        amount: '100 порций',
        present: '5 мышей в подарок',
        satisfied: 'заказчик доволен',
        weight: '5',
        food: 'Филе из цыплят с трюфелями в бульоне.',
        quantity: Math.random(),
        fairyOverseasFood: 'Сказочное заморское яство',
        catNotAgree: 'Котэ не одобряет?',
    }
]

const VARIABLE = 'Unselected';

const CARDS = document.querySelector('.cards');

export {
    DATA, VARIABLE, CARDS
}