let allMoney = prompt(`Укажите: сколько денег у Вас?`, "");
let priceChocolate = prompt(`Укажите цену шоколадки`, "");
alert(`Вы можете купить ${allMoney / priceChocolate} шоколадок`);
alert(`И Ваша сдача составит ${allMoney % priceChocolate} денег`)