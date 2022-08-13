// // // //object type annotation

// // // let myObject :{
// // //    readonly name: string;
// // //     age: number;
// // //     hire?: boolean;
// // // } = {
// // //     name: "John",
// // //     age: 32,    
// // //     hire: false
// // // };


// // // // myObject.name = "John";

// // //Interface Declaration:
// // interface User{
// //     id?: number;
// //     username: string;
// //     country: string;
// //     sayWelcome: ()=> string;
// //     sayHello(): string;
// //     getDouble: (number: number) => number;
// // }

// // const user: User = {
// //     id: 1,
// //     username: "john",
// //     country: "USA",
// //     getDouble(n){
// //         return n*2;
// //     },
// //     sayHello() {
// //         return "Hello" + this.username;
// //     },
// //     sayWelcome: ()=>{
// //         return "Welcome" + user.username;
// //     }
// // }

// //Week 3 Problems:
// //1-
// // Edit The Interface To Fix The Problems
// // interface Member {
// //     id: number | string;
// //     username: string;
// //     country?: string;
// //      state: boolean;
// //     getName: () => string;
// //   }
  
// //   // Do Not Edit The Code Below
// //   let user: Member = { // Property 'country' is missing in type
// //     id: 100,
// //     username: "Elzero",
// //     state: true,
// //     getName() { // 'getName' does not exist in type 'Member'
// //       return this.username;
// //     }
// //   }
  
// //   user.id = 200;
// //   user.id = "200"; // Type 'string' is not assignable to type 'number'
// //   user.state = false; // Cannot assign to 'state' because it is a read-only property
  
//   //p-2
//   // Create Interface Here

// interface Client{
//     id: number;
//     username: string;
//     active: boolean;
//     discount: number;
//     getPrice: (num: number) => number;
// }
// // Do Not Edit The Code Below
// let client = {
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


// //p-3

// // Do Not Edit The Code Below
// interface Man {
//     title: string;
//     weight: number;
//     age: number;
//   }
  
//   interface Bird {
//     canFly: boolean;
//   }

//   interface Superman extends Man, Bird{
//     bodyType: string;
//     origin: string;
//   }
  
//   let creature: Superman = {
//     title: "Superman",
//     weight: 100,
//     age: 500,
//     canFly: true,
//     bodyType: "Iron",
//     origin: "Krypton"
//   }

// p-4

// Create Class Here

// Do Not Edit The Code Below
let player1 = new Player("Osama", "Mage", 90, true);
let player2 = new Player("Shady", "Archer", "85", false);
let player3 = new Player("Amr", "Fighter", 50, true);
let player4 = new Player("Mahmoud", "Assassin", 77);

console.log(player1.details()); // VIP Osama, Type Is Mage Level Is 90
console.log(player2.details()); // Shady, Type Is Archer Level Is 85
console.log(player3.details()); // VIP Amr, Type Is Fighter Level Is 50
console.log(player4.details()); // Mahmoud, Type Is Assassin Level Is 77
