#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

const currency : any=
{
    USD:1,//base currency
    EUR:0.91,
    GBP:0.76,
    INR:74.57,
    PKR:280
};

let user_answer = await inquirer.prompt
(
    [
        {
            name: "from",
            message:chalk.cyanBright("Enter From Currency"),
            type: "list",
            choices:['USD','EUR','GBP','INR','PKR',],
        },
        {
            name: "to",
            message:chalk.cyanBright("Enter To Currenct"),
            type: "list",
            choices:['USD','EUR','GBP','INR','PKR',],
        },
        {
            name: "amount",
            message:chalk.cyanBright("Enter Your Amount"),
            type: 'number',

        }
    ]
)

let fromAmount = currency [user_answer.from] //exchange rate
let toAmount = currency [user_answer.to] //exchange rate
let amount = user_answer.amount
let baseAmount = amount/fromAmount //USD base currency 
let convertedAmount = baseAmount * toAmount

console.log(chalk.blueBright(convertedAmount))