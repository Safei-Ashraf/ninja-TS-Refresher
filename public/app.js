"use strict";
// const anchor = document.querySelector('a')!;
// console.log(anchor.href);
// const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children)
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, amount.value);
});
