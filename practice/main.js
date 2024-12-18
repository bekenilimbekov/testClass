// Задача 1: Отфильтровать четные числа и вывести их

// Условие: Отфильтруйте четные числа из массива и выведите их.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNumbers = numbers.filter(numbers =>
//     numbers %2===0)
// console.log(evenNumbers)

// Задача 2: Фильтрация строк по длине

// Условие: Из массива строк выберите только те строки, длина которых больше 5 символов, и выведите их.

// const fruit = ["apple", "banana", "cherry", "fig", "grape", "watermelon"];
// const fruitsFilter = fruits.filter(item =>
//     item.length > 5)
// console.log(fruitsFilter)

// Задача 3: Фильтрация объектов по возрасту

// Условие: В массиве объектов людей отфильтруйте тех, кто старше 18 лет, и выведите их имена.

// const people = [
//     { name: "John", age: 17 },
//     { name: "Jane", age: 22 },
//     { name: "Mark", age: 19 },
//     { name: "Anna", age: 16 },
//     { name: "Bob", age: 24 }
// ];
// const peopleOld = people.filter(people =>
//     people.age > 18)
// console.log(peopleOld)

// Задача 4: Фильтрация положительных чисел

// Условие: Отфильтруйте из массива только положительные числа и выведите их.

// const number = [-3, 0, 2, -5, 7, -1, 10, -12, 5];
// const numberFly = number.filter(number =>
//     number > 0)
// console.log(numberFly)

// // Задача 5: Отфильтровать непустые строки

// // Условие: Отфильтруйте непустые строки и выведите их.

// const strings = ["", "hello", "world", "", "javascript", " ", "react"];
// const stringsFilter = strings.filter(strings => strings.lenght > 0)
//     console.log(stringsFilter)

// Задача 6: Фильтрация чисел больше 10

// Условие: Отфильтруйте числа больше 10 и выведите их.

// const num = [5, 12, 8, 20, 33, 7, 15, 1];
// const numBig = num.filter(num =>
//     num > 10)
// console.log(numBig)

// Задача 7: Фильтрация строк, которые начинаются с буквы “A”

// Условие: Из массива строк выберите те, которые начинаются с буквы “A”, и выведите их.

// const strings = ["Apple", "Banana", "Avocado", "Cherry", "Apricot", "Grape"];
// const stringsLong = strings.filter(strings =>
//     strings.toLowerCase().startsWith('a'))
//     console.log(stringsLong)

// Задача 8: Фильтрация объектов по ключу

// Условие: В массиве объектов отфильтруйте те, у которых значение ключа active равно true.

// const users = [
//     { name: "Alice", active: true },
//     { name: "Bob", active: false },
//     { name: "Charlie", active: true },
//     { name: "Dave", active: false }
// ];
// const usersFilter = users.filter(users =>
//     users.active)
// console.log(usersFilter)

// users.forEach((item)=>
// )
// console

// Задача 9: Фильтрация отрицательных чисел

// Условие: Отфильтруйте из массива только отрицательные числа и выведите их.

// const num = [3, -2, 5, -8, -7, 0, 4, -1];
// const numFall = num.filter(num =>
//     num < 0)
//     console.log(numFall)

// Задача 10: Фильтрация объектов по наличию ключа

// Условие: Из массива объектов выберите только те, у которых есть ключ email.

// const users = [
//   { name: "Alice", email: "alice@example.com" },
//   { name: "Bob" },
//   { name: "Charlie", email: "charlie@example.com" },
//   { name: "Dave" }
// ];
// const usersName = users.filter(users =>
//     users.email)
//     console.log(usersName)

// Задача 11: Фильтрация строк, содержащих подстроку

// Условие: Из массива строк выберите только те, которые содержат подстроку “an”.

// const strings = ["banana", "apple", "orange", "mango", "grape"];
// const stringsFilter = strings.filter(strings =>
//     strings.toLocaleLowerCase().includes('an')
// )
// console.log(stringsFilter)

