//how to use filter
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function to check even numbers
const  checkEven = (number) =>{
  return (number % 2 == 0)
  
}

// create a new array by filter even numbers from the numbers array
let evenNumbers = numbers.filter(number =>number % 2 == 0);
console.log(evenNumbers);

// Output: [ 2, 4, 6, 8, 10 ]

//how to use forEach
numbers.forEach(
    (num, index) => {console.log(num + " " + index)}
);

const todos = [{id:1, task:"learing JavaScript",completed:false },
                {id:2, task:"learing React",completed:false},
                {id:3, task:"learing Java",completed:true}
            ];

todos.forEach((todo)=>todo.completed=true)
console.log(todos)

todos.forEach((x, index)=>console.log(x.id+" "+x.task+" "+x.completed+":"+index))


//mapping
const mappedTodo = todos.map((todo) =>{
    return {id: todo.id, desc:todo.task}
});

mappedTodo.forEach(x=>console.log(x))

//using spread operator
const mappedTodo1 = todos.map((todo)=>{
    return {...todo, priority:"High"}
})

mappedTodo1.forEach((x)=>console.log(x.id+" "+x.task+" "+x.completed+" "+x.priority));