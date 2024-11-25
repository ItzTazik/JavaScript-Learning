function countDepositeSum(depositInUsd, month, rate){
return depositInUsd * (1 + rate / 12) ** month;
}

const sum = countDepositeSum(prompt("Впишите свой депозит"), prompt("Впишите срок хранения в месяцах"), prompt("Впишите ставку (дробь писать через точку)"));
console.log(sum);