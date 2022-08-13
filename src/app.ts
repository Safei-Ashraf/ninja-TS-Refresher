// //object type annotation

// let myObject :{
//    readonly name: string;
//     age: number;
//     hire?: boolean;
// } = {
//     name: "John",
//     age: 32,    
//     hire: false
// };


// // myObject.name = "John";

//Interface Declaration:
interface User{
    id?: number;
    username: string;
    country: string;
    sayWelcome: ()=> string;
    sayHello(): string;
    getDouble: (number: number) => number;
}

const user: User = {
    id: 1,
    username: "john",
    country: "USA",
    getDouble(n){
        return n*2;
    },
    sayHello() {
        return "Hello" + this.username;
    },
    sayWelcome: ()=>{
        return "Welcome" + user.username;
    }
}