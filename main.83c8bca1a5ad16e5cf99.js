!function(e){var t={};function r(s){if(t[s])return t[s].exports;var c=t[s]={i:s,l:!1,exports:{}};return e[s].call(c.exports,c,c.exports,r),c.l=!0,c.exports}r.m=e,r.c=t,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)r.d(s,c,function(t){return e[t]}.bind(null,c));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t,r){},function(e,t,r){"use strict";r.r(t);r(0),r.p;const s=[{id:"1",filling:"с фуа-гра",amount:"10 порций",present:"мышь в подарок",weight:"0,5",food:"Печень утки разварная с артишоками.",quantity:Math.random(),fairyOverseasFood:"Сказочное заморское яство",catNotAgree:"Котэ не одобряет?"},{id:"2",filling:"с рыбой",amount:"40 порций",present:"2 мыши в подарок",weight:"2",food:"Головы щучьи с чесноком да свежайшая сёмгушка.",quantity:Math.random(),fairyOverseasFood:"Сказочное заморское яство",catNotAgree:"Котэ не одобряет?"},{id:"3",filling:"с курой",amount:"100 порций",present:"5 мышей в подарок",satisfied:"заказчик доволен",weight:"5",food:"Филе из цыплят с трюфелями в бульоне.",quantity:Math.random(),fairyOverseasFood:"Сказочное заморское яство",catNotAgree:"Котэ не одобряет?"}],c=document.querySelector(".cards"),a=new class{constructor(e){this.cards=e}_renderCard(e){e.satisfied||(e.satisfied="");return` <div class="cards__container">\n        <div class="card item" name="${e.quantity}">\n            <h3 class="card__name card__name_selected">${e.fairyOverseasFood}</h3>\n            <h3 class="card__name card__name_hover">${e.catNotAgree}</h3>\n            <h2 class="card__feed">Нямушка</h2>\n            <h4 class="card__filling">${e.filling}</h4>\n            <ul class="list">\n                <li class="list__item">${e.amount}</li>\n                <li class="list__item">${e.present}</li>\n                <li class="list__item">${e.satisfied}</li>\n            </ul>\n            <img class="card__image" alt="Тут должен быть котик" src="./images/Cat.png">\n            <div class="circle circle_blue">\n                <p class="circle__weight">${e.weight}</p>\n                <p class="circle__kg">кг</p>\n            </div>\n        </div>\n        <div class="cards__layer"></div>\n        <p class="cards__buy">Чего сидишь? Порадуй котэ, <span class="cards__span">купи.</span></p>\n        <p class="cards__description cards__description_unactive">${e.food}</p>\n        <p class="cards__fail cards__fail_unactive">Печалька, ${e.filling} закончился</p>\n    </div>`}renderCards(e){for(let t of e)this.cards.insertAdjacentHTML("beforeend",this._renderCard(t))}}(c),i=new class{constructor(e){this.variable=e}selectCard(e){let t=e.target.closest(".cards__container");t&&(t.querySelector(".item").getAttribute("name")>.5&&e.target.classList.contains("cards__span")&&(t.querySelector(".item").classList.add("card_selected"),t.querySelector(".item").classList.remove("card"),t.querySelector(".circle").classList.add("circle_red"),t.querySelector(".cards__buy").classList.add("cards__buy_unactive"),t.querySelector(".cards__description").classList.remove("cards__description_unactive")),t.querySelector(".item").getAttribute("name")<.5&&e.target.classList.contains("cards__span")&&(t.querySelector(".item").classList.add("card_failed"),t.querySelector(".item").classList.remove("card"),t.querySelector(".circle").classList.add("circle_green"),t.querySelector(".cards__fail").classList.remove("cards__fail_unactive"),t.querySelector(".cards__buy").classList.add("cards__buy_unactive"),t.querySelector(".cards__layer").setAttribute("style","opacity: 0.4; cursor: auto;")))}switchCard(e){let t=e.target.closest(".cards__container");t&&((t.querySelector(".item")&&"Unselected"===this.variable&&t.querySelector(".item").getAttribute("name")>.5||t.querySelector(".card")&&t.querySelector(".item").getAttribute("name")>.5)&&(t.querySelector(".item").classList.toggle("card_selected"),t.querySelector(".item").classList.toggle("card"),t.querySelector(".item").querySelector(".circle").classList.toggle("circle_red"),t.querySelector(".cards__buy").classList.toggle("cards__buy_unactive"),t.querySelector(".cards__description").classList.toggle("cards__description_unactive"),t.querySelector(".card__name_selected").setAttribute("style","display: block;"),t.querySelector(".card__name_hover").setAttribute("style","display: none;"),this.variable="Selected"),t.querySelector(".card_selected")&&t.querySelector(".cards__layer").setAttribute("style","cursor: auto;"),t.querySelector(".item").getAttribute("name")<.5&&(t.querySelector(".item").classList.add("card_failed"),t.querySelector(".item").classList.remove("card"),t.querySelector(".circle").classList.add("circle_green"),t.querySelector(".cards__fail").classList.remove("cards__fail_unactive"),t.querySelector(".cards__buy").classList.add("cards__buy_unactive"),t.querySelector(".cards__layer").setAttribute("style","opacity: 0.4; cursor: auto;")))}point(e){let t=e.target.closest(".cards__container");t&&t.querySelector(".card_selected")&&(t.querySelector(".cards__layer").setAttribute("style","cursor: pointer;"),this.variable="Unselected")}pointOnSelectedCard(e){e.target.classList.contains("cards__layer")&&e.target.closest(".cards__container").querySelector(".card_selected")&&(e.target.closest(".cards__container").querySelector(".card__name_selected").setAttribute("style","display: none;"),e.target.closest(".cards__container").querySelector(".card__name_hover").setAttribute("style","display: block;"))}pointNotOnSelectedCard(e){e.target.classList.contains("cards__layer")&&e.target.closest(".cards__container").querySelector(".card_selected")&&(e.target.closest(".cards__container").querySelector(".card__name_selected").setAttribute("style","display: block;"),e.target.closest(".cards__container").querySelector(".card__name_hover").setAttribute("style","display: none;"))}}("Unselected");a.renderCards(s),document.addEventListener("mouseout",i.point),document.addEventListener("mouseover",i.point),document.addEventListener("mouseover",i.pointOnSelectedCard),document.addEventListener("mouseout",i.pointNotOnSelectedCard),document.addEventListener("click",i.switchCard),document.addEventListener("click",i.selectCard)}]);