// Задача 12: Фильтрация кратных 3 чисел

// Условие: Отфильтруйте из массива только числа, которые делятся на 3, и выведите их.

// const numbers = [1, 3, 6, 8, 9, 12, 15, 20];
// const numbersEven = numbers.filter(numbers =>
//     numbers %3 ===0
// )
// console.log(numbersEven)

// Задача 13: Фильтрация объектов по значению ключа

// Условие: В массиве объектов выберите те, у которых role равно "admin".

// const users = [
//   { name: "Alice", role: "admin" },
//   { name: "Bob", role: "user" },
//   { name: "Charlie", role: "admin" },
//   { name: "Dave", role: "user" }
// ];
// const usersFilter = users.filter(users =>
//     users.role ==='admin'
// )
// console.log(usersFilter)

// Задача 14: Фильтрация строк, которые заканчиваются на “y”

// Условие: Из массива строк выберите только те, которые заканчиваются на букву “y”, и выведите их.

// const strings = ["berry", "apple", "cherry", "grape", "strawberry", "mango"];
// const stringsFilter = strings.filter(strings =>
//     strings.toLocaleLowerCase().endsWith('y')
// )
// console.log(stringsFilter)

// Задача 15: Фильтрация четных объектов по значению ключа

// Условие: В массиве объектов отфильтруйте те, у которых значение ключа value является четным числом.

// const items = [
//   { name: "Item 1", value: 5 },
//   { name: "Item 2", value: 8 },
//   { name: "Item 3", value: 12 },
//   { name: "Item 4", value: 7 }
// ]
// const itemsFilter = items.filter(items =>
//     items.value  %2 ===0
// )
// console.log(itemsFilter)


// ### Задача 1: Умножение всех чисел на 2
// Задача:
// Создайте массив чисел. Используйте метод map, чтобы создать новый массив, в котором каждое число умножено на 2.

// Пример:
// Для массива [1, 2, 3] новый массив должен быть [2, 4, 6].
// const num = [1, 2, 3]
// const numBig = num.map(num =>
//     num *2
// )
// console.log(numBig)
// ---

// ### Задача 2: Преобразование строк в заглавные буквы
// Задача:
// Создайте массив строк. Используйте метод map, чтобы создать новый массив, где каждая строка преобразована в заглавные буквы.

// Пример:
// Для массива ['привет', 'мир'] новый массив должен быть ['ПРИВЕТ', 'МИР'].

// const log= ['привет', 'мир']
// const logBig = log.map(log =>
//     log.toUpperCase()
// )
// console.log(logBig)

// ---

// ### Задача 3: Преобразование массива чисел в строки
// Задача:
// Дан массив чисел. Используйте map, чтобы создать новый массив, в котором все числа преобразованы в строки.

// Пример:
// Для массива [1, 2, 3, 4] новый массив должен быть ['1', '2', '3', '4'].
// const num = [1, 2, 3, 4]
// const string=num.map(item=>{
//     return item+'';
// })


// console.log(string);

// ---

// ### Задача 4: Добавление символов к строкам
// Задача:
// Создайте массив строк. Используйте map, чтобы создать новый массив, где к каждой строке добавлен символ "!" в конце.

// Пример:
// Для массива ['кот', 'собака', 'тигр'] новый массив должен быть ['кот!', 'собака!', 'тигр!'].
// const animals = ['кот', 'собака', 'тигр']
// const animalsVery = animals.map(animals =>
//     animals + '!'
// )
// console.log(animalsVery)


// ### Задача 5: Извлечение имён из массива объектов
// Задача:
// Дан массив объектов, где каждый объект представляет пользователя с полями name и age. Используйте метод map, чтобы создать новый массив, который содержит только имена пользователей.
// const users = [
//   { name: "Alice", role: "admin" },
//   { name: "Bob", role: "user" },
//   { name: "Charlie", role: "admin" },
//   { name: "Dave", role: "user" }
// ];
// const usersName = users.map(users =>
//     users.name
// )
// console.log(usersName)

