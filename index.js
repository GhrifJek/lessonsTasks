let age=23;
console.log(Number(age),String(age),Boolean(age));
let name='Nikolai';
console.log(Number(name),String(name),Boolean(name));
let isRight=true;
console.log(Number(isRight),String(isRight),Boolean(isRight));
let car=null;
console.log(Number(car),String(car),Boolean(car));
let nameCar;
console.log(Number(nameCar),String(nameCar),Boolean(nameCar));
const id=Symbol('id');
console.log(/*Number(id) нельзя конвертировать символ в число*/String(id),Boolean(id));
let bigN=123n;
console.log(Number(bigN),String(bigN),Boolean(bigN));
let drink={
    nameDrink: 'coffe' ,
    isHotDrink: true ,
    howCaps: 5 
}
console.log(Number(drink),String(drink),Boolean(drink));