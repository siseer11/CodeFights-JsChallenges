[Challange link](https://codefights.com/arcade/code-arcade/well-of-integration/x3ix7CY93z2bwKDtG/description)
# Description
N candles are placed in a row, some of them are initially lit. For each candle from the 1st to the Nth the following algorithm is applied: if the observed candle is lit then states of this candle and all candles before it are changed to the opposite. Which candles will remain lit after applying the algorithm to all candles in the order they are placed in the line?

# Example

For a = [1, 1, 1, 1, 1], the output should be
switchLights(a) = [0, 1, 0, 1, 0].

Check out the image below for better understanding:



For a = [0, 0], the output should be
switchLights(a) = [0, 0].

The candles are not initially lit, so their states are not altered by the algorithm.

# Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer a

Initial situation - array of zeros and ones of length N, 1 means that the corresponding candle is lit.

Guaranteed constraints:
2 ≤ a.length ≤ 5000.

[output] array.integer

Situation after applying the algorithm - array in the same format as input with the same length.