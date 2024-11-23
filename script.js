const paymentPerHour = 80;
const hoursForWork = 40;

const workDays = 11 - 2;
const workHours = workDays * 5;

console.log('Can I do this work? ' + (hoursForWork <= workHours));
console.log('Payment: ' + hoursForWork * paymentPerHour + '$');