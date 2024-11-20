
// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Example
//s  = 12:01:00PM

// Return '12:01:00'.

// s = 12:01:00PM
// Return '00:01:00'.

// Function Description

// Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

// timeConversion has the following parameter(s):

// string s: a time in  hour format
// Returns

// string: the time in  hour format
// Input Format

// A single string  that represents a time in -hour clock format (i.e.: hh:mm:ss or HH:MM:SS ).

// Constraints

// All input times are valid
// Sample Input 0
// 07:05:45PM

// Sample Output 0
// 19:05:45

function convertToMilitryFormat(s){
    let time = s.split(":");
    let hours = time[0];
    let minutes = time[1];
    let seconds = time[2];
    let amPm = seconds.slice(2);

    if(amPm === 'PM'){
        if(hours !== '12'){
            hours = parseInt(hours) + 12;
        }else{
            hours = '12';
        }
    }

    if(amPm === 'AM'){
        if(hours === '12'){
            hours = '00';          
        }
    }

    let convertedTime = hours+":"+minutes+":"+seconds.slice(0,2)
    
    return convertedTime;

}

convertToMilitryFormat("12:01:00AM")