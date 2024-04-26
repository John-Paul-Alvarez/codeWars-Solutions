/*
Description:

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

move_zeros({1, 0, 1, 2, 0, 1, 3}) // returns {1, 1, 2, 1, 3, 0, 0}

*/

// My Solution
#include <vector>
#include <algorithm>

std::vector<int> move_zeroes(const std::vector<int> &input)
{
    int counter = 0;
    const int valueTobeRemove = 0;
    std::vector<int> inputs = input;
    // find the zeros
    // increment the counter and delete the zero
    auto toBeErase = std::remove_if(inputs.begin(), inputs.end(), [&counter, valueTobeRemove](int x)
                                    {
      if(x == valueTobeRemove){
          counter++;
      }
      return x == valueTobeRemove; });

    inputs.erase(toBeErase, inputs.end());

    // push back zeros in the vector
    for (auto i = 0; i < counter; i++)
    {
        inputs.push_back(0);
    }

    return inputs;
}