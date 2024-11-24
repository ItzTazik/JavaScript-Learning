const contribution = 12000;
const houseCost = 13500;
const rate = 0.07;
const result = contribution * (1 + rate / 12) ** 24;

console.log(result);

if (result > 13500){
    console.log(`Он сможет купить дом у него останется. ${result - houseCost}$`);
    console.log(`у него останется ${result - houseCost}$`);
} else{
    console.log("ему не хватит денег");
}