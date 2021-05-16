function addValue (num1: number, num2:number, resultOut:boolean, resultStart:string){
    let result = num1+num2
   if(resultOut){
       console.log(resultStart + result);
   }else{
     console.log(num1 + num2);  
   }
    
}

const number1= 9;
const number2=1;
const display = true;
const displayStartPhase = 'Result is ..'
 addValue(number1, number2, display, displayStartPhase);

