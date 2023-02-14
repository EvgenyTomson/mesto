(()=>{"use strict";var t={inputSelector:".popup__input",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__submit_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},e=".popup__close",r="#editAvatarPopup",n=document.querySelector(".profile__edit"),o=(document.querySelector(".profile__name"),document.querySelector(".profile__about"),document.querySelector(".profile__avatar")),i=document.querySelector("#profileEditPopup"),u=i.querySelector(".popup__form"),a=i.querySelector("#inputName"),c=i.querySelector("#inputJob"),s=document.querySelector(".profile__add-place"),l=document.querySelector("#newPlacePopup").querySelector(".popup__form"),f=document.querySelector(r).querySelector(".popup__form");function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==p(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===p(o)?o:String(o)),n)}var o}var d=function(){function t(e,r,n,o,i,u,a){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.name=e.name,this.link=e.link,this._likes=e.likes.length,this._isLiked=u,this._id=e._id,this._templateSelector=r,this._handleCardClick=n,this._handleCardDeleteConfirm=o,this.isOwn=i,this._handleLikeClick=a}var e,r;return e=t,(r=[{key:"_getCardTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".card").cloneNode(!0)}},{key:"create",value:function(){return this._card=this._getCardTemplate(),this._cardImg=this._card.querySelector(".card__image"),this._cardTitle=this._card.querySelector(".card__title"),this._like=this._card.querySelector(".card__like"),this._isLiked&&this._like.classList.add("card__like_active"),this._likesCounter=this._card.querySelector(".card__likes-count"),this._likesCounter.textContent=this._likes,this.isOwn&&(this._cardDeleteBtn=this._card.querySelector(".card__delete")),this._fillCard(),this._setCardListeners(),this._card}},{key:"_fillCard",value:function(){this._cardImg.src=this.link,this._cardImg.setAttribute("alt"," ".concat(this.name,".")),this._cardTitle.textContent=this.name}},{key:"_setCardListeners",value:function(){var t=this;this.isOwn&&this._cardDeleteBtn.addEventListener("click",(function(){return t._deleteCard()})),this._like.addEventListener("click",(function(){return t._likeCard()})),this._cardImg.addEventListener("click",(function(){return t._handleCardClick(t.name,t.link)}))}},{key:"_deleteCard",value:function(){this._handleCardDeleteConfirm(this._id,this._card)}},{key:"_likeCard",value:function(){this._like.classList.toggle("card__like_active"),this._handleLikeClick(this._id,this._isLiked,this),this._isLiked=!this._isLiked}},{key:"updateLikesCount",value:function(t){this._likesCounter.textContent=t}}])&&y(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function v(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==h(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==h(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===h(o)?o:String(o)),n)}var o}var m=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._form=r,this._inputList=Array.from(this._form.querySelectorAll(e.inputSelector)),this._submitButton=this._form.querySelector(e.submitButtonSelector),this._validationParametres=e}var e,r;return e=t,(r=[{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"_setEventListeners",value:function(){var t=this;this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonState()}))}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._submitButton.classList.add(this._validationParametres.inactiveButtonClass),this._submitButton.setAttribute("disabled","disabled")):(this._submitButton.classList.remove(this._validationParametres.inactiveButtonClass),this._submitButton.removeAttribute("disabled"))}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"_showInputError",value:function(t,e){var r=this._form.querySelector(".".concat(t.id,"-error"));t.classList.add(this._validationParametres.inputErrorClass),r.textContent=e,r.classList.add(this._validationParametres.errorClass)}},{key:"_hideInputError",value:function(t){var e=this._form.querySelector(".".concat(t.id,"-error"));t.classList.remove(this._validationParametres.inputErrorClass),e.classList.remove(this._validationParametres.errorClass),e.textContent=""}},{key:"resetValidation",value:function(){var t=this;this._inputList.forEach((function(e){t._hideInputError(e)})),this._toggleButtonState()}}])&&v(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function _(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==b(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==b(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===b(o)?o:String(o)),n)}var o}var S=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=e,this._container=document.querySelector(r)}var e,r;return e=t,(r=[{key:"drawInitial",value:function(t){var e=this;t.forEach((function(t){e._renderer(t,e._container)}))}},{key:"addItem",value:function(t){this._renderer(t,this._container)}}])&&_(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function w(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,k(n.key),n)}}function k(t){var e=function(t,e){if("object"!==g(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==g(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===g(e)?e:String(e)}var P=function(){function t(e,r){var n,o,i,u=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,i=function(t){"Escape"===t.key&&u.close()},(o=k(o="_handleEscClose"))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i,this._popup=document.querySelector(e),this._closeButton=this._popup.querySelector(r)}var e,r;return e=t,(r=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("click",(function(e){e.target!==t._popup&&e.target!==t._closeButton||t.close()}))}}])&&w(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function E(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==j(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==j(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===j(o)?o:String(o)),n)}var o}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=O(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},C.apply(this,arguments)}function O(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=q(t)););return t}function L(t,e){return L=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},L(t,e)}function T(t,e){if(e&&("object"===j(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function q(t){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},q(t)}var I=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&L(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=q(n);if(o){var r=q(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return T(this,t)});function u(t,e){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,t,e))._image=r._popup.querySelector(".popup__image"),r._caption=r._popup.querySelector(".popup__caption"),r}return e=u,(r=[{key:"open",value:function(t,e){this._image.src=e,this._image.setAttribute("alt"," ".concat(t,".")),this._caption.textContent=t,C(q(u.prototype),"open",this).call(this)}}])&&E(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(P);function U(t){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},U(t)}function R(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==U(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==U(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===U(o)?o:String(o)),n)}var o}function D(){return D="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=B(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},D.apply(this,arguments)}function B(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=V(t)););return t}function x(t,e){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},x(t,e)}function A(t,e){if(e&&("object"===U(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function V(t){return V=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},V(t)}var N=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&x(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=V(n);if(o){var r=V(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return A(this,t)});function u(t,e,r){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t,e))._form=n._popup.querySelector(".popup__form"),n._inputList=Array.from(n._form.querySelectorAll(".popup__input")),n._formSubmitHandler=r,n}return e=u,(r=[{key:"_getInputValues",value:function(){var t={};return this._inputList.forEach((function(e){return t[e.name]=e.value})),t}},{key:"close",value:function(){this._form.reset(),D(V(u.prototype),"close",this).call(this)}},{key:"setEventListeners",value:function(){var t=this;D(V(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._formSubmitHandler(t._getInputValues(),t._form.querySelector(".popup__submit"))}))}}])&&R(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(P);function H(t){return H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},H(t)}function G(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==H(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==H(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===H(o)?o:String(o)),n)}var o}var J=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._user=document.querySelector(e),this._info=document.querySelector(r)}var e,r;return e=t,(r=[{key:"getUserInfo",value:function(){return{user:this._user.textContent,info:this._info.textContent}}},{key:"setUserInfo",value:function(t){var e=t.username,r=t.userjob;this._user.textContent=e,this._info.textContent=r}}])&&G(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function z(t){return z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},z(t)}function M(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==z(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==z(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===z(o)?o:String(o)),n)}var o}var F=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=e.baseUrl,this._headers=e.headers}var e,r;return e=t,(r=[{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",headers:this._headers}).then((function(t){return t.ok?t.json():Promise.reject("getInitialCards Ошибка: ".concat(t.status))}))}},{key:"getUserData",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:this._headers}).then((function(t){return t.ok?t.json():Promise.reject("getUserData Ошибка: ".concat(t.status))}))}},{key:"editUserData",value:function(t){var e=t.username,r=t.userjob;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:r})}).then((function(t){return t.ok?t.json():Promise.reject("editUserData Ошибка: ".concat(t.status))}))}},{key:"addNewCard",value:function(t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(t)}).then((function(t){return t.ok?t.json():Promise.reject("addNewCard Ошибка: ".concat(t.status))}))}},{key:"deleteCard",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t),{method:"DELETE",headers:this._headers})}},{key:"addLike",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this._headers}).then((function(t){return t.ok?t.json():Promise.reject("addLike Ошибка: ".concat(t.status))}))}},{key:"removeLike",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headers}).then((function(t){return t.ok?t.json():Promise.reject("removeLike Ошибка: ".concat(t.status))}))}},{key:"editUserAvatar",value:function(t){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t})}).then((function(t){return t.ok?t.json():Promise.reject("editUserAvatar Ошибка: ".concat(t.status))}))}}])&&M(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function K(t){return K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},K(t)}function Q(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==K(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==K(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===K(o)?o:String(o)),n)}var o}function W(){return W="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=X(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},W.apply(this,arguments)}function X(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=$(t)););return t}function Y(t,e){return Y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},Y(t,e)}function Z(t,e){if(e&&("object"===K(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function $(t){return $=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},$(t)}var tt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Y(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=$(n);if(o){var r=$(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return Z(this,t)});function u(t,e,r){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t,e))._form=n._popup.querySelector(".popup__form"),n._formSubmitHandler=r,n}return e=u,(r=[{key:"open",value:function(t,e){W($(u.prototype),"open",this).call(this),this._cardId=t,this._cardToDelete=e}},{key:"setEventListeners",value:function(){var t=this;W($(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._formSubmitHandler(t._cardId,t._cardToDelete,t._form.querySelector(".popup__submit"))}))}}])&&Q(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(P),et=new F({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-60",headers:{authorization:"14bcc1cd-5619-4964-8098-6c46ced3ee82","Content-Type":"application/json"}}),rt=new J(".profile__name",".profile__about");function nt(t,e){t.textContent=e}function ot(t,e){ft.open(t,e)}function it(t,e,r){e?et.removeLike(t).then((function(t){r.updateLikesCount(t.likes.length)})).catch((function(t){return console.log("Remove Card Like Error: ",t)})):et.addLike(t).then((function(t){r.updateLikesCount(t.likes.length)})).catch((function(t){return console.log("Add Card Like Error: ",t)}))}var ut=function(t,e,r,n,o){return new d(t,n?"#cardTemplate":"#foreignCardTemplate",e,r,n,o,it).create()};function at(t,e){pt.open(t,e)}var ct=new N("#profileEditPopup",e,(function(t,e){var r=e.textContent;nt(e,"Сохранение..."),et.editUserData(t).then((function(t){rt.setUserInfo({username:t.name,userjob:t.about})})).catch((function(t){return console.log("Change User Data Error: ",t)})).finally((function(){return nt(e,r)})),this.close()})),st=new N("#newPlacePopup",e,(function(t,e){var r={name:t.placename,link:t.placelink},n=e.textContent;nt(e,"Сохранение..."),et.addNewCard(r).then((function(t){vt.addItem(ut(t,at,ot,!0,!1))})).catch((function(t){return console.log("Add New Card Error: ",t)})).finally((function(){return nt(e,n)})),this.close()})),lt=new N(r,e,(function(t,e){var r=t.avatar,n=e.textContent;nt(e,"Сохранение..."),et.editUserAvatar(r).then((function(t){o.src=t.avatar})).catch((function(t){return console.log("Edit User Avatar Error: ",t)})).finally((function(){return nt(e,n)})),this.close()})),ft=new tt("#deleteOwnCardPopup",e,(function(t,e,r){var n=r.textContent;nt(r,"Сохранение..."),et.deleteCard(t).then((function(t){t.ok?e.remove():Promise.reject("addNewCard Ошибка: ".concat(t.status))})).catch((function(t){return console.log("Card Delete Error: ",t)})).finally((function(){return nt(r,n)})),this.close()})),pt=new I("#viewImagePopup",e);ct.setEventListeners(),st.setEventListeners(),pt.setEventListeners(),lt.setEventListeners(),ft.setEventListeners();var yt=new m(t,u),dt=new m(t,l),ht=new m(t,f);yt.enableValidation(),dt.enableValidation(),ht.enableValidation(),document.querySelector(".profile__avatar-button").addEventListener("click",(function(){ht.resetValidation(),lt.open()})),n.addEventListener("click",(function(){var t=rt.getUserInfo(),e=t.user,r=t.info;a.value=e,c.value=r,yt.resetValidation(),ct.open()})),s.addEventListener("click",(function(){dt.resetValidation(),st.open()}));var vt=new S((function(t,e){e.prepend(t)}),".elements__cards"),mt=et.getUserData().then((function(t){rt.setUserInfo({username:t.name,userjob:t.about}),o.src=t.avatar,rt.id=t._id})).catch((function(t){return console.log("Get User Data Error: ",t)}));Promise.all([mt]).then((function(){et.getInitialCards().then((function(t){var e=t.map((function(t){var e=t.owner._id===rt.id,r=t.likes.some((function(t){return t._id===rt.id}));return ut(t,at,ot,e,r)}));vt.drawInitial(e)})).catch((function(t){return console.log("Get Initial Cards Error: ",t)}))}))})();
//# sourceMappingURL=main.js.map