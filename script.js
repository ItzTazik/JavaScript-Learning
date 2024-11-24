const verification = prompt(`Подтвердите, что вы не робот. Введите сумму или разность чисел 7 и 15`)

switch(true){
    case Number(verification) === 22:
    case Number(verification) === -8:
    case verification === "Я не робот!":
            console.log("Успех!"); 
            break;
     default: console.log("Вы робот!")
}