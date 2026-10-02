//Week 02

let studentList = [
    {
        name:"Pawan",
        age:21,
        location:"Colombo",
        score:[
            {
                subject:"Maths",
                marks:79
            },
            {
                subject:"Science",
                marks:58
            }
        ]
    },
    {
        name:"Samara",
        age:19,
        aggress:"Gampaha",
        score:[
            {
                subject:"Science",
                marks:33
            },
            {
                subject:"History",
                marks:20
            }
        ]

    }
]

console.log(studentList[0].age);
console.log(studentList[0].score[1].subject);