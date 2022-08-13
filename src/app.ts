// // //object type annotation

// // let myObject :{
// //    readonly name: string;
// //     age: number;
// //     hire?: boolean;
// // } = {
// //     name: "John",
// //     age: 32,    
// //     hire: false
// // };


// // // myObject.name = "John";

// //Interface Declaration:
// interface User{
//     id?: number;
//     username: string;
//     country: string;
//     sayWelcome: ()=> string;
//     sayHello(): string;
//     getDouble: (number: number) => number;
// }

// const user: User = {
//     id: 1,
//     username: "john",
//     country: "USA",
//     getDouble(n){
//         return n*2;
//     },
//     sayHello() {
//         return "Hello" + this.username;
//     },
//     sayWelcome: ()=>{
//         return "Welcome" + user.username;
//     }
// }

//Week 3 Problems:
//1-
// Edit The Interface To Fix The Problems
// interface Member {
//     id: number | string;
//     username: string;
//     country?: string;
//      state: boolean;
//     getName: () => string;
//   }
  
//   // Do Not Edit The Code Below
//   let user: Member = { // Property 'country' is missing in type
//     id: 100,
//     username: "Elzero",
//     state: true,
//     getName() { // 'getName' does not exist in type 'Member'
//       return this.username;
//     }
//   }
  
//   user.id = 200;
//   user.id = "200"; // Type 'string' is not assignable to type 'number'
//   user.state = false; // Cannot assign to 'state' because it is a read-only property
  
  //p-2
  // Create Interface Here

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
