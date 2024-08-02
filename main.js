//import add,{multiply} from './math.js'
var a = 20
console.log(a);


function main(){
    
    //scope var, let and const
    var x = 10;
    let r = 20;
    const m = 10;
    //m=20;"

    const book = {title: "Hello World!!"};
    //const book ={title: "Testing"} //not correct
    book.title="Testing";

    if(true){
        var y = 30;
        let r = 30;
        const m = 21;
        r=40;
    }

    console.log(y);
    console.log(r);
    console.log(m);
    console.log(book.title)

    //arrow functions
   const addNumbers = (a,b)=>a+b;

    console.log("Adding two numbers! "+ addNumbers(3,5));

    //
    const id=[1,2,3,4,5,6]
    id.forEach((id)=>{
        id++;
        console.log(id);
    })

    test1();
    //test2(); not allowed

    function test1(){
        console.log("This is testing1!!")
    }
    const test2 = ()=>{
        console.log("This is testing2!!")
    }
    
    test2();

    //Rest operator

    function myFunc(argument1, argument2, ...other){
        console.log(argument1);
        console.log(argument2);
        console.log(other);
    }

    myFunc("Meresa","Berhe","Mehari","Cherkos");

    //spread operator
    const fruits = ["Cabage","Banana","Mellon"];
    const moreFruits = ["Cherry","Avocado","Grapes"];

    const allFruits = [...fruits, ...moreFruits];

    console.log(allFruits)

    //importing an add(x,y) function
    // console.log(add(3,4));
    // console.log(multiply(3,4))

    const todos = [
                    {id:1, taks:"lear javascript", completed:false},
                    {id:2, task:"practice React", completed:true},
                    {id:3, task:"build a project", completed:false}
                ]

    console.log("Searching by Id")
    const todosById = todos.find((todo)=>todo.id == 2)
    const todosByCompleted = todos.find((todo)=>todo.completed == false)
    //const projectRelatedTodo = todos.filter(todo => todo.task.includes("build a project"));

    console.log(todosById)
    console.log(todosByCompleted);
    //console.log(projectRelatedTodo);

    const vehicle = ["Rav4", "Camry","V8", "Mutisabishi"];

    const [car1, car2, car3] = vehicle;

    console.log("Frist choice "+ car1+", "+"second choice "+car2+", third choice "+car3);

    const object1 = {   brand:"Ford", 
                        model:"Mustang", 
                        type:"Car", 
                        year:2023,
                        registration: {
                            city:"Dallas",
                            state:"Tx",
                            country:"USA"
                        }
                    }

    // const object1 = {...object,color:"red"};

    // console.log(object1);


    

    myVehicle({...object1});
    const [add, sub, mult, div] =  calculate(4, 7); 
        console.log("Addition: "+add + ", Subtraction: "+sub + ", Multiplicatioin: "+mult+", Division: "+div)
    
}

function myVehicle({brand, model, type, year, registration:{city, state, country}}){
    
    console.log("Brand: " + brand + ", " + "model: " + model + ", Type: " + type+", Year: " + year);
    console.log("City: " + city + ", State: " + state + " country: " + country);

     //spread operator
     const numbersOne = [1,2,3,4,5];
     const numbersTwo = [6,7,8,9,10];
 
     
     const combinedNumbers = [...numbersOne, ...numbersTwo];
     console.log(combinedNumbers)

     const [One, Two, ...rest] = numbersOne;
    console.log(One, Two, rest);
    // combinedNumbers();

    var a = 5;
    console.log("a = "+a);
    {
        var a = 3;
        console.log("a = "+a);
    }
    console.log("a = "+a);
    //using let
    let b = 5;
    console.log(b);
    {
        let b = 3;
        console.log(b);
    }
    console.log(b);

    //map function

    let map1 = new Map();

    map1.set("name", "Gebre");
    map1.set("age", "27");
    map1.set("salary","120000");

    console.log("Using for of each loop")
    map1.forEach((value, key) => console.log(key+" "+value));

    
    console.log("Using for ... of loop")
    for(let [key, value] of map1){
        console.log(key+" "+value);
    }

    console.log("Accessing only keys!!")
    for(let key of map1.keys())
        console.log(key)

    console.log("Accessging only values")
    for(let value of map1.values())
        console.log(value);

}

const calculate = (a, b)=>{
    const addition = a+b;
    const subtraction = a-b;
    const multiplication = a*b;
    const division = a/b;

    return [addition, subtraction, multiplication, division];
}




console.log("a = "+a);

main();