(()=>{"use strict";var t={inputSelector:".popup__input",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__submit_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},e={owner:"#cardTemplate",foreign:"#foreignCardTemplate"},r=".popup__close",n="#editAvatarPopup",o=document.querySelector(".profile__edit"),i=(document.querySelector(".profile__name"),document.querySelector(".profile__about"),document.querySelector(".profile__avatar")),u=document.querySelector("#profileEditPopup"),a=u.querySelector(".popup__form"),c=u.querySelector("#inputName"),s=u.querySelector("#inputJob"),l=document.querySelector(".profile__add-place"),f=document.querySelector("#newPlacePopup").querySelector(".popup__form"),p=document.querySelector(n).querySelector(".popup__form");function y(t,e){t.textContent=e}function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function h(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==d(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===d(o)?o:String(o)),n)}var o}var v=function(){function t(e,r,n,o,i,u){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.name=e.name,this.link=e.link,this._likesArray=e.likes,this._likes=e.likes.length,this._id=e._id,this._templateSelectors=r,this._handleCardClick=n,this._handleCardDeleteConfirm=o,this._ownerId=e.owner._id,this._currentUserId=i,this._handleLikeClick=u}var e,r;return e=t,(r=[{key:"_getCardTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".card").cloneNode(!0)}},{key:"create",value:function(){var t=this;return this._isLiked=this._likesArray.some((function(e){return e._id===t._currentUserId})),this._isOwner=this._ownerId===this._currentUserId,this._templateSelector=this._isOwner?this._templateSelectors.owner:this._templateSelectors.foreign,this._card=this._getCardTemplate(),this._cardImg=this._card.querySelector(".card__image"),this._cardTitle=this._card.querySelector(".card__title"),this._like=this._card.querySelector(".card__like"),this._isLiked&&this._like.classList.add("card__like_active"),this._likesCounter=this._card.querySelector(".card__likes-count"),this._likesCounter.textContent=this._likes,this._isOwner&&(this._cardDeleteBtn=this._card.querySelector(".card__delete")),this._fillCard(),this._setCardListeners(),this._card}},{key:"_fillCard",value:function(){this._cardImg.src=this.link,this._cardImg.setAttribute("alt"," ".concat(this.name,".")),this._cardTitle.textContent=this.name}},{key:"_setCardListeners",value:function(){var t=this;this._isOwner&&this._cardDeleteBtn.addEventListener("click",(function(){return t._deleteCard()})),this._like.addEventListener("click",(function(){return t._likeCard()})),this._cardImg.addEventListener("click",(function(){return t._handleCardClick(t.name,t.link)}))}},{key:"_deleteCard",value:function(){this._handleCardDeleteConfirm(this._id,this._card)}},{key:"_likeCard",value:function(){this._like.classList.toggle("card__like_active"),this._handleLikeClick(this._id,this._isLiked,this),this._isLiked=!this._isLiked}},{key:"updateLikesCount",value:function(t){this._likesCounter.textContent=t}}])&&h(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function _(t){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(t)}function b(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==_(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==_(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===_(o)?o:String(o)),n)}var o}var m=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._form=r,this._inputList=Array.from(this._form.querySelectorAll(e.inputSelector)),this._submitButton=this._form.querySelector(e.submitButtonSelector),this._validationParametres=e}var e,r;return e=t,(r=[{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"_setEventListeners",value:function(){var t=this;this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonState()}))}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._submitButton.classList.add(this._validationParametres.inactiveButtonClass),this._submitButton.setAttribute("disabled","disabled")):(this._submitButton.classList.remove(this._validationParametres.inactiveButtonClass),this._submitButton.removeAttribute("disabled"))}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"_showInputError",value:function(t,e){var r=this._form.querySelector(".".concat(t.id,"-error"));t.classList.add(this._validationParametres.inputErrorClass),r.textContent=e,r.classList.add(this._validationParametres.errorClass)}},{key:"_hideInputError",value:function(t){var e=this._form.querySelector(".".concat(t.id,"-error"));t.classList.remove(this._validationParametres.inputErrorClass),e.classList.remove(this._validationParametres.errorClass),e.textContent=""}},{key:"resetValidation",value:function(){var t=this;this._inputList.forEach((function(e){t._hideInputError(e)})),this._toggleButtonState()}}])&&b(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function g(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==S(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==S(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===S(o)?o:String(o)),n)}var o}var w=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=e,this._container=document.querySelector(r)}var e,r;return e=t,(r=[{key:"renderItems",value:function(t){var e=this;t.reverse().forEach((function(t){e._renderer(t,e._container)}))}},{key:"addItem",value:function(t){this._renderer(t,this._container)}}])&&g(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function P(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,E(n.key),n)}}function E(t){var e=function(t,e){if("object"!==k(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==k(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===k(e)?e:String(e)}var C=function(){function t(e,r){var n,o,i,u=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,i=function(t){"Escape"===t.key&&u.close()},(o=E(o="_handleEscClose"))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i,this._popup=document.querySelector(e),this._closeButton=this._popup.querySelector(r)}var e,r;return e=t,(r=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("click",(function(e){e.target!==t._popup&&e.target!==t._closeButton||t.close()}))}}])&&P(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function j(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==O(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==O(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===O(o)?o:String(o)),n)}var o}function L(){return L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=T(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},L.apply(this,arguments)}function T(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=R(t)););return t}function q(t,e){return q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},q(t,e)}function I(t,e){if(e&&("object"===O(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function R(t){return R=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},R(t)}var U=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&q(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=R(n);if(o){var r=R(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return I(this,t)});function u(t,e){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,t,e))._image=r._popup.querySelector(".popup__image"),r._caption=r._popup.querySelector(".popup__caption"),r}return e=u,(r=[{key:"open",value:function(t,e){this._image.src=e,this._image.setAttribute("alt"," ".concat(t,".")),this._caption.textContent=t,L(R(u.prototype),"open",this).call(this)}}])&&j(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(C);function D(t){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(t)}function B(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==D(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==D(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===D(o)?o:String(o)),n)}var o}function x(){return x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=A(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},x.apply(this,arguments)}function A(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=H(t)););return t}function V(t,e){return V=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},V(t,e)}function N(t,e){if(e&&("object"===D(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function H(t){return H=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},H(t)}var J=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&V(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=H(n);if(o){var r=H(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return N(this,t)});function u(t,e,r){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t,e))._form=n._popup.querySelector(".popup__form"),n._inputList=Array.from(n._form.querySelectorAll(".popup__input")),n._formSubmitHandler=r,n}return e=u,(r=[{key:"_getInputValues",value:function(){var t={};return this._inputList.forEach((function(e){return t[e.name]=e.value})),t}},{key:"close",value:function(){this._form.reset(),x(H(u.prototype),"close",this).call(this)}},{key:"setEventListeners",value:function(){var t=this;x(H(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._formSubmitHandler(t._getInputValues(),t._form.querySelector(".popup__submit"))}))}}])&&B(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(C);function G(t){return G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},G(t)}function z(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==G(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==G(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===G(o)?o:String(o)),n)}var o}var M=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._user=document.querySelector(e),this._info=document.querySelector(r)}var e,r;return e=t,(r=[{key:"getUserInfo",value:function(){return{name:this._user.textContent,about:this._info.textContent}}},{key:"setUserInfo",value:function(t){var e=t.name,r=t.about;e&&(this._user.textContent=e),r&&(this._info.textContent=r)}}])&&z(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function F(t){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},F(t)}function K(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==F(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==F(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===F(o)?o:String(o)),n)}var o}var Q=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=e.baseUrl,this._headers=e.headers}var e,r;return e=t,(r=[{key:"_checkResponseStatus",value:function(t,e){return t.ok?t.json():Promise.reject("Ошибка в ".concat(e,": ").concat(t.status))}},{key:"getInitialCards",value:function(){var t=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",headers:this._headers}).then((function(e){return t._checkResponseStatus(e,"getInitialCards")}))}},{key:"getUserData",value:function(){var t=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:this._headers}).then((function(e){return t._checkResponseStatus(e,"getUserData")}))}},{key:"editUserData",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify(t)}).then((function(t){return e._checkResponseStatus(t,"editUserData")}))}},{key:"addNewCard",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(t)}).then((function(t){return e._checkResponseStatus(t,"addNewCard")}))}},{key:"deleteCard",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"/cards/").concat(t),{method:"DELETE",headers:this._headers}).then((function(t){return e._checkResponseStatus(t,"deleteCard")}))}},{key:"addLike",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this._headers}).then((function(t){return e._checkResponseStatus(t,"addLike")}))}},{key:"removeLike",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headers}).then((function(t){return e._checkResponseStatus(t,"removeLike")}))}},{key:"editUserAvatar",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t})}).then((function(t){return e._checkResponseStatus(t,"editUserAvatar")}))}}])&&K(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function W(t){return W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},W(t)}function X(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==W(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==W(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===W(o)?o:String(o)),n)}var o}function Y(){return Y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=Z(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},Y.apply(this,arguments)}function Z(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=et(t)););return t}function $(t,e){return $=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},$(t,e)}function tt(t,e){if(e&&("object"===W(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function et(t){return et=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},et(t)}var rt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&$(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=et(n);if(o){var r=et(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return tt(this,t)});function u(t,e,r){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t,e))._form=n._popup.querySelector(".popup__form"),n._formSubmitHandler=r,n}return e=u,(r=[{key:"open",value:function(t,e){Y(et(u.prototype),"open",this).call(this),this._cardId=t,this._cardToDelete=e}},{key:"setEventListeners",value:function(){var t=this;Y(et(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._formSubmitHandler(t._cardId,t._cardToDelete,t._form.querySelector(".popup__submit"))}))}}])&&X(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(C),nt=new Q({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-60",headers:{authorization:"14bcc1cd-5619-4964-8098-6c46ced3ee82","Content-Type":"application/json"}}),ot=new M(".profile__name",".profile__about");function it(t,e){pt.open(t,e)}function ut(t,e,r){e?nt.removeLike(t).then((function(t){r.updateLikesCount(t.likes.length)})).catch((function(t){return console.log("Remove Card Like Error: ",t)})):nt.addLike(t).then((function(t){r.updateLikesCount(t.likes.length)})).catch((function(t){return console.log("Add Card Like Error: ",t)}))}var at=function(t,r,n,o){return new v(t,e,r,n,o,ut).create()};function ct(t,e){yt.open(t,e)}var st=new J("#profileEditPopup",r,(function(t,e){var r=this,n=e.textContent;y(e,"Сохранение..."),nt.editUserData(t).then((function(t){ot.setUserInfo(t),r.close()})).catch((function(t){return console.log("Change User Data Error: ",t)})).finally((function(){return y(e,n)}))})),lt=new J("#newPlacePopup",r,(function(t,e){var r=this,n=e.textContent;y(e,"Сохранение..."),nt.addNewCard(t).then((function(t){_t.addItem(at(t,ct,it,ot.id)),r.close()})).catch((function(t){return console.log("Add New Card Error: ",t)})).finally((function(){return y(e,n)}))})),ft=new J(n,r,(function(t,e){var r=this,n=t.avatar,o=e.textContent;y(e,"Сохранение..."),nt.editUserAvatar(n).then((function(t){i.src=t.avatar,r.close()})).catch((function(t){return console.log("Edit User Avatar Error: ",t)})).finally((function(){return y(e,o)}))})),pt=new rt("#deleteOwnCardPopup",r,(function(t,e,r){var n=this,o=r.textContent;y(r,"Сохранение..."),nt.deleteCard(t).then((function(){e.remove(),n.close()})).catch((function(t){return console.log("Card Delete Error: ",t)})).finally((function(){return y(r,o)}))})),yt=new U("#viewImagePopup",r);st.setEventListeners(),lt.setEventListeners(),yt.setEventListeners(),ft.setEventListeners(),pt.setEventListeners();var dt=new m(t,a),ht=new m(t,f),vt=new m(t,p);dt.enableValidation(),ht.enableValidation(),vt.enableValidation(),document.querySelector(".profile__avatar-button").addEventListener("click",(function(){vt.resetValidation(),ft.open()})),o.addEventListener("click",(function(){var t=ot.getUserInfo(),e=t.name,r=t.about;c.value=e,s.value=r,dt.resetValidation(),st.open()})),l.addEventListener("click",(function(){ht.resetValidation(),lt.open()}));var _t=new w((function(t,e){e.prepend(t)}),".elements__cards");Promise.all([nt.getUserData(),nt.getInitialCards()]).then((function(t){var e=t[0],r=t[1];ot.setUserInfo(e),i.src=e.avatar,ot.id=e._id;var n=r.map((function(t){return at(t,ct,it,ot.id)}));_t.renderItems(n)})).catch((function(t){return console.log(t)}))})();
//# sourceMappingURL=main.js.map