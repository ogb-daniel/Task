//!TO RUN --- yarn start
import * as readline from 'readline'
 let rl = readline.createInterface({
     input:process.stdin,
     output:process.stdout
 });

 const handleInteger =(value:number)=>{
  
  
    if(value % 2 == 0){
        console.log("candy");
        
    }

   else  if(value % 11 == 0){
        console.log("bar");
    
    }

   else if(value % 22 == 0){
        console.log("candybar");
        
    }else{
        console.log(value);
        
    }

}

 rl.question('Enter your number:',(answer)=>{
    handleInteger(answer as any);
    rl.close();
 });



