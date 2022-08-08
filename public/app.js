"use strict";
// const anchor = document.querySelector('a')!;
// console.log(anchor.href);
const magicalInvoice = {
    client: 'magical',
    details: '  magical invoice details',
    amount: 2,
    format: (input) => input,
};
console.log(magicalInvoice);
console.log(magicalInvoice.format('test'));
const formatInvoice = ({ client, details, amount }) => {
    return `${client} owes  $${details} for  ${amount}`;
};
const invTwo = formatInvoice({ client: 'luigi', details: 'work on website', amount: 9000 });
console.log('inv two', invTwo);
// console.log('inv one',invOne)
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, amount.value);
});
