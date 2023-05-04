class Card {
    constructor(item, templateSelector, handleOpenPopup) {
        this._name = item.name;
        this._link = item.link;

        this._handleOpenPopup = handleOpenPopup;
        this._template = templateSelector;
    }

    _getTemplate = () => {
        this._card = this._template.querySelector('.photo').cloneNode(true);

        this._titleCardPlace = this._card.querySelector('.photo__title');
        this._linkCardPlace = this._card.querySelector('.photo__cover');

        this._buttonLikeCard = this._card.querySelector('.button_type_like');
        this._buttonRemoveCard = this._card.querySelector('.button_type_remove');
        this._buttonFullScreen = this._card.querySelector('.photo__button');
    }

    _handleRemoveCard = () => {
        this._card.remove();
    }

    _handleLikeCard = () => {
        this._buttonLikeCard.classList.toggle('button_type_like_is-active');
    }

    _handleFullScreen = () => {
        this._handleOpenPopup(this._titleCardPlace.textContent, this._linkCardPlace.src);
    }

    _setEventListeners = () => {
        this._buttonRemoveCard.addEventListener('click', this._handleRemoveCard);
        this._buttonLikeCard.addEventListener('click', this._handleLikeCard);
        this._buttonFullScreen.addEventListener('click', this._handleFullScreen);
    }

    createCard() {
        this._getTemplate();

        this._titleCardPlace.textContent = this._name;
        this._linkCardPlace.setAttribute('src', this._link);
        this._linkCardPlace.setAttribute('alt', this._name);

        this._setEventListeners();

        return this._card;
    }
}

export default Card;

