
/*
Description:
Task

Given a string str, reverse it and omit all non-alphabetic characters.
Example

For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".
Input/Output

    [input] string str

A string consists of lowercase latin letters, digits and symbols.

    [output] a string


*/

// My solution
std::string reverse_letter(const std::string &str)
{
    std::string retVal = "";
    for (int i = str.size() - 1; i >= 0; i--)
    {
        if (str[i] >= 'a' && str[i] <= 'z')
        {
            retVal += str[i];
        }
    }
    return retVal;
}