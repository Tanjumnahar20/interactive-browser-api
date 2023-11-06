const hello = localStorage.getItem('hello');
console.log(hello);
const bevarage = localStorage.getItem('drink');

console.log(bevarage);
const setAge = () => {
     localStorage.setItem('age', 31);
}