// const findArr = users.find((item) =>{
//     return item.name =='Alice'
// }
// )
// console.log(findArr)

// find  , findindex , reduce изучить !!!
// ### Задача 1: Поиск первого чётного числа
// Задача:
// Дан массив чисел. Используйте метод find, чтобы найти первое чётное число в массиве.

// Пример:
// Для массива [1, 3, 7, 8, 10] функция должна вернуть 8.

// const fil = [1, 3, 7, 8, 10]
// const filFind = fil.find(fil =>
//   fil %2 === 0
// )
// console.log(filFind)
// ---


// ### Задача 2: Поиск строки с длиной больше 5 символов
// Задача:
// Создайте массив строк. Используйте метод find, чтобы найти первую строку, длина которой больше 5 символов.

// Пример:
// Для массива ['кот', 'собака', 'тигр', 'слон'] функция должна вернуть 'собака'.

// const animals = ['кот', 'собака', 'тигр', 'слон']
// const animalsFil = animals.find((item) =>{
//   return item.length > 5
// })
// console.log(animalsFil)

// ---

// ### Задача 3: Поиск числа больше 10
// Задача:
// Дан массив чисел. Используйте метод find, чтобы найти первое число, которое больше 10.

// Пример:
// Для массива [5, 9, 12, 3, 18] функция должна вернуть 12.

// const number = [5, 9, 12, 3, 18]
// const numberBig = number.find((item) =>{
//   return item > 10
// })
// console.log(numberBig)

// ---

// ### Задача 4: Поиск объекта с определённым именем
// Задача:
// Дан массив объектов, каждый объект представляет пользователя с полями name и age. Используйте метод find, чтобы найти объект с именем "Мария".

// Пример:
// Для массива:

// Функция должна вернуть объект { name: 'Мария', age: 17 }.
// const user = [
//   { name: 'Алекс', age: 25 },
//   { name: 'Мария', age: 17 },
//   { name: 'Иван', age: 19 }
// ]
// const userName = user.find((item) =>{
//   return item.name =='Мария'
// })
// console.log(userName)

// ---

// ### Задача 5: Поиск первого отрицательного числа
// Задача:
// Дан массив чисел. Используйте метод find, чтобы найти первое отрицательное число в массиве.

// Пример:
// Для массива [3, 5, -2, -8, 7] функция должна вернуть -2.
// const num = [ 3, 5, -2, -8, 7]
// const numMinus = num.find((item) =>{
//   return item < 0
// })
// console.log(numMinus)
// Вот обновленный список задач, где для каждой задачи можно использовать только метод reduce. Примеры массивов включены.

// ### Задание 1: Сумма чисел
// Напиши функцию, которая принимает массив чисел и возвращает их сумму, используя только reduce.

// Пример массива:
// const arr = [1, 2, 3, 4, 5]
// const sum = arr.reduce((prev , item) =>{
//     return prev + item
// },0)
// console.log(sum)

// ### Задание 2: Произведение чисел
// Создай функцию, которая принимает массив чисел и возвращает их произведение с помощью только reduce.

// Пример массива:
// const num =[1, 2, 3, 4]
// const arr = num.reduce((prev,item) =>{
//    return item * prev
// },1)
// console.log(arr)
// ### Задание 3: Поиск максимального числа
// Используя только reduce, напиши функцию, которая находит и возвращает максимальное число в массиве.

// Пример массива:
// const num =[10, 5, 8, 20, 3]
// const numBig = num.reduce((prev,item) =>{
// return  prev > item ? prev : item
// },0)
// console.log(numBig)

// ### Задание 4: Поиск минимального числа
// Напиши функцию, которая с помощью только reduce находит и возвращает минимальное число в массиве.

