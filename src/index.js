module.exports = function toReadable (number) {
  const numZeroNineteen = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  const numDozens = ['zero','ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  const numInMas = String(number).split('');

  let outStr;
  if (numInMas.length === 3 && number % 100 === 0){
   outStr = `${numZeroNineteen[numInMas[0]]} hundred`;
  } else if (numInMas.length === 2 && number % 10 === 0){
    outStr = `${numDozens[numInMas[0]]}`;
  } else if (number <= 19){
   outStr = `${numZeroNineteen[number]}`;
  } else if (numInMas.length === 3 && number % 100 <= 19){
    outStr = `${numZeroNineteen[numInMas[0]]} hundred ${numZeroNineteen[number % 100]}`; 
  } else if (numInMas.length === 3 && number % 100 > 19 && number % 10 !== 0){
    outStr = `${numZeroNineteen[numInMas[0]]} hundred ${numDozens[numInMas[1]]} ${numZeroNineteen[numInMas[2]]}`; 
  } else if (numInMas.length === 3 && number % 100 > 19 && number % 10 === 0){
    outStr = `${numZeroNineteen[numInMas[0]]} hundred ${numDozens[numInMas[1]]}`; 
  } else if (numInMas.length === 2 && number > 19){
    outStr = `${numDozens[numInMas[0]]} ${numZeroNineteen[numInMas[1]]}`;
  };
  return outStr;
}

