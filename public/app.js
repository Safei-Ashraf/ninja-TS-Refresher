"use strict";
// const anchor = document.querySelector('a')!;
// console.log(anchor.href);
// const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children)
class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes  $${this.details} for  ${this.amount}`;
    }
}
const invOne = new Invoice('mario', 'work on website', 250);
console.log(invOne.amount);
const formatInvoice = ({ client, details, amount }) => {
    return `${client} owes  $${details} for  ${amount}`;
};
const invTwo = formatInvoice({ client: 'luigi', details: 'work on website', amount: 9000 });
console.log('inv two', invTwo);
console.log('inv one', invOne);
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, amount.value);
});
