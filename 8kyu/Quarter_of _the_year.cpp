/*
Description:

Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

Constraint:

    1 <= month <= 12


*/

#include <map>
#include <string>
int quarter_of(int month)
{
    if (month < 1 || month > 12)
    {
        return 0;
    }
    std::map<int, int> months;
    months[1] = 1;
    months[2] = 1;
    months[3] = 1;
    months[4] = 2;
    months[5] = 2;
    months[6] = 2;
    months[7] = 3;
    months[8] = 3;
    months[9] = 3;
    months[10] = 4;
    months[11] = 4;
    months[12] = 4;

    int retVal = 0;
    auto theValue = months.find(month);
    if (theValue != months.end())
    {
        retVal = theValue->second;
    }
    return retVal;
}