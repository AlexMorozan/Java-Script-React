'use strict';
let money = +prompt("какой ваш бюджет на месяц"),
    time = prompt("Введите дату в формате YYYY-MM-DD");


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpense: {},
    income: [],
    saving: false,
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце"),
        b = prompt("Во сколько обойдется?");

    if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != "" && b != "" && a.length < 50 && b.length < 50) {
        console.log("gud");
        appData.expenses[a] = b;
    } else {

    }
};
appData.moneyPerDay = appData.budget / 30;
alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровеньдостатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Уровень достатка віше среднего");
} else{
    console.log("Произошла ошибка");
};