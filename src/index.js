var sales = 123456789;
var course = "TypeScript";
var is_published = true;
// any
var level;
level = 1;
level = "a";
// function
function calcTax(income, taxYear) {
    if (taxYear === void 0) { taxYear = 2022; }
    var x;
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
calcTax(6700, 2021);
var employee = {
    id: 1,
    name: "",
    retire: function (date) {
        console.log("You retire at ".concat(date, "."));
    }
};
employee.name = "jonas";
// OOP interface
var Account = /** @class */ (function () {
    function Account(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    Account.prototype.deposit = function (amount) {
        if (amount <= 0)
            throw new Error("Invalid amount");
        this.balance += amount;
    };
    return Account;
}());
