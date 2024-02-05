import chalk from "chalk";
import inquirer from "inquirer";

console.log(chalk.yellow.italic("Hello to Noyan's Hell"));
class Erturul {
  name:string;
  energy:number=100

  constructor(name:string){
    this.name=name
  }
  energyDecrese(){
    this.energy = this.energy-25
    this.energy = this.energy
  }

  energyIncrease(){
    this.energy= 100
  }
}

class Noyan{
  name:string;
  energy:number=100

  constructor(name:string){
    this.name=name
  }
 energyDecrese(){
  this.energy= this.energy-25
  this.energy=this.energy
 }

 energyIncrease(){
  this.energy= 100
 }
}

let E1 = new Erturul(Erturul.name)
let N1 = new Noyan(Noyan.name)
do{
  let answer= await inquirer.prompt({
    type:"list",
    choices:["Erturul","Noyan"],
    name:"play",
    message:"Select any one chararacter"
 })
 if(answer.play =="Erturul"){
  let Erturul = await inquirer.prompt({
    type:"list",
    name:"select",
    message:"Select any one:",
    choices:["Take Ayran","Talking to Halima","Fight aganist Noyan"]
   })
   
    if(Erturul.select == "Take Ayran"){
    E1.energyIncrease()
    console.log(`${chalk.green.bold.italic(E1.name)} energy is ${chalk.green.bold.italic(E1.energy)}`);
    }
    if(Erturul.select == "Talking to Halima"){
      console.log(chalk.green.italic("EVALLLAH")); 
    }
    if(Erturul.select=="Fight aganist Noyan"){
      let num =Math.floor(Math.random() *2)
       if(num > 0){
        E1.energyDecrese()
         console.log(`${chalk.gray.bold.italic(E1.name)} energy =  ${chalk.gray.bold.italic(E1.energy)}`);
         console.log(`${chalk.gray.bold.italic(N1.name)} energy =  ${chalk.gray.bold.italic(N1.energy)}`); 
         process.exit()       
        }
       if(num <= 0){
        N1.energyDecrese()
       console.log(`${chalk.grey.bold.italic(N1.name)} energy = ${chalk.grey.bold.italic(N1.energy)}`);
       console.log(`${chalk.greenBright.bold.italic(E1.name)} energy = ${chalk.greenBright.bold.italic(E1.energy)}`);
       process.exit() 
      }
    }
  }
 if (answer.play == "Noyan"){
  let ans1= await inquirer.prompt({
    type:"list",
    name:"select",
    message:"Select any one",
    choices:["Dancsing" , "irritating Erturul" , "Eating lamb"]
   })
   if(ans1.select== "Dancsing"){
    console.log(chalk.blue.bold("lets dance!"));
   }
   if(ans1.select=="irritating Erturul"){
    let num =Math.floor(Math.random() *2)
       if(num > 0){
        E1.energyDecrese()
        console.log(`${chalk.greenBright.bold.italic(E1.name)} energy =  ${chalk.greenBright.bold.italic(E1.energy)}`);
        console.log(`${chalk.grey.bold.italic(N1.name)} energy =  ${chalk.grey.bold.italic(N1.energy)}`); 
         process.exit()       
        }
       if(num <= 0){
        N1.energyDecrese()
        console.log(`${chalk.green.bold.italic(N1.name)} energy = ${chalk.green.bold.italic(N1.energy)}`);
        console.log(`${chalk.green.bold.italic(E1.name)} energy = ${chalk.green.bold.italic(E1.energy)}`);
      }
    }
   if(ans1.select=="Eat meal"){
    N1.energyIncrease()
   console.log(`${chalk.bgRed.grey.bold.italic(N1.name)} energy is ${chalk.bgRed.grey.bold.italic(N1.energy)}`);
   process.exit() 
  }
 }
}
while(true)