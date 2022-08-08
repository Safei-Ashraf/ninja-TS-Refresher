// const anchor = document.querySelector('a')!;
// console.log(anchor.href);

// const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children)

class Invoice {
    client: string;
    details: string;
    amount: number;

    constructor(client: string, details: string, amount: number) {
        this.client = client;
        this.details= details;
        this.amount = amount;
    }
    format(){
        return `${this.client} owes  $${this.details} for  ${this.amount}`;
    }
}
const invOne = new Invoice( 'mario', 'work on website', 250);


type TInvoice = {
    client: string;
    details: string;
    amount: number;
}
const formatInvoice = ({client, details, amount}: TInvoice):string => {
    return `${client} owes  $${details} for  ${amount}`;
}
const invTwo = formatInvoice({client:'luigi',details: 'work on website',amount: 9000})
console.log('inv two',invTwo)
console.log('inv one',invOne)

const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

 form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, amount.value)
});