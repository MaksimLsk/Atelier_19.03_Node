import chalk from "chalk";


const team = ["Rostom", "Charlotte", "Loic", "Adeline"];
const colors = ["red", "blue", "yellow", "green"];

for (let i = 0; i < team.length; i++) {
    console.log(chalk[colors[i]](team[i]));
}