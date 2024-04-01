#! /usr/bin/env node
import inquirer from "inquirer";
let balance = 10000;
let pinCode = 1979;
let pinAns = await inquirer.prompt([
    {
        message: "Enter Your Pin",
        type: "number",
        name: "pinAnswer"
    }
]);
if (pinAns.pinAnswer === pinCode) {
    console.log("Correct Pin Code!");
    let procedureAns = await inquirer.prompt([
        {
            message: "What you want to do?",
            type: "list",
            name: "procedure",
            choices: ["Withdraw", "Chech Balance"]
        }
    ]);
    if (procedureAns.procedure === "Withdraw") {
        let withdrawAmount = await inquirer.prompt([
            {
                message: "How much amount you want to withdraw",
                type: "number",
                name: "amount"
            }
        ]);
        balance -= withdrawAmount.amount;
        if (withdrawAmount.amount <= balance) {
            console.log(`Your remaining amount is : ${balance}`);
        }
        else {
            console.log("insufficient Balance");
        }
    }
    else {
        console.log(`Your balance is : ${balance}`);
    }
}
else {
    console.log("Incorrect Pin Code!");
}