// Пример массива:
// const num =[10, 5, 8, 20, 3]
// const numMini = num.reduce((prev,item)=>{
// return prev < item ? prev : item
// })
// console.log(numMini)
// ### Задание 5: Объединение чисел в строку
// Создай функцию, которая принимает массив чисел и возвращает строку, состоящую из всех элементов массива, соединённых без пробелов, используя только reduce.

// Пример массива:
// const num =[1, 2, 3, 4, 5]
// const str = num.reduce((prev,item)=>{
//     return prev + item
// }, "")
// console.log(str)
// ### Задание 6: Сумма значений по ключу
// Дан массив объектов, каждый из которых содержит числовое свойство value. Напиши функцию, которая с помощью только reduce суммирует все значения value.

// Пример массива:
// const arr =[{ value: 10 }, { value: 20 }, { value: 30 }]
// const sum = arr.reduce((prev,item)=>{
//     return prev + item.value
// },0)
// console.log(sum)
// ### Задание 7: Подсчет количества определенных значений
// Дан массив, содержащий только строки "да" и "нет". Напиши функцию, которая с помощью только reduce подсчитывает количество строк "да".

// Пример массива:
// const arr =["да", "нет", "да", "нет", "да"]
// const yes = arr.reduce((prev,item)=>{
//     return item === "да" ? prev+1  :  prev
// },0)
// console.log(yes)
// ### Задание 8: Удаление дубликатов
// Напиши функцию, которая с помощью только reduce удаляет дубликаты из массива.

// Пример массива:
// const num =[1, 2, 2, 3, 4, 4, 5]

// ### Задание 9: Подсчет частоты элементов
// Дан массив чисел. Напиши функцию, которая с помощью только reduce подсчитывает, сколько раз каждое число встречается в массиве и возвращает объект с результатом.

// Пример массива:
// [1, 2, 2, 3, 3, 3, 4]

// ### Задание 10: Обратный порядок чисел
// Напиши функцию, которая с помощью только reduce переворачивает массив чисел в обратном порядке.

// Пример массива:
// [1, 2, 3, 4, 5]

// Эти задачи помогут ученикам лучше понять и освоить работу метода reduce, избегая использования других методов и функций.
// *********************************************************************


// ‘’’

//  1. Добавление только чётных чисел в новый массив:
// Дан массив с числами. Используя forEach() и if, добавь в новый массив только чётные числа.
// Исходный массив:

// let num = [1, 2, 3, 4, 5, 6];
// const even = []
// num.forEach(item=>{
//     if(item%2===0){
//         even.push(item)
//     }
// })

// console.log(even)

//  2. Добавление только строк длиннее 5 символов:
// Дан массив строк. Используя forEach() и условие if, добавь в новый массив только строки длиной более 5 символов.
// Исходный массив:

// let strings = ["apple", "banana", "cherry", "date"];
// const str = []
// strings.forEach(item =>{
//     if(item.length > 5){
//        str.push(item)
//     }
// })
// console.log(str)


//  3. Копирование элементов, которые начинаются с гласной:
// Дан массив строк. Используя forEach() и if, добавь в новый массив только те строки, которые начинаются с гласной.
// Исходный массив:

// let words = ["apple", "pear", "orange", "grape", "apricot"];


//  4. Фильтрация массива по положительным и отрицательным числам:
// Дан массив чисел. Раздели массив на два: положительные числа в одном массиве и отрицательные в другом, используя forEach() и if/else.
// Исходный массив:

// let numbers = [-5, 3, -2, 8, 0, -1, 7];
// const num = []
// const asd =[]
// numbers.forEach(numbers =>{
//     if(numbers  >0){
//       num.push(asd)
//     }
//     else{
//         asd.push(num)
//     }
// })
// console.log(num)
// console.log(asd)


//  5. Добавление уникальных значений:
// Дан массив с повторяющимися числами. Используя forEach() и if, добавь в новый массив только уникальные значения.
// Исходный массив:

// let numbers = [1, 2, 3, 2, 4, 1, 5];


