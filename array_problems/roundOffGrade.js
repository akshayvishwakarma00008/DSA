// HackerLand University has the following grading policy:

// Every student receives a  in the inclusive range from  to .
// Any  less than  is a failing grade.
// Sam is a professor at the university and likes to round each student's  according to these rules:

// If the difference between the  and the next multiple of  is less than , round  up to the next multiple of .
// If the value of  is less than , no rounding occurs as the result will still be a failing grade.
// Examples

//  round to  (85 - 84 is less than 3)
//  do not round (result is less than 40)
//  do not round (60 - 57 is 3 or higher)
// Given the initial value of  for each of Sam's  students, write code to automate the rounding process.

// Function Description

// Complete the function gradingStudents in the editor below.

// gradingStudents has the following parameter(s):

// int grades[n]: the grades before rounding
// Returns

// int[n]: the grades after rounding as appropriate

// Sample Input 0
// 4
// 73
// 67
// 38
// 33

// Sample Output 0
// 75
// 67
// 40
// 33

function roundOffGrade(grades) {
    let Grades = [];
    for (let i = 0; i < grades.length; i++) {
        let nextMultiple = (grades[i] - grades[i] % 5) + 5;
        let difference = nextMultiple - grades[i];
        if (difference < 3) {
            if (grades[i] < 38) {
                Grades.push(grades[i]);
            } else {
                Grades.push(nextMultiple);
            }
        } else {
            Grades.push(grades[i]);
        }

    }
    
    return Grades;
}

roundOffGrade([73, 67, 38, 33])