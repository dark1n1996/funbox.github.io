export default class Card {
    constructor(cards){
        this.cards = cards;
    }
    _renderCard(data) {
        if(!data.satisfied) {
            data.satisfied = '';
        }
        const card = ` <div class="cards__container">
        <div class="card item" name="${data.quantity}">
            <h3 class="card__name">Сказочное заморское яство</h3>
            <h2 class="card__feed">Нямушка</h2>
            <h4 class="card__filling">${data.filling}</h4>
            <ul class="list">
                <li class="list__item">${data.amount}</li>
                <li class="list__item">${data.present}</li>
                <li class="list__item">${data.satisfied}</li>
            </ul>
            <img class="card__image" alt="Тут должен быть котик" src="./images/Cat.png">
            <div class="circle circle_blue">
                <p class="circle__weight">${data.weight}</p>
                <p class="circle__kg">кг</p>
            </div>
        </div>
        <div class="cards__layer"></div>
        <p class="cards__buy">Чего сидишь? Порадуй котэ, <span class="cards__span">купи.</span></p>
        <p class="cards__description cards__description_unactive">${data.food}</p>
        <p class="cards__fail cards__fail_unactive">Печалька, ${data.filling} закончился</p>
    </div>`;
        return card;
    }
    renderCards(data) {
        for(let card of data) {
            this.cards.insertAdjacentHTML('beforeend', this._renderCard(card));
        }
    }
}