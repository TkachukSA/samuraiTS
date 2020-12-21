const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 90
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    },
    {
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110
    },
    {
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105
    },
];

export const student = {
    name: "Bob",
    age: 23,
    isStudent: true,
    friends: ["Alex", "Nick", "John"]
}

//1. Создайте поверхностную копию объекта student
let copyStudent = {...student}

//Проверка:
 console.log(student === copyStudent)
 console.log(student.friends === copyStudent.friends)

//2. Полная (глубокая) копия объекта student
let deepCopyStudent={...student, friends:[ ...student.friends]};

console.log(student === deepCopyStudent)
console.log(student.friends === deepCopyStudent.friends)

// Выполните проверку:

//3. Поверхностная копия массива students
let copyStudents= [...students];

//Проверка:
// console.log(students === copyStudents)
// console.log(students[0] === copyStudents[0])

//4. Полная (глубокая) копия students
let deepCopyStudents = students.map(t=>({...t}));

// Выполните проверку:

// Дальше работаем с массивами )))))
// NB!!! Далее все преобразования выполняем не модифицируя исходный массив students
// Вывод результатов - в консоль

//5. Отсортируйте студентов по успеваемости (лучший идёт первым)
const rating = function (){
    copyt = {...student}
    copyt.sort((a,b)=> a-b)
    return copyt
}
//5a. Отсортируйте студентов по алфавиту:
// - сделать дома!!!

//6. Сформируйте массив студентов, у которых 100 и более баллов (filter)
let  bestStudents = students.filter(t=> t.scores>= 100);
console.log(bestStudents)

//6a."Вырежьте" трёх лучших студентов из массива deepCopyStudents (splice)
let topStudents = bestStudents.splice(0,3);
console.log(topStudents)
console.log(deepCopyStudents)

//6b. Объедините массивы deepCopyStudents и topStudents так,
// чтоб сохранился порядок сортировки (???)
let newDeepCopyStudents=[...topStudents, ...deepCopyStudents];
console.log(newDeepCopyStudents)

//7. Сформируйте массив холостых студентов (filter)
let notMarriedStudents=deepCopyStudents.filter(t => (t.isMarried == false)) ;
let notMarriedSt=deepCopyStudents.map(t => (t.isMarried === false)) ;
console.log(notMarriedStudents)

//8. Сформируйте массив имён студентов (map)
let studentsNames=deepCopyStudents.map(t => t.name);
console.log(studentsNames)

//8a. Сформируйте строку из имён студентов, разделённых
// - пробелом (join)
// - запятой (join)
let nameWithSpace = studentsNames.join(" ");
console.log(nameWithSpace)
let namesWithComma=studentsNames.join(",");;
console.log(namesWithComma)

//9. Добавьте всем студентам свойство "trueStudents" со значением true (map)
let trueStudents = deepCopyStudents.map(t=> ({...t, trueStudents: true}));
console.log(trueStudents)

//10. Nick женился. Выполните выполните соответствующие преобразование массива students (map)
let studentsWithMarriedNick=deepCopyStudents.map(t =>{
    if(t.name ==="Nick"){
       return {...t, isMarried: true}
    } else return  t
    }

);
console.log(studentsWithMarriedNick)

//11. Найдите студента по имени Ann (find)
let ann=deepCopyStudents.filter(t=> t.name==="Ann");
console.log(ann)

//12. Найдите студента с самым высоким баллом (reduce)
let bestStudent=students.reduce((acc, st)=> acc.scores >st.scores? acc: st);
console.log(bestStudent)

//13. Найдите сумму баллов всех студентов (reduce)
let scoresSum=students.reduce((acc, st)=> acc + st.scores,0);;
console.log(scoresSum)

  function add (gr){


    let names = rg.filter(s=> s.name)
   return  gr.map(s=>({...s, friends: names.filter(i => i !== s.name)}))


        }


console.log(add())







