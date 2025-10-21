"use strict";

// Функция для решения квадратного уравнения ax^2 + bx + c = 0
function solveEquation(a, b, c) {
    const d = b * b - 4 * a * c;

    if (d < 0) {
        return []; // Нету вещественных корней
    } else if (d === 0) {
        const x = -b / (2 * a);
        return [x]; // Единственный корень
    } else {
        const sqrtD = Math.sqrt(d);
        const x1 = (-b + sqrtD) / (2 * a);
        const x2 = (-b - sqrtD) / (2 * a);
        return [x1, x2].sort((a, b) => a - b); // Возвращаем отсортированные корни
    }
}

// Тестирование функции
(function () {
    try {
        console.log("Тестирование функции solveEquation:");

        // Пример 1: уравнение x^2 - 3x + 2 = 0
        const result1 = solveEquation(1, -3, 2);
        console.assert(JSON.stringify(result1) === JSON.stringify([1, 2]), 'Test failed: x^2 - 3x + 2');

        // Пример 2: уравнение x^2 + 2x + 1 = 0
        const result2 = solveEquation(1, 2, 1);
        console.assert(JSON.stringify(result2) === JSON.stringify([-1]), 'Test failed: x^2 + 2x + 1');

        // Пример 3: уравнение x^2 + 1 = 0
        const result3 = solveEquation(1, 0, 1);
        console.assert(JSON.stringify(result3) === JSON.stringify([]), 'Test failed: x^2 + 1');

        console.log("✅ All tests passed!");
    } catch (err) {
        console.error(err.message || err);
    }
})();




#Задание_2

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    // Преобразуем все аргументы в числа
    percent = Number(percent);
    contribution = Number(contribution);
    amount = Number(amount);
    countMonths = Number(countMonths);

    // Проверка корректности ввода
    if (!isFinite(percent) || !isFinite(contribution) || !isFinite(amount) || !isFinite(countMonths)) {
        return false;
    }

    // Перевод годовой процентной ставки в месячную и нормализуем к числу от 0 до 1
    const monthlyRate = percent / 100 / 12;

    // Рассчитываем тело кредита (основная сумма кредита)
    const loanBody = amount - contribution;

    // Если сумма кредита равна начальному взносу, то ничего платить не придется
    if (loanBody <= 0) {
        return 0;
    }

    // Расчет ежемесячного платежа
    const paymentPerMonth = loanBody *
                           (monthlyRate +
                            monthlyRate /
                              ((Math.pow(1 + monthlyRate, countMonths)) - 1));

    // Общая сумма выплат (ежемесячный платеж × количество месяцев + первоначальный взнос)
    const totalPayment = paymentPerMonth * countMonths + contribution;

    // Округлим результат до двух знаков после запятой
    return parseFloat(totalPayment.toFixed(2));
}

// Примеры использования функции
console.log(calculateTotalMortgage(10, 0, 50000, 12));    // 52749.53
console.log(calculateTotalMortgage(10, 1000, 50000, 12)); // 51694.54
console.log(calculateTotalMortgage(10, 0, 20000, 24));    // 22149.56
console.log(calculateTotalMortgage(10, 1000, 20000, 24)); // 21042.09
console.log(calculateTotalMortgage(10, 20000, 20000, 24));// 0
console.log(calculateTotalMortgage(10, 0, 10000, 36));    // 11616.19
console.log(calculateTotalMortgage(15, 0, 10000, 36));    // 12479.52