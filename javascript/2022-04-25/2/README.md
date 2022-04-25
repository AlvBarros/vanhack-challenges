# Coding Challenge #2
You are given a year as an integer. Return the most frequent day(s) of the week in that year. The resulting list of days should be sorted by the order of days in week starting from Monday (e. g. ['Monday', 'Tuesday']).

## Specification
>```mostFrequentDays(year)```
Parameters
year: Number - The year as an integer

>Return
Array<String> - A list of the most frequently occuring days

## Examples
| year | Return                |
|------|-----------------------|
| 2427 | ["Friday"]            |
| 2185 | ["Saturday"]          |
| 2860 | ["Thrusday","Friday"] |

In Ruby, years will start from '1593'
Note that some online calendars are inaccurate. We recommend using https://moonsighting.com/gregorian-calendar.php?1084.

