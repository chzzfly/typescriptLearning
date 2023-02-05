// let sales: number = 123_456_789;
// let course: string = "TypeScript";
// let is_published = true;

// // any
// let level;
// level = 1;
// level = "a";

// // function
// function calcTax(income: number, taxYear: number = 2022): number {
//   let x;
//   if (taxYear < 2022) return income * 1.2;
//   return income * 1.3;
// }

// calcTax(6700, 2021);

// // object
// // type aliases
// type Employee = {
//   readonly id: number;
//   name: string;
//   retire: (date: Date) => void;
// };

// let employee: Employee = {
//   id: 1,
//   name: "",
//   retire(date) {
//     console.log(`You retire at ${date}.`);
//   },
// };

// employee.name = "jonas";

// // OOP

// class Account {
//   id: number;
//   owner: string;
//   balance: number;

//   constructor(id: number, owner: string, balance: number) {
//     this.id = id;
//     this.owner = owner;
//     this.balance = balance;
//   }

//   deposit(amount: number): void {
//     if (amount <= 0) throw new Error("Invalid amount");
//     this.balance += amount;
//   }
// }

// const account = new Account(1, "jonas", 100);

// account.deposit(1);

// interface

// interface Calendar {
//   name: string;
//   addEvent(): void;
//   removeEvent(): void;
// }

// interface CloudCalendar extends Calendar {
//   sync(): void;
// }

// class GoogleCalendar implements Calendar {
//   // 这三行等同于下面一行
//   // name: string;
//   // constructor(name: string) {
//   //   this.name = name;
//   // }
//   constructor(public name: string) {}

//   addEvent(): void {
//     throw new Error("Method not implemented.");
//   }
//   removeEvent(): void {
//     throw new Error("Method not implemented.");
//   }
// }

// generic 泛型

const wrapInArray = <T>(value: T) => [value];

let numbers = wrapInArray(1);
let strings = wrapInArray("1");

// interface 和 class 的两种写法

interface Person {
  name: string;
}

class Person1 {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Person2 {
  constructor(public name: string) {}
}
