class Card {
    constructor(item, template, openPopup) {
        this._card = template.cloneNode(true).children[0];

        this._name = item.name;
        this._link = item.link;

        this._openPopup = openPopup;
    }

    _handleRemoveCard = () => {
        this._card.remove();
    }

    _handleLikeCard() {
        this.classList.toggle('button_type_like_is-active');
    }

    _handleFullScreen = () => {
        this._fullScreenImg = document.querySelector('.popup__cover');
        this._fullScreenImgCaption = document.querySelector('.popup__cover-caption');

        this._fullScreenImg.src = this._linkCardPlace.src;
        this._fullScreenImg.setAttribute('alt', this._titleCardPlace.textContent);
        this._fullScreenImgCaption.textContent = this._titleCardPlace.textContent;

        openPopup(popupFullScreenImg);
    }

    _setEventListeners = () => {
        this._buttonLikeCard = this._card.querySelector('.button_type_like');
        this._buttonRemoveCard = this._card.querySelector('.button_type_remove');
        this._buttonFullScreen = this._card.querySelector('.photo__button');

        this._buttonRemoveCard.addEventListener('click', this._handleRemoveCard);
        this._buttonLikeCard.addEventListener('click', this._handleLikeCard);
        this._buttonFullScreen.addEventListener('click', this._handleFullScreen);
    }

    _createCard() {
        this._titleCardPlace = this._card.querySelector('.photo__title');
        this._linkCardPlace = this._card.querySelector('.photo__cover');

        this._titleCardPlace.textContent = this._name;
        this._linkCardPlace.setAttribute('src', this._link);
        this._linkCardPlace.setAttribute('alt', this._name);

        this._setEventListeners();

        return this._card;
    }

    renderCard() {
        this._container = document.querySelector('.photo-cards');
        this._container.prepend(this._createCard());
    }
}

