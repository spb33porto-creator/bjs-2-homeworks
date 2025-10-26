// Задание 1
function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    return arr1.every((el, idx) => el === arr2[idx]);
}

// Тестируем функцию compareArrays
console.log("Тестируем compareArrays:");
console.log(compareArrays([8, 9], [6]) ? "✅ PASSED" : "❌ FAILED");
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]) ? "✅ PASSED" : "❌ FAILED");
console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4]) ? "✅ PASSED" : "❌ FAILED");
console.log(compareArrays([1, 2, 3], [2, 3, 1]) ? "✅ PASSED" : "❌ FAILED");
console.log(compareArrays([8, 1, 2], [8, 1, 2]) ? "✅ PASSED" : "❌ FAILED");

// Задание 2
function getUsersNamesInAgeRange(users, gender) {
    const filteredUsers = users.filter(user => user.gender === gender);
    if (!filteredUsers.length) return 0;

    const totalAge = filteredUsers.reduce((sum, user) => sum + user.age, 0);
    return Math.round(totalAge / filteredUsers.length * 10) / 10;
}

// Данные для второго задания
const people = [
  { firstName: "Александр", secondName: "Карпов", age: 17, gender: "мужской" },
  { firstName: "Егор", secondName: "Морозов", age: 21, gender: "мужской" },
  { firstName: "Мелисса", secondName: "Леонова", age: 40, gender: "женский" },
  { firstName: "Мелания", secondName: "Савельева", age: 37, gender: "женский" },
  { firstName: "Мария", secondName: "Овчинникова", age: 18, gender: "женский" },
  { firstName: "Марьяна", secondName: "Котова", age: 17, gender: "женский" },
  { firstName: "Фёдор", secondName: "Селезнёв", age: 50, gender: "мужской" },
  { firstName: "Георгий", secondName: "Петров", age: 35, gender: "мужской" },
  { firstName: "Даниил", secondName: "Андреев", age: 49, gender: "мужской" },
  { firstName: "Дарья", secondName: "Савельева", age: 25, gender: "женский" },
  { firstName: "Михаил", secondName: "Шаров", age: 22, gender: "мужской" },
  { firstName: "Владислав", secondName: "Давыдов", age: 40, gender: "мужской" },
  { firstName: "Илья", secondName: "Казаков", age: 35, gender: "мужской" },
  { firstName: "Евгений", secondName: "Кузьмин", age: 19, gender: "мужской" },
];

// Тестируем функцию getUsersNamesInAgeRange
console.log("\nТестируем getUsersNamesInAgeRange:");
console.log(`Средний возраст мужчин: ${getUsersNamesInAgeRange(people, "мужской")}`); // Должно вывести 32
console.log(`Средний возраст женщин: ${getUsersNamesInAgeRange(people, "женский")}`); // Должно вывести 27.4
console.log(`Возвращает 0 для пустого списка: ${getUsersNamesInAgeRange([], "женский")}`); // Должно вывести 0
console.log(`Возвращает 0 для несуществующего пола: ${getUsersNamesInAgeRange(people, "инопланетянин")}`); // Должно вывести 0