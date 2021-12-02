"use strict";
var compteur = document.querySelector('#compteur');
var i = 0;
var increment = function (e) {
    e.preventDefault();
    i++;
    var span = compteur === null || compteur === void 0 ? void 0 : compteur.querySelector('span');
    if (span) {
        span.innerText = i.toString();
    }
};
compteur === null || compteur === void 0 ? void 0 : compteur.addEventListener('click', increment);
