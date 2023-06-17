console.log(Number('10'), typeof Number('10')); // явное
//1
console.log(+'50',typeof Number('50'));//не явное
console.log(Number('50'),typeof Number('50'));
//2
console.log(Number('100'),typeof Number('100'));//явное
//3
console.log('' + 1,typeof('' + 1));//не явное
console.log(String('' + 1),typeof String('' + 1));
//4
console.log(String(1),typeof String(1));//явное
//5
console.log(Boolean(0),typeof Boolean(0));//явное
//6
console.log(+'001',typeof(+'001'));//не явное
console.log(Number(001),typeof Number(001));
//7
console.log(1 + '',typeof(1 + ''));//не явное
console.log(String(1),typeof String(1));
//8
console.log(Boolean(1),typeof Boolean(1));//явное
//9
console.log(String(001),typeof String(001));//явное
//10
console.log(Number('Hello World'), typeof Number('Hello World'));//явное
console.log('---------------------------------------------------');
// task3
/* 
преобразовать явно к string, number и boolean
1. console.log
2. { name: 'Maxim' }
3. Symbol('key')
4. Number
5. ''
6. 0
7. -10
8. '-105'
*/
console.log(String(console.log),Number(console.log),Boolean(console.log));
console.log('2-----');
console.log(String({ name: 'Maxim' }),Number({ name: 'Maxim' }),Boolean({ name: 'Maxim' }));
console.log('3-----');
console.log(String(Symbol('key')),/*Number(Symbol('key')),*/Boolean(Symbol('key')));
console.log('4-----');
console.log(String(Number),Number(Number),Boolean(Number));
console.log('5-----');
console.log(String(''),Number(''),Boolean(''));
console.log('6-----');
console.log(String(0),Number(0),Boolean(0));
console.log('7-----');
console.log(String(-10),Number(-10),Boolean(-10));
console.log('8-----');
console.log(String('-105'),Number('-105'),Boolean('-105'));

