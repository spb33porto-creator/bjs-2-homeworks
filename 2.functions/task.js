#Задание_1
// Функция getArrayParams принимает произвольное количество чисел через rest-параметр arr
const getArrayParams = (...arr) => {
    if (!arr.length) return null; // Если массив пустой, вернем null

    let min = Infinity;   // Начальное значение минимального элемента
    let max = -Infinity;  // Начальное значение максимального элемента
    let sum = 0;          // Сумма элементов для подсчета среднего

    // Проходим по каждому элементу массива
    for (let num of arr) {
        if (num > max) max = num;     // Обновляем максимальный элемент
        if (num < min) min = num;     // Обновляем минимальный элемент
        sum += num;                   // Добавляем текущий элемент к общей сумме
    }

    const avg = Number((sum / arr.length).toFixed(2)); // Вычисляем среднее и округляем до 2-х знаков после запятой

    return {min, max, avg}; // Возвращаем объект с результатами
};

// Примеры использования:
console.log(getArrayParams(-99, 99, 10));      // { min: -99, max: 99, avg: '3.33' }
console.log(getArrayParams(1, 2, 3, -100, 10)); // { min: -100, max: 10, avg: '-16.80' }
console.log(getArrayParams(5));                 // { min: 5, max: 5, avg: '5.00' }

#Задание_2
// Насадка №1: Найти сумму элементов
const summElementsWorker = function(...args) {
    if (!args.length) return 0;
    return args.reduce((acc, val) => acc + val, 0);
};

// Насадка №2: Разница между максимальным и минимальным элементами
const differenceMaxMinWorker = function(...args) {
    if (!args.length) return 0;
    const maxValue = Math.max(...args); // Максимальное значение
    const minValue = Math.min(...args); // Минимальное значение
    return maxValue - minValue;
};

// Насадка №3: Разница между суммой четных и суммой нечетных элементов
const differenceEvenOddWorker = function(...args) {
    if (!args.length) return 0;
    let sumEvenElements = 0; // Для четных элементов
    let sumOddElements = 0;  // Для нечетных элементов
    for (let i = 0; i < args.length; i++) {
        if (args[i] % 2 === 0) { // Четное число
            sumEvenElements += args[i];
        } else {                  // Нечетное число
            sumOddElements += args[i];
        }
    }
    return sumEvenElements - sumOddElements;
};

// Насадка №4: Среднее значение четных элементов
const averageEvenElementsWorker = function(...args) {
    if (!args.length) return 0;
    let sumEvenElements = 0;    // Накопление суммы четных элементов
    let countEvenElements = 0;  // Подсчет количества четных элементов
    for (let i = 0; i < args.length; i++) {
        if (args[i] % 2 === 0) { // Проверка на четность
            sumEvenElements += args[i]; // Увеличение суммы четных элементов
            countEvenElements++;        // Увеличение количества четных элементов
        }
    }
    return countEvenElements ? sumEvenElements / countEvenElements : 0;
};

// Тестовые примеры для проверки работоспособности функций
console.log('--- Test Summ Elements Worker ---');
console.log(summElementsWorker()); // Результат: 0
console.log(summElementsWorker(10, 10, 11, 20, 10)); // Результат: 61

console.log('\n--- Test Difference Max and Min Worker ---');
console.log(differenceMaxMinWorker()); // Результат: 0
console.log(differenceMaxMinWorker(10, 10, 11, 20, 10)); // Результат: 10

console.log('\n--- Test Difference Even Odd Worker ---');
console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17)); // Результат: 53
console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // Результат: -269

console.log('\n--- Test Average of Even Elements Worker ---');
console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)); // Результат: 5
console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // Результат: 38

#Задание_3
// Предыдущие функции-насадки остаются неизменными, вот лишь основная функция мясорубки:

// Функция мясорубки: принимает массив массивов и функцию-насадку,
// возвращает наибольшее значение после применения насадки к каждому вложенному массиву
function makeWork(arrOfArr, func) {
    // Начнем с отрицательной бесконечности, чтобы гарантированно переопределить первое же положительное значение
    let maxWorkerResult = -Infinity;

    // Перебираем все вложенные массивы
    for (let subArray of arrOfArr) {
        // Передаем текущий массив внутрь насадки с помощью spread оператора
        const currentResult = func(...subArray);

        // Если полученный результат больше текущего максимума, обновляем максимум
        if (currentResult > maxWorkerResult) {
            maxWorkerResult = currentResult;
        }
    }

    // Возвращаем найденный максимум
    return maxWorkerResult;
}

// ТЕСТИРОВАНИЕ ФУНКЦИИ MAKEWORK
const arr = [
    [10, 10, 11, 20, 10],
    [67, 10, 2, 39, 88],
    [72, 75, 51, 87, 43],
    [30, 41, 55, 96, 62]
];

// Ранее объявленные функции-насадки summElementsWorker, differenceMaxMinWorker, differenceEvenOddWorker, averageEvenElementsWorker оставлены прежними.

// Пример использования функции makeWork
console.log(makeWork(arr, summElementsWorker)); // ожидаемый результат: 328
console.log(makeWork(arr, differenceMaxMinWorker)); // ожидаемый результат: 86
console.log(makeWork(arr, differenceEvenOddWorker)); // ожидаемый результат: 92
console.log(makeWork(arr, averageEvenElementsWorker)); // ожидаемый результат: 72