// Tewish Wongprechachok 
// Tel. 093-124-9889

const rl = require('readline-sync');
let input;

function fizzBuzz(){
    let allNum = [];
    for (let i = 1; i <= 100; i++)
    {
        if ( i%5 == 0 && i%3 == 0 )
        {
            allNum[i] = "FizzBuzz";
        }
        else if ( i%5 == 0)
        {
            allNum[i] = "Fizz";
        }
        else if ( i%3 == 0)
        {
            allNum[i] = "Buzz";
        }
        else
        {
            allNum[i] = i;
        }
    }
    console.log(allNum);
}
    
function leapYear(){
    console.log("Enter year you want to check:");
    while(input !== "")
    {
        input = rl.question();
        let count = true;
        let leapY = true;
        if( input <= 0 )
        {
            console.log("!Invalid input");
            count = false;
        }
        else if( input%400 ==0)
        {
            leapY = true;
        }
        else if( input%400 !==0 && input%100 !==0 && input%4 == 0)
        {
            leapY = true;
        }
        else
        {
            leapY = false;
        }

        if(count == true)
        {
            console.log(input + '-> ' + leapY);
        }
    }
}

    
function three1(){
    while(input !== "")
    {
        let i;
        let j;
        input = rl.question("Enter number: ");
        if( input == "")
        {
            break;
        }
        if( input <= 0 )
        {
            console.log("!Invalid input");
        }
        else
        {
            for(i=0;i<input;i++)
            {
                for(j=0;j<input;j++)
                {
                    if(j<=i)
                    {
                        process.stdout.write(`*`);
                    }
                    else
                    {
                        process.stdout.write(` `); 
                    }
                    if( j == input-1 )
                    {
                        process.stdout.write(`\n`);
                    }
                }
            }
        }
    }
}
    
function three2(){
    while(input !== "")
    {
        let i;
        let j;
        input = rl.question("Enter number: ");
        if( input == "")
        {
            break;
        }
        if( input <= 0 )
        {
            console.log("!Invalid input");
        }
        else
        {
            for(i=0;i<input;i++)
            {
                for(j=input;j>=0;j--)
                {
                    if(j<=i)
                    {
                        process.stdout.write(`*`);
                    }
                    else
                    {
                        process.stdout.write(` `); 
                    }
                    if( j == 0 )
                    {
                        process.stdout.write(`\n`);
                    }
                }
            }
        }
    }
}
    
function three3(){
    while(input !== "")
    {
        let i;
        input = rl.question("Enter number: ");
        if( input == "")
        {
            break;
        }
        if( input <= 0 )
        {
            console.log("!Invalid input");
        }
        else
        {
            for(i=1;i<=input;i++)
            {
                if(i == 1)
                {
                    console.log( Array(input-1).fill('\xa0').join('')+"*");
                }
                else
                {
                    console.log( Array(input-i).fill('\xa0').join('')+"*"+ Array(i*2-3).fill('\xa0').join('')+"*");
                }
            }
        }
    }
}
    
function three4(){
    while(input !== "")
    {
        let i;
        let j;
        input = rl.question("Enter number: ");
        if( input == "")
        {
            break;
        }
        if( input < 0 )
        {
            console.log("!Invalid input");
        }
        else
        {
            for(i=1;i<=input;i++)
            {
                for(j=1;j<=input;j++)
                {
                    if( i==j || input == j+i-1 )
                    {
                        process.stdout.write(`*`);
                    }
                    else
                    {
                        process.stdout.write(` `);
                    }
                    if( j == input)
                    {
                        process.stdout.write(`\n`);                        
                    }
                }
            }
        }
    }
}
    
