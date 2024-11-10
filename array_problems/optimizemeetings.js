let meetings = [
    {hours:5},
    {hours:4},
]


function optimizeMeetings(meetings,haveHours){
    meetings.sort((m1,m2)=>m2.hours - m1.hours)
    let totalHours = 0
    let meetingsCanBeMade = []
    meetings.forEach((meet) =>{
        if (totalHours + meet.hours <= haveHours){
                meetingsCanBeMade.push(meet)
                totalHours += meet.hours
            }
        
    })

    return meetingsCanBeMade
}

console.log(optimizeMeetings(meetings,8))

// let meetings = [
//     { hours: 4 },
//     { hours: 2 },
//     { hours: 3 },
//     // { hours: 0 },
// ];

// function optimizeMeetings(meetings, haveHours) {
//     // Sort the meetings in descending order of hours
//     meetings.sort((m1, m2) => m2.hours - m1.hours);

//     let totalHours = 0;
//     let meetingsCanBeMade = [];

//     // Iterate over the sorted meetings
//     for (let meeting of meetings) {
//         if (totalHours + meeting.hours <= haveHours) {
//             meetingsCanBeMade.push(meeting);
//             totalHours += meeting.hours;
//         }
//     }

//     return meetingsCanBeMade;
// }

// console.log(optimizeMeetings(meetings, 8));
