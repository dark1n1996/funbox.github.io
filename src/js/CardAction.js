export default class CardAction {
    constructor(variable) {
        this.variable = variable;
    }
    selectCard(event) {
        let container = event.target.closest('.cards__container');
        if(container) {
            if(container.querySelector('.item').getAttribute('name') > 0.5 && event.target.classList.contains('cards__span')) {
                container.querySelector('.item').classList.add('card_selected');
                container.querySelector('.item').classList.remove('card');
                container.querySelector('.circle').classList.add('circle_red');
                container.querySelector('.cards__buy').classList.add('cards__buy_unactive');
                container.querySelector('.cards__description').classList.remove('cards__description_unactive');
            }
            if(container.querySelector('.item').getAttribute('name') < 0.5 && event.target.classList.contains('cards__span')) {
                container.querySelector('.item').classList.add('card_failed');
                container.querySelector('.item').classList.remove('card');
                container.querySelector('.circle').classList.add('circle_green');
                container.querySelector('.cards__fail').classList.remove('cards__fail_unactive');
                container.querySelector('.cards__buy').classList.add('cards__buy_unactive');
                container.querySelector('.cards__layer').setAttribute('style', 'opacity: 0.4; cursor: auto;');
            }
        } 
    }
    switchCard(event) {
        let container = event.target.closest('.cards__container');
        if(container) {
            if((container.querySelector('.item') && this.variable === 'Unselected' && container.querySelector('.item').getAttribute('name') > 0.5) || (container.querySelector('.card') && container.querySelector('.item').getAttribute('name') > 0.5)) {
                container.querySelector('.item').classList.toggle('card_selected');
                container.querySelector('.item').classList.toggle('card');
                container.querySelector('.item').querySelector('.circle').classList.toggle('circle_red');
                container.querySelector('.cards__buy').classList.toggle('cards__buy_unactive');
                container.querySelector('.cards__description').classList.toggle('cards__description_unactive');
                this.variable = 'Selected';
            } 
            if(container.querySelector('.card_selected')) {
                container.querySelector('.cards__layer').setAttribute('style', 'cursor: auto;');
            }
            if(container.querySelector('.item').getAttribute('name') < 0.5) {
                container.querySelector('.item').classList.add('card_failed');
                container.querySelector('.item').classList.remove('card');
                container.querySelector('.circle').classList.add('circle_green');
                container.querySelector('.cards__fail').classList.remove('cards__fail_unactive');
                container.querySelector('.cards__buy').classList.add('cards__buy_unactive');
                container.querySelector('.cards__layer').setAttribute('style', 'opacity: 0.4; cursor: auto;');
            }
        }
    }
    pointer(event) {
        let container = event.target.closest('.cards__container');
        if(container && container.querySelector('.card_selected')) {
            container.querySelector('.cards__layer').setAttribute('style', 'cursor: pointer;');
            this.variable = 'Unselected';
        } 
    }

}