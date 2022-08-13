"use strict";
// // // // // // // // //object type annotation
// // // // // // // // let myObject :{
// // // // // // // //    readonly name: string;
// // // // // // // //     age: number;
// // // // // // // //     hire?: boolean;
// // // // // // // // } = {
// // // // // // // //     name: "John",
// // // // // // // //     age: 32,    
// // // // // // // //     hire: false
// // // // // // // // };
// // // // // // // // // myObject.name = "John";
// // // // // // // //Interface Declaration:
// // // // // // // interface User{
// // // // // // //     id?: number;
// // // // // // //     username: string;
// // // // // // //     country: string;
// // // // // // //     sayWelcome: ()=> string;
// // // // // // //     sayHello(): string;
// // // // // // //     getDouble: (number: number) => number;
// // // // // // // }
// // // // // // // const user: User = {
// // // // // // //     id: 1,
// // // // // // //     username: "john",
// // // // // // //     country: "USA",
// // // // // // //     getDouble(n){
// // // // // // //         return n*2;
// // // // // // //     },
// // // // // // //     sayHello() {
// // // // // // //         return "Hello" + this.username;
// // // // // // //     },
// // // // // // //     sayWelcome: ()=>{
// // // // // // //         return "Welcome" + user.username;
// // // // // // //     }
// // // // // // // }
// // // // // // //Week 3 Problems:
// // // // // // //1-
// // // // // // // Edit The Interface To Fix The Problems
// // // // // // // interface Member {
// // // // // // //     id: number | string;
// // // // // // //     username: string;
// // // // // // //     country?: string;
// // // // // // //      state: boolean;
// // // // // // //     getName: () => string;
// // // // // // //   }
// // // // // // //   // Do Not Edit The Code Below
// // // // // // //   let user: Member = { // Property 'country' is missing in type
// // // // // // //     id: 100,
// // // // // // //     username: "Elzero",
// // // // // // //     state: true,
// // // // // // //     getName() { // 'getName' does not exist in type 'Member'
// // // // // // //       return this.username;
// // // // // // //     }
// // // // // // //   }
// // // // // // //   user.id = 200;
// // // // // // //   user.id = "200"; // Type 'string' is not assignable to type 'number'
// // // // // // //   user.state = false; // Cannot assign to 'state' because it is a read-only property
// // // // // //   //p-2
// // // // // //   // Create Interface Here
// // // // // // interface Client{
// // // // // //     id: number;
// // // // // //     username: string;
// // // // // //     active: boolean;
// // // // // //     discount: number;
// // // // // //     getPrice: (num: number) => number;
// // // // // // }
// // // // // // // Do Not Edit The Code Below
// // // // // // let client = {
// // // // // //     id: 100,
// // // // // //     username: "Elzero",
// // // // // //     active: true,
// // // // // //     discount: 10,
// // // // // //     getPrice(price: number) {
// // // // // //       return price - this.discount;
// // // // // //     }
// // // // // //   }
// // // // // //   console.log(`Client Id Is ${client.id}`);
// // // // // //   console.log(`Client Name Is ${client.username}`);
// // // // // //   console.log(`Client Has Dicount ${client.discount}`);
// // // // // //   console.log(`Client Product After Discount Is ${client.getPrice(200)}`);
// // // // // // //p-3
// // // // // // // Do Not Edit The Code Below
// // // // // // interface Man {
// // // // // //     title: string;
// // // // // //     weight: number;
// // // // // //     age: number;
// // // // // //   }
// // // // // //   interface Bird {
// // // // // //     canFly: boolean;
// // // // // //   }
// // // // // //   interface Superman extends Man, Bird{
// // // // // //     bodyType: string;
// // // // // //     origin: string;
// // // // // //   }
// // // // // //   let creature: Superman = {
// // // // // //     title: "Superman",
// // // // // //     weight: 100,
// // // // // //     age: 500,
// // // // // //     canFly: true,
// // // // // //     bodyType: "Iron",
// // // // // //     origin: "Krypton"
// // // // // //   }
// // // // // // p-4
// // // // // // Create Class Here
// // // // // class Player{
// // // // //     details: () => string;
// // // // //     constructor(name: string, type: string, level: number|string, vip?: boolean){
// // // // //         this.details = ()=>{
// // // // //             return `${vip? 'VIP ' :''}${name}, Type is ${type}, Level is ${level}`;
// // // // //         }
// // // // //     }
// // // // // }
// // // // // // Do Not Edit The Code Below
// // // // // let player1 = new Player("Osama", "Mage", 90, true);
// // // // // let player2 = new Player("Shady", "Archer", "85", false);
// // // // // let player3 = new Player("Amr", "Fighter", 50, true);
// // // // // let player4 = new Player("Mahmoud", "Assassin", 77);
// // // // // console.log(player1.details()); // VIP Osama, Type Is Mage Level Is 90
// // // // // console.log(player2.details()); // Shady, Type Is Archer Level Is 85
// // // // // console.log(player3.details()); // VIP Amr, Type Is Fighter Level Is 50
// // // // // console.log(player4.details()); // Mahmoud, Type Is Assassin Level Is 77
// // // // //P-5 shorehand this code"
// // // // class Shorten {
// // // //   constructor (public id: number, public username: string, protected title: string) {
// // // //   }
// // // // }
// // // // let tester = new Shorten(100, "Elzero", "Developer");
// // // // console.log(tester.id);
// // // // console.log(tester.username);
// // // //p-6 code"
// // // class Show {
// // //     constructor (private _title: string) {}
// // //      getTitle(){
// // //         return this._title;
// // //     }
// // //     setTitle (st: string){
// // //         this._title = st;
// // //     }
// // //   }
// // //   let tester = new Show("Elzero");
// // //   console.log(tester.getTitle()); // Property 'title' does not exist on type 'Show'
// // //   tester.setTitle("Ossamaaaa")// Property 'title' does not exist on type 'Show'
// // //   console.log(tester.getTitle()); // Property 'title' does not exist on type 'Show'
// // //p7 code:
// // interface Play {
// //     id: number;
// //     title: string;
// //     level: number | string;
// //     logIn(): void;
// //     logOut(msg: string): void;
// //   }
// //   class Player implements Play{
// //     constructor(public id: number, public title: string, public level : number | string){}
// //     logIn(): void {
// //         console.log('logged in')
// //     }
// //     logOut(msg: string): void {
// //         console.log('logged out' + msg)
// //     }
// //   }
// //   // Create Your Class Here
// //   let player1 = new Player(100, "Elzero", 95);
// //   console.log(player1.id); // 100
// //   console.log(player1.title); // "Elzero"
// //   console.log(player1.level); // 95
// //   player1.logIn(); // Logged In
// //   player1.logOut("Good Bye"); // Logged Out, Good Bye
// //Problem set 4
// // p - 1
// // Do Not Edit
// type numandstring = number | string;
// abstract class Game {
//   constructor(public title: string, public price: numandstring) {}
//   abstract getLocation() : string;
//   abstract getDiscount() : string;
// }
// // Start Edit And Fix
// class RPG extends Game {
//   constructor(title: string, public price: numandstring, public rate: number) {
//     super(title, price);
//   }
//   getDiscount(){
//     return `Discount`;
//   }
//   getLocation(): string {
//       return 'Location';
//   }
// }
// class Action extends Game {
//   constructor(title: string, public price: numandstring, public rate: number, public company?: string) {
//     super(title, price)
//   }
//   getDiscount(){
//     return `Discount`;
//   }
//   getLocation(): string {
//       return 'Location';
//   }
// }
// // End Edit And Fix
// // Do Not Edit
// let gameOne = new RPG("Ys", 100, 10);
// let gameTwo = new Action("Uncharted", 90, 15, "Sony");
// console.log(gameOne.title); // "Ys"
// console.log(gameOne.price); // 100
// console.log(gameOne.rate); // 10
// console.log(gameOne.getDiscount()); // "Discount"
// console.log(gameOne.getLocation()); // "Location"
// console.log(gameTwo.title); // "Uncharted"
// console.log(gameTwo.price); // 90
// console.log(gameTwo.rate); // 15
// console.log(gameTwo.company); // "Sony"
// console.log(gameTwo.getDiscount()); // "Discount"
// console.log(gameTwo.getLocation()); // "Location"
//p-2 (using generics)
// Write Function Code Here
const showTypes = (val1, val2, val3) => {
    return `${val1 && val1} - ${val2 && val2} - ${val3 && val3}`;
};
// Do Not Edit Here
console.log(showTypes()); // Nothing - Nothing - Nothing
console.log(showTypes("String")); // String - Nothing - Nothing
console.log(showTypes("String", 100)); // String - 100 - Nothing
console.log(showTypes("String", 100, true)); // String - 100 - true
