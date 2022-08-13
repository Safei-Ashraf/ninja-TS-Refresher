"use strict";
// // //object type annotation
// Do Not Edit The Code Below
let user = {
    id: 100,
    username: "Elzero",
    state: true,
    getName() {
        return this.username;
    }
};
user.id = 200;
user.id = "200"; // Type 'string' is not assignable to type 'number'
user.state = false; // Cannot assign to 'state' because it is a read-only property
//p-2
// Create Interface Here
// interface Client{
//     id: number,
//     username: string,
//     active: boolean,
//     discount: number,
//     getPrice: (price: number) => number,
// }
// // Do Not Edit The Code Below
// let client: Client = {
//     id: 100,
//     username: "Elzero",
//     active: true,
//     discount: 10,
//     getPrice(price: number) {
//       return price - this.discount;
//     }
//   }
//   console.log(`Client Id Is ${client.id}`);
//   console.log(`Client Name Is ${client.username}`);
//   console.log(`Client Has Dicount ${client.discount}`);
//   console.log(`Client Product After Discount Is ${client.getPrice(200)}`);
// console.log('hey')
