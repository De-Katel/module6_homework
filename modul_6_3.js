// // Задание 3.

// // Написать функцию, которая принимает
//  число как аргумент и возвращает 
// // функцию, которая также принимает число
//  как аргумент и возвращает 
// // сумму этих двух чисел. Выведите в
//  консоль результат.

// // Решение:

let func = function(a){

    return function returnFunc(b){

        return a+b;
    }
}
 
let num_1 = +prompt('введите первое число');

let num_2 = +prompt('введите второе число');

console.log(func(num_1)(num_2));

