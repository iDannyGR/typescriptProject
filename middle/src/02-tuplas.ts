//permite definir un conjunto de un array fuertemente tipado
//en una tupla se fija la posicion y el orden de cada elemento
const prices:(string|number)[] = [1,23,4,55,5,6,6,'as'];

let user:[string, number] = ['foxi',12];

// user = [];
// user= ['dani'];
// user = ['dani', 12];
// user = ['dani', 12, true]

const [username, age]= user;
console.log(username);
console.log(age);