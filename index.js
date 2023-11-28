const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um número: ', (answer) => {
  const number = parseInt(answer, 10); 
  console.log("Somatório: " + sum(number - 1));
  rl.close();
});

function sum(number){
  if(number < 3) {
    return 0
  }
  if(number % 5 == 0 || number % 3 == 0){
    return number + sum(number - 1)
  } 
  else {
    return sum(number -1)
  }
}

