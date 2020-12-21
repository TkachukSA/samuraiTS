test('main', ()=>{
     const student = {
        name: "Bob",
        age: 23,
        isStudent: true,
        friends: ["Alex", "Nick", "John"]
    }
    let copy ={...student}
    expect(student.age).toBe(copy.age)
})

test('DeepCopy', ()=>{
     const student = {
        name: "Bob",
        age: 23,
        isStudent: true,
        friends: ["Alex", "Nick", "John"]
    }


    let copy ={...student, friends: [...student.friends]}
    copy.friends[0]='sergey'

    expect(student.friends[0]).toBe("Alex")
    expect(copy.friends[0]).toBe("sergey")
})


test('DeepCopy', ()=>{
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


    let copy =[students.map(s=>({...s}))]
    copy[0].age = 220

    expect(students[0].age).toBe(22)
    expect(copy[0].age).toBe(220)

})