function three5(){
    while(input !== "")
    {
        let i;
        let j;
        let k = 1;
        let decrease = 0;
        input = rl.question("Enter number: ");
        if( input == "")
        {
            break;
        }
        if( input <= 0 )
        {
            console.log("!Invalid input");
        }
        else
        {
            if(input%2 == 0)            // Input is even
            {
                let rim = Math.round(input/2); // for slide picture to the left
                for(i=1;i<=input;i++)
                {
                    if (decrease == 0)
                    {
                        console.log( Array(input-i-rim).fill('\xa0').join('')+ Array(k).fill('\x2a').join(''));   
                    }
                    else
                    {
                        console.log( Array(i-rim-1).fill('\xa0').join('')+ Array(k).fill('\x2a').join(''));
                    }
                    if(decrease == 1)
                    {
                        k = k - 2;
                    }
                    else if(k == input-1)
                    {
                        decrease = 1;
                    }
                    else
                    {
                        k = k + 2 ;
                    }
                }
            }
            else                        // Input odd
            {
                for(i=1;i<=input;i++)
                {
                    let rim = Math.round(input/2)-1; // for slide picture to the left
                    if (decrease == 0)
                    {
                        console.log( Array(input-i-rim).fill('\xa0').join('')+ Array(k).fill('\x2a').join(''));   
                    }
                    else
                    {
                        console.log( Array(i-rim-1).fill('\xa0').join('')+ Array(k).fill('\x2a').join(''));
                    }
                    if(decrease == 1)
                    {
                        k = k - 2;
                    }
                    else if(k == input)
                    {
                        decrease = 1;
                        k = k -2;
                    }
                    else
                    {
                        k = k + 2 ;
                    }
                }
            }
        }
    }
} 
    
function three6(){
    while(input !== "")
    {
        let i;
        let j;
        let pPlus = 0;
        let pE = 0;
        input = rl.question("Enter number: ");
        if( input == "")
        {
            break;
        }
        if( input <= 0 )
        {
            console.log("!Invalid input");
        }
        else
        { /*41 >> A,
            42 >> B,
            43 >> C,
            44 >> D,
            45 >> E,
            2b >> +*/
            for(i=1;i<=input;i++)
            {
                if(i >= 2)
                {
                    pPlus = 1;
                    
                }
                if(i == 1)
                {
                    pE = 0;
                }
                else
                {
                    pE = 2*i-3;
                }
                console.log( Array(input-i).fill('\x41').join('')+ '+'
                + Array(pE).fill('\x45').join('')
                + Array(pPlus).fill('\x2b').join('')
                + Array(input-i).fill('\x42').join(''));
            }
            for(i=input-1;i>=1;i--)
            {
                if(i == 1)
                {
                    pPlus = 0;
                    
                }
                if(i == 1)
                {
                    pE = 0;
                }
                else
                {
                    pE = 2*i-3;
                }
                console.log( Array(input-i).fill('\x43').join('')+ '+'
                + Array(pE).fill('\x45').join('')
                + Array(pPlus).fill('\x2b').join('')
                + Array(input-i).fill('\x44').join(''));
            }
        }
    }
}

function prime(){
    while(input !== "")
    {
        let ans = [];
        let k = 0;
        let isPrime = 0;
        input = rl.question("Enter number: ");
        for(let i = 1; i<=input ;i ++)
        {
            isPrime = 0;
            for(let j = 1; j <= i; j++)
            {
                if( i%j == 0)
                {
                    isPrime++;
                }
            }
            if(isPrime == 2)
            {
                ans[k] = i;
                k++;
            }
        }
        console.log(input + ' -> ' +ans);
    }
}

function main(){
    while(1)
    {
        console.log("Enter number to prefer program:\n")
        console.log("   1 - FizzBuzz    |   6 - 3.4");
        console.log("   2 - Leap Year   |   7 - 3.5");
        console.log("   3 - 3.1         |   8 - 3.6");
        console.log("   4 - 3.2         |   9 - Prime Number");
        console.log("   5 - 3.3         |   0 - exit\n");
        input = rl.question("Input: ");
        if(input == "0")
        {
            break;
        }
        else if( input<1 || input>9){
            console.log("!!  ERROR:Invalid input,Try again");
        }
        else if(Number.isInteger(input)){
            console.log("!!  ERROR:Invalid input,Try again");
        }
        else if(input == 1){
            fizzBuzz();
        }
        else if(input == 2){
            leapYear();
        }
        else if(input == 3){
            three1();
        }
        else if(input == 4){
            three2();
        }
        else if(input == 5){
            three3();
        }
        else if(input == 6){
            three4();
        }
        else if(input == 7){
            three5();
        }
        else if(input == 8){
            three6();
        }
        else if(input == 9){
            prime();
        }
        input = null;
    } 
    console.log("Exit Program....")
}
main();