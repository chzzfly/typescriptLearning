let sales: number = 123_456_789;
let course: string = "TypeScript";
let is_published = true;

// any
let level;
level = 1;
level = "a";

// function
function calcTax(income: number, taxYear: number = 2022): number {
  let x;
  if (taxYear < 2022) return income * 1.2;
  return income * 1.3;
}

calcTax(6700, 2021);

// object
let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "",
  retire(date) {
    console.log(`You retire at ${date}.`);
  },
};

employee.name = "jonas";
