function cal(num) {
    console.log(num);
}
var a = 1;
cal(a);
function greeter(person) {
    return "hello " + person.firstName + " " + person.lastName;
}
var user = { firstName: 'Jane', lastName: 'user' };
console.log(greeter(user), '');
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
var user1 = new Student('jane', 'm', 'user');
console.log(greeter(user1), '');
