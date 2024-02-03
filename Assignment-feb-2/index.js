let studentsData = [
    {
        "roll_no":14,
        "firstName:": "GAURAV",
        "lastName:": "kalra",
        "marks":{
            "phy":75,
            "csc":85,
            "eng":75,
            "math": 96,
            "chem": 75,
        },
        "address":{
            "locality":"ramprastha",
            "distanceFromSchoolInKM":2,
        },
        "languages":["english","hindi","punjabi","sanskrit"]
    },
    {
        "roll_no":7,
        "firstName:": "HARMAN DEEP",
        "lastName:": "singh",
        "marks":{
            "phy":81,
            "csc":64,
            "eng":89,
            "math": 89,
            "chem": 77,
        },
        "address":{
            "locality":"shreshta vihar",
            "distanceFromSchoolInKM":0.5
        },
        "languages":["english","hindi","punjabi"]

    },
    {
        "roll_no":2,
        "firstName:": "KARAN",
        "lastName:": "bhola",
        "marks":{
            "phy":90,
            "csc":85,
            "eng":80,
            "math": 95,
            "chem": 85,
        },
        "address":{
            "locality":"vigyan vihar",
            "distanceFromSchoolInKM":1
        },
        "languages":["english","hindi","punjabi","sanskrit"]
    }
];

//1a. Find all the students who have received 90 marks in atleast one subject
function findStudentsWithThresholdMarks(data, threshold){
    return data
    .filter(student => Object.values(student.marks).some(mark => mark >= threshold))
    .map(student => ({
        "roll_no": student.roll_no,
        "name" : `${student["firstName:"]} ${student["lastName:"]}`
    }));
}

//1b. Find all students who have received distinction (75) in all subjects
function findStudentsWithDistinction(data, distinctionThreshold){
    return data.filter(student => Object.values(student.marks)
    .every(mark => mark===distinctionThreshold))
}

// const studentsWithHighMarks = findStudentsWithThresholdMarks(studentsData, 90);
// console.log(studentsWithHighMarks);

// const studentsWithDistinction = findStudentsWithDistinction(studentsData, 75);
// console.log(studentsWithDistinction);


/*2a. Rank all the students starting from topper, topper defines student who has max total marks.
2b. Rank all the students starting from lowest marks?

2c. Add best4Marks also to the array, best4Marks is total marks of best 4 subjects.

2d. Return List sorted based on best4Marks*/
function rankStudents(data, sortBy = 'totalMarks', sortOrder = 'desc') {
    const rankedStudents = data
        .map(student => ({
            roll_no: student.roll_no,
            name: `${student["firstName:"]} ${student["lastName:"]}`,
            totalMarks: Object.values(student.marks).reduce((sum, mark) => sum + mark, 0),
            best4Marks: Object.values(student.marks).sort((a, b) => b - a).slice(0, 4).reduce((sum, mark) => sum + mark, 0)
        }))
        .sort((a, b) => sortOrder === 'desc' ? b[sortBy] - a[sortBy] : a[sortBy] - b[sortBy])
        .map((student, index) => ({
            [student.roll_no]: {
                name: student.name,
                totalMarks: student.totalMarks,
                best4Marks: student.best4Marks,
                rank: index + 1
            }
        }));
    return rankedStudents;
}

// const rankedStudentsByTotalMarks = rankStudents(studentsData, 'totalMarks', 'desc');
// console.log(rankedStudentsByTotalMarks);

// const rankedStudentsByLowestMarks = rankStudents(studentsData, 'totalMarks', 'asc');
// console.log(rankedStudentsByLowestMarks);

// const rankedStudentsByBest4Marks = rankStudents(studentsData, 'best4Marks', 'desc');
// console.log(rankedStudentsByBest4Marks);

/*3a. List of all students who failed in 1 or more exam, failed means < 40.
3b. Does you approach change if we also need the name of all the subjects student failed in.*/

