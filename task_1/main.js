'use strict';

var money;
var time;
var timeData;
var article = [];
var amount = [];
var expenses = {
    article: [],
    amount: []
};
var optionalExpenses = {
    
}

money = prompt("Ваш бюджет на месяц?", "100");
    // console.log(money);
time = prompt("Введите дату в формате YYYY-MM-DD", "2019-02-01");
    // console.log(time);
timeData = time;
var appData = {
    money,
    timeData,
    expenses, // обязательная статья расходов
    optionalExpenses,
    income: [0],
    savings: false
};

for(var i = 0; i < 2;  i++) {
expenses.article[i] = 
    prompt("Введите обязательную статью расходов в этом месяце","Налог");
// console.log(article[i]);

expenses.amount[i] = 
    prompt("Во сколько обойдется?","50");
// console.log(amount[i]);
}

alert("Бюджет на 1 день " + (+money - +expenses.amount[0] - +expenses.amount[1]) / 30);
// console.log(money,expenses.amount[0],expenses.amount[1])