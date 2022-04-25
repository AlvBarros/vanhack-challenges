const mostFrequentDays = year => {
    // Get day of the week that 01/01/year is
    let firstDay = new Date(`January 01, ${year}  00:00:00`).getDay();
    let days = [daysOfTheWeek[firstDay]];
    // If given year is a leap year, add firstDay+1 of the week
    if (isLeapYear(year)) {
        if (firstDay === 6) {
            days.push(daysOfTheWeek[0])
        } else {
            days.push(daysOfTheWeek[firstDay + 1]);
        }
    }
    // Get in desired order
    let result = [];
    for (let i = 0; i < finalOrder.length; i++) {
        if (days.indexOf(finalOrder[i]) >= 0) {
            result.push(finalOrder[i]);
        }
    }
    return result;
}

const isLeapYear = (year) => ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);

const daysOfTheWeek = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];
const finalOrder = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
];