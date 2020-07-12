function cal(num: number) {
    console.log(num);
}
let a = 1;
cal(a)

interface Person {
    firstName: string;
    lastName: string;
}
function greeter(person: Person) {
    return `hello ${person.firstName} ${person.lastName}`;
}
let user = {firstName: 'Jane', lastName: 'user'};

console.log(greeter(user), '');


class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName  = `${firstName} ${middleInitial} ${lastName}`;
    }    
}

let user1 = new Student('jane', 'm', 'user');

console.log(greeter(user1), '');