function findFailedSubjects(student, passThreshold) {
    return Object.entries(student.marks)
        .filter(([subject, mark]) => mark < passThreshold)
        .map(([subject]) => subject);
}
function findFailingStudents(data, passThreshold = 40, includeSubjects = false) {
    return data
        .filter(student => {
            const failedSubjects = findFailedSubjects(student, passThreshold);
            return failedSubjects.length > 0;
        })
        .map(student => {
            const failedSubjects = findFailedSubjects(student, passThreshold);
            return {
                roll_no: student.roll_no,
                name: `${student["firstName:"]} ${student["lastName:"]}`,
                num_Backs: failedSubjects.length,
                ...(includeSubjects && {
                    failedSubjects: failedSubjects.length > 0 ? failedSubjects : ["None"]
                })
            };
        });
}
// const failingStudents = findFailingStudents(studentsData);
// console.log(failingStudents);

// const failingStudentsWithSubjects = findFailingStudents(studentsData, 40, true);
// console.log(failingStudentsWithSubjects);

/*4. Languages
    4a. Find the most commonly spoken language
    4b. Find the analytics distribution on languge:num_students 
        reutrn : [
            "english: 35 //Number of Students who speak 
        ]
    4c. Find top 3 most commonly spoken language
    4d. Find 3 least commonly spoken languages
    4e. Find any one student who speaks "english"
        4e.1
            What if we want any student who speaks "english" & "sanskrit" Does your solution change and how.*/

function calculateLanguageCounts(data) {
    const languageCounts = {};
    data.forEach(student => {
        student.languages.forEach(language => {
            languageCounts[language] = (languageCounts[language] || 0) + 1;
        });
    });
    return languageCounts;
}

function findMostCommonLanguage(data) {
    const languageCounts = calculateLanguageCounts(data);
    const mostCommonLanguage = Object.keys(languageCounts).reduce((max, curr) => languageCounts[max] > languageCounts[curr] ? max : curr);
    return mostCommonLanguage;
}

function languageDistribution(data) {
    const languageCounts = calculateLanguageCounts(data);
    const distribution = Object.entries(languageCounts).map(([language, count]) => `${language}: ${count}`);
    return distribution;
}

function findTopNLanguages(data, n) {
    const languageCounts = calculateLanguageCounts(data);
    const sortedLanguages = Object.entries(languageCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, n);
    return sortedLanguages.map(([language, count]) => `${language}: ${count}`);
}

function findBottomNLanguages(data, n) {
    const languageCounts = calculateLanguageCounts(data);
    const sortedLanguages = Object.entries(languageCounts)
        .sort((a, b) => a[1] - b[1])
        .slice(0, n);
    return sortedLanguages.map(([language, count]) => `${language}: ${count}`);
}

function findStudentByLanguages(data, targetLanguages) {
    return data.find(student => targetLanguages.every(language => student.languages.includes(language)));
}

// const mostCommonLanguage = findMostCommonLanguage(studentsData);
// console.log(`Most Common Language: ${mostCommonLanguage}`);

// const languageDistributionResult = languageDistribution(studentsData);
// console.log(`Language Distribution: ${languageDistributionResult}`);

// const top3LanguagesResult = findTopNLanguages(studentsData, 3);
// console.log(`Top 3 Languages: ${top3LanguagesResult}`);

// const least3LanguagesResult = findBottomNLanguages(studentsData, 3);
// console.log(`Least 3 Languages: ${least3LanguagesResult}`);

// const englishSpeakingStudent = findStudentByLanguages(studentsData, ["english"]);
// console.log("English Speaking Student:", englishSpeakingStudent || "No student found.");

// const englishSanskritSpeakingStudent = findStudentByLanguages(studentsData, ["english", "sanskrit"]);
// console.log("English and Sanskrit Speaking Student:", englishSanskritSpeakingStudent || "No student found.");

/*5. Give School Report Card
    {
        num_Students: 70,
        num_Passed: 62,
        num_Failed: 8,
        num_Students_WithDistinction:51
    }*/
function generateSchoolReport(students) {
    const numStudents = students.length;
    const numPassed = students.filter(student => {
        const passThreshold = 40; 
        return !Object.values(student.marks).some(mark => mark < passThreshold);
    }).length;  
    const numFailed = numStudents - numPassed;
    const numStudentsWithDistinction = students.filter(student => {
        const distinctionThreshold = 75;
        return Object.values(student.marks).every(mark => mark >= distinctionThreshold);
    }).length;

    return {
        num_Students: numStudents,
        num_Passed: numPassed,
        num_Failed: numFailed,
        num_Students_WithDistinction: numStudentsWithDistinction
    };
}
// const schoolReport = generateSchoolReport(studentsData);
// console.log(schoolReport);