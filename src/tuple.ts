//tuple is multiple collection of diffferent data types.

let employee: readonly[string , number , boolean] = ['Mottakin', 30, true];
console.log(employee);

// employee.push('Dhaka');

// when we use readonly then the array won't allow us to push any value.