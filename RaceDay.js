let raceNumber = Math.floor(Math.random() * 1000);

const registerEarly = false;

const age = 18;

if(age>18 && registerEarly){
  raceNumber +=1000;
}

if (registerEarly && age>18){
  console.log(`Race will start at 9.30 am, Your race number is: ${raceNumber}.`)
}

else if (age>18 && !registerEarly){
  console.log(`Race will start at 11.00 am. Your race number is ${raceNumber}`)
}

else if(age < 18){
  console.log(`Race will start at 12.30 pm. Your race number is ${raceNumber} `)
}
else{
  console.log('Please approach the registration desk, thanks in advance!')
}
