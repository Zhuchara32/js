let distanceCities = prompt(`Укажите дистанция между городами`, "");
let timeToGet = prompt(`Укажите время, за которое хотите добраться`, "");
let speed = distanceCities / timeToGet;
alert(`Скорость с которой Вам необходимо двигаться ${speed}`);