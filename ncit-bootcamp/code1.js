"use strict" //to ignore silly mistake
function test(a,b){
    return a+b;
  }
  console.log("the result is",test( 2,5));


  parseInt(34.7770)

  let a=8;
console.log(`the value of a is ${a}`);

function value()
    {
        return"js";}
        console.log(`this is class of ${value()}`);

        for(i=0;i<10;i++)
    {
        console.log(i)
    }
    const array=["apple","mango","banana","strawberry"];
for(let i=0;i<array.length;i++){
    console.log(array[i]);
}
let b ={name:'anjila'}
b.name
console.log(b.name);
function check(a){
    if(a%2==0)
    {
        console.log("it is even number");

    }
    else{
        console.log("it is odd number");

    }
}
check(30);

function spare(d,e,...f)
{
    if(d==e)
    {
        console.log("true");
    }
    else{
        console.log("false");
    }
    console.log(f);

}
spare(3,6,4,8,9,6);
//fibonaccseries------------

function fibo()
{
const number=7;
let n1=0 ,n2=1;
let n3;
console.log("fibonacci series");
for(let i=1;i<=number;i++){
    console.log(n1);
    n3=n1+n2;
    n1=n2;
    n2=n3;
}
}
fibo()

function fibonacci(n)
{
    if(n<2)
    {
        return 1;
    }
    else{
        return(fibonacci(n-1)+fibonacci(n-2));
    }
}
for(let i=0;i<20;i++){
    console.log(fibonacci(i));
}
fibonacci(5)
fibonacci(8)
//-----------forloops---------

/*function helloWorld(x){
    const name="HI";
    let sum=0;
    const x=10;
    y=15;
    console.log(`Type of name ${typeof name}`);
}*/



function forVariations(){
    animals={
        name:"Dog",
        type:"mammal",
        kingdom:"animal",
    };
    for(n in animals){
        console.lo('Animal ${n}');
    }
    let petName="shadow";
    let allDogSpecies=[
        "dogoArgentino",
        "pitbull",
        "boxer",
        "Shepherd",
        "Mastiff",
    ];

    }
for(let singleItem of petName){
    console.log(`pet Letters \n ${singleItem}`);
}
for(let singleItem of allDogSpecies){
    console.log(`Dog Species \n ${singleItem}`);
}
//-->})(); 

/*let fibonacci=(c,d) =>{
    console.log("1");
}; */