#! /usr/bin/env node

import inquirer from "inquirer";

//Initialize user balance and pin code
let myBalance = 70000;
let myPIN = 43210;

//printe welcome message
console.log("welcome to code with samavia - ATM-Machine");

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin code"
    }
])
if (pinAnswer.pin === myPIN){
    console.log("pin is correct, login successfully!");
  //  console.log(`Current Account Balance is ${myBalance}`)

    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "select an operation:",
            choices: ["withdraw Ammount" , "fast cash", "Check Balance"]
        }
    ]) 

    if(operationAns.operation ==="withdraw Ammount"){
       let amountAns = await inquirer.prompt([
           {
             name: "amount",
             type: "number",
             message: "Enter the amount to withdraw:"
           }
       ])
       if(amountAns.amount > myBalance){
          console.log("Insufficient Balance");
       }
       else{
          myBalance -= amountAns.amount;
         console.log(`${amountAns.amount} Withdraw Successfully`);
         console.log(`Your Remaining Balance is: ${myBalance}`)
       }
    }
    else if (operationAns.operation === "fast cash"){
        let fast = await inquirer.prompt(
            [
                {
                    name: "fastcash",
                    message: "Select the amount which you withdraw",
                    type: "list",
                    choices: [1000,2000,5000,10000]
                }
            ]
        );
        myBalance -= fast.fastcash;
        console.log(`You have successfully withdraw ${fast.fastcash}\your remaining balance is ${myBalance}`)

        
        
    }

    else if (operationAns.operation === "Check Balance"){
        console.log(`Your Account Balance is ${myBalance}`);
    }
}
else{
    console.log("Pin is Incorrect,Try Again");
}

