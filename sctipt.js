/* --- 1 ---
            Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!». */

// let name = prompt('Введите своё имя');
// alert( `Привет, ${name}!` );


/* --- 2 ---
            Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде 
            как константу. */

// const year = 2020;
// let yearOfBirth = prompt('Введите свой год рождения');
// let age = (year - yearOfBirth);
// alert( `Ваш возраст ${age} лет` );


/* --- 3 ---
            Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата. */

// let length = prompt('Введите длину стороны квадрата');
// let perimeter = (4 * length);
// alert( `Периметр квадрата составляет: ${perimeter}` )


/* --- 4 ---
            Запросите у пользователя радиус окружности и выведите площадь такой окружности. */

// let radius = +prompt('Введите радиус окружности');
// const pi = 3.14;
// let area = (radius ** 2 * pi);
// alert( `Площадь круга составляет: ${area}` )


/* --- 5 ---
            Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. 
            Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя. */

// let distance = +prompt('Введите расстояние между двумя городами, км');
// let hour = +prompt('Введите за сколько часов вы хотите добраться, ч');
// let min = +prompt('... за сколько минут, мин');
// let time = min / 60 + hour;
// let speed = distance / time;
// alert( `Для того, чтобы успеть вовремя, вам необходимо двигаться со скоростью ${speed} км/ч` )


// второй вариант решения пятой задачи

// let distance = +prompt('Введите расстояние между двумя городами, км');
// let time = +prompt('Введите время за которое вы хотите добраться в формате - ч.мин');
// let mult = time * 10;
// let min = (mult % 10) * 10;
// let o = Math.floor(time);
// let hours = o + (min / 60);
// let speed = distance / hours;
// alert( `Для того, чтобы успеть вовремя, вам необходимо двигаться со скоростью ${speed} км/ч` );

 
/* --- 6 ---
            Реализуйте конвертер валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе. */

// const eur = 0.9002;
// let usd = +prompt('Введите сумму в USD');
// let o = usd * eur;
// alert( `${o} EUR` )


/* --- 7 ---
            Пользователь указывает объем флешки в Гб. Программа должна посчитать сколько файлов размером в 820 Мб помещается на флешку. */

// let flashDrive = +prompt('Укажите объём флешки в Гб');
// const file = 0.82;
// let quantity = Math.floor(flashDrive / file);
// alert( ` На флешку поместится ${quantity} файла(ов) размером 820 Мб` );


/* --- 8 ---
            Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит сколько шоколадок может купить пользователь 
            и сколько сдачи у него останется */

// let summ = +prompt('Введите сумму денег в кошельке, руб');
// let chocolate = +prompt('Введите стоимость одной шоколадки');
// let quantity = Math.floor( summ / chocolate );
// let oddMoney = summ - ( chocolate * quantity );
// alert( `Вы можете купить ${quantity} шоколадки(ок). Ваша сдача составит ${oddMoney} руб` );


/* --- 9 ---
            Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток 
            от деления). */

// let number = +prompt('Введите трёхзначное число');
// let third = number % 10;
// let units = number - third;
// let a = units / 10;
// let second = a % 10;
// let first = Math.floor(number / 100);
// alert ( `Ваше число задом наперёд: ${third}${second}${first}` );


/* --- 10 ---
              Запросите у пользователя целое число и выведите в ответ, четное число или нет. В задании используйте логические операторы. 
              В задании не надо использовать if или switch. */

// let number = +prompt('Введите целое число');
// let even = number % 2==0 && alert('Это число четное');
// let notEven = number % 2 != 0 && alert('Это число не четное');
