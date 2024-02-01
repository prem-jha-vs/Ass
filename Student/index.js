let students = [

    {
    name:'Amit',
    roll:101,
    marks:[80,75,37,67,90]
    },

    {
    name:'Sumit',
     roll:101,
     marks:[80,75,57,67,87]
     },    

    {
     roll:101,
     marks:[90,75,37,27,74]
     },

    {
    name:'Saurav',
    roll:101,
     marks:[76,72,37,67,80]
    },

]

// Calculate total marks for each student
students.forEach(student => {
    student.totalMarks = student.marks.reduce((sum, mark) => sum + mark, 0);
});

// Find the highest ranker
const highestRanker = students.reduce((highest, current) => {
    return current.totalMarks > highest.totalMarks ? current : highest;
}, students[0]);

const nameOfHighestRanker = highestRanker.name? highestRanker.name : 'Unknown'
console.log(nameOfHighestRanker)
