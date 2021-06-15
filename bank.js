let depositAmount = prompt(`Укажите сумму депозита`, "");
let firstMonth = depositAmount * 0.05;
let secondMonth = (+firstMonth + +depositAmount) * 0.05;
alert(`За 2 месяца, при ставке 5% годовых, сумма начисленных процентов составит ${firstMonth + secondMonth}`);