//  6. Создание массива строк, которые не содержат цифры:
// Дан массив строк. Используя forEach() и if, добавь в новый массив только те строки, которые не содержат цифры.
// Исходный массив:

// let strings = ["hello", "world1", "test", "abc123", "example"];


//  7. Добавление объектов с определённым свойством:
// Дан массив объектов. Используя forEach() и if, добавь в новый массив только те объекты, которые содержат определённое свойство.
// Исходный массив:

// let users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie" },
//   { name: "Dave", age: 22 }
// ];


//  8. Фильтрация по рейтингу:
// Дан массив объектов с фильмами, у каждого есть поле “рейтинг”. Используя forEach() и if, добавь в новый массив только фильмы с рейтингом выше 7.
// Исходный массив:

// let movies = [
//   { title: "Movie 1", rating: 6.5 },
//   { title: "Movie 2", rating: 8.3 },
//   { title: "Movie 3", rating: 7.2 },
//   { title: "Movie 4", rating: 5.8 }
// ];


//  9. Добавление слов с нечетным количеством букв:
// Дан массив слов. Используя forEach() и if, добавь в новый массив только те слова, у которых нечетное количество букв.
// Исходный массив:

// let words = ["one", "two", "three", "four", "five"];


//  10. Добавление чисел в два массива по условию:
// Дан массив чисел. Используя forEach() и if/else, раздели их на два массива: числа меньше 10 в один, а числа больше или равны 10 — в другой.
// Исходный массив:

// let numbers = [4, 12, 7, 19, 3, 10];



// ’’’


// const words = "a b c d e "
// const arr = words.split("")
// console.log(arr)


// 1. Разбиение строки на массив слов:
// Дан текст: "Привет, как дела?". Используя split(), разбей строку на массив отдельных слов.

// const text = "приыет, как дела?"
// const arr= text.split(" ")
// console.log(arr)
// 3. Создание строки из массива:
// Дан массив слов: ["Привет", "мир", "!"]. Используя join(), соедини массив в одну строку с пробелами между словами.

// const text = ["Привет", "мир", "!"]
// const rell = text.join(" ")
// console.log(rell)

// console.log(Math.round(4.3))
// console.log(Math.floor(4.8))
// console.log(Math.ceil(4.2))


// Math.random,

// ### Задача 1: Случайное число в диапазоне
// Напиши функцию, которая принимает два числа, min и max, и возвращает случайное целое число в диапазоне от min до max включительно.


// ### Задача 2: Создание массива случайных чисел
// Создай функцию, которая принимает один параметр n и возвращает массив, содержащий n случайных чисел от 0 до 100.

// ### Задача 3: Фильтрация четных чисел
// Создай функцию, которая принимает массив чисел и возвращает новый массив, состоящий только из четных чисел. Используй Math.random для генерации исходного массива чисел (например, длиной 10).

// ### Задача 4: Подсчет чисел больше 50
// Напиши функцию, которая генерирует массив из 20 случайных чисел от 0 до 100, а затем возвращает количество чисел больше 50.

// ### Задача 5: Проверка на уникальность
// Создай функцию, которая генерирует массив из 15 случайных чисел от 0 до 20 и возвращает новый массив, оставляя только уникальные значения.

// ### Задача 6: Случайный выбор из массива
// Напиши функцию, которая принимает массив и возвращает случайный элемент из этого массива.

// Пример массива:
// ["apple", "banana", "cherry", "date"]

// ### Задача 7: Генерация массива с диапазоном
// Напиши функцию, которая генерирует массив из n случайных чисел, каждый из которых находится в диапазоне от min до max (оба значения включительно).

// ### Задача 8: Проверка на попадание в диапазон
// Создай функцию, которая принимает массив чисел и проверяет, есть ли среди них хотя бы одно число в диапазоне от 30 до 70. Возвращает true, если такое число есть, и false в противном случае.

// ### Задача 9: Преобразование чисел
// Создай функцию, которая генерирует массив из 10 случайных чисел от 1 до 100 и возвращает новый массив, в котором к каждому числу прибавлено случайное число от 1 до 10.

// ### Задача 10: Подсчет чисел в заданном диапазоне
// Напиши функцию, которая создает массив из 30 случайных чисел от 0 до 200 и возвращает количество чисел, находящихся в диапазоне от 50 до 150.
// Math.round.

// ### Задача 1: Округление до ближайшего целого
// Напиши функцию, которая принимает число с десятичной частью и возвращает его, округлённым до ближайшего целого с помощью Math.round.

// Пример:
// // Вход: 4.6
// // Выход: 5

// let num = +prompt()
// const numPrompt = Math.round(num)
// console.log(numPrompt)
// ### Задача 2: Округление чисел в массиве
// Создай функцию, которая принимает массив чисел с десятичными значениями и возвращает новый массив, где каждое число округлено до ближайшего целого.

// Пример массива:
// const floatArr= [3.1, 2.7, 4.4, 5.5]
// const numArr = []
// floatArr.forEach((item) =>{
//     numArr.push(Math.round(item))
// })
// console.log(numArr)

// ### Задача 3: Округление суммы чисел
// Напиши функцию, которая принимает два числа с десятичными значениями, суммирует их и возвращает округленный до ближайшего целого результат.

// Пример:
// // Вход: 3.6, 4.2
// // Выход: 8
// let num =+ prompt()
// let num2 =+ prompt()
// let sum = num + num2 
// console.log(Math.round(sum));

// ### Задача 4: Округление среднего значения массива
// Создай функцию, которая принимает массив чисел, вычисляет их среднее значение и возвращает его округленным до ближайшего целого.

// Пример массива:
// const num = [1.5, 2.5, 3.5, 4.5]
// let done = []
// num.forEach((item) =>{
//     done += item

// })
// done /= num.length
// console.log(done);

// ### Задача 5: Округление цен до целого числа
// Напиши функцию, которая принимает массив цен товаров и возвращает массив округленных цен до ближайшего целого числа.

// Пример массива:
// [12.3, 45.7, 22.8, 19.9]

// ### Задача 6: Округление до 5
// Создай функцию, которая принимает число и округляет его до ближайшего значения, кратного 5, используя Math.round.

// Пример:
// // Вход: 23
// // Выход: 25

// ### Задача 7: Округление до десятых
// Напиши функцию, которая принимает число и округляет его до одного знака после запятой с помощью Math.round.

// Пример:
// // Вход: 3.456
// // Выход: 3.5

// ### Задача 8: Округление чисел в пределах диапазона
// Создай функцию, которая генерирует массив из 10 случайных чисел от 1 до 100, округляет их до ближайшего целого, а затем возвращает только числа, попадающие в диапазон от 20 до 80.

// ### Задача 9: Округление дробной части
// Напиши функцию, которая принимает число и округляет только его дробную часть до одного знака после запятой.

// Пример:
// // Вход: 5.678
// // Выход: 5.7

// ### Задача 10: Округление времени
// Создай функцию, которая принимает время в формате чч.мм (например, 9.45 для 9:27 утра), округляет минуты до ближайших 30 минут и возвращает время в новом формате.

// Пример:
// // Вход: 9.27
// // Выход: 9.30

// ### Задача 5: Округление цен вниз
// Напиши функцию, которая принимает массив цен товаров и возвращает массив 
// округленных 
// цен вниз до ближайшего целого числа.

// const num = [12.3, 45.7, 22.8, 19.9];
// const look = num.map((item) => Math.floor(item));

// console.log(look); 

// ### Задача 6: Округление до 5
// Создай функцию, которая принимает число и округляет его вниз до ближайшего значения, кратного 5, используя Math.floor.

// Пример:
// // Вход: 23
// // Выход: 20

// let num =+ prompt("введите число")
// let num =+ prompt("введите число")

// console.log(Math.round(Math.random()*100 +50))