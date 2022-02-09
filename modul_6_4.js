// Задание 4.

// Напишите функцию, которая принимает два числа. Каждую секунду 
// необходимо выводить в консоль, начиная от первого и заканчивая 
// вторым. Используйте setInterval.
// Например, пользователь ввёл числа 5 и 15. Каждую секунду в 
// консоль должно печататься число, начиная с 5 и заканчивая 15 
// (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15).

// Решение:

let a = +prompt("введите первое число");

let b = +prompt("введите второе число");

function showDelay(startShow, endShow) {

    let i = 0;

    let timer = setInterval(function () {
       
        if (i > endShow - startShow) {
       
            clearInterval(timer);
       
        } else {
       
            console.log(i++ + startShow);
       
        }
    }, 1000);
}

showDelay(a, b);

