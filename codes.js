You are developing a new programming language and currently working on variable names. You have a list of words that you consider to be good and could be used for variable names. All the strings in words consist of lowercase English letters.

A complex variable name is a combination (possibly with repetitions) of some strings from words, written in CamelCase. In other words, all the strings are written without spaces and each string (with the possible exception of the first one) starts with a capital letter.

Your programming language should accept complex variable names only.

You need to check if the variableName is accepted by your programming language.

Example

    For words = ["is", "valid", "right"] and variableName = "isValid", the output should be camelCaseSeparation(words, variableName) = true.

    As variableName consists of words "is" and "valid", and both of them are in words.

    For words = ["is", "valid", "right"] and variableName = "IsValid", the output should be camelCaseSeparation(words, variableName) = true.

    Note that both variants: "IsValid" and "isValid" are valid in CamelCase.

    For words = ["is", "valid", "right"] and variableName = "isValId", the output should be camelCaseSeparation(words, variableName) = false.

    variableName is separated to words "is", "val", "id", and not all words are in words.

Input/Output

    [execution time limit] 4 seconds (js)

    [input] array.string words

    An array of words consisting of lowercase English letters.

    Guaranteed constraints:
    1 ≤ words.length ≤ 103.

    [input] string variableName

    A string to be checked. Consists of lowercase and uppercase English letters only.

    Guaranteed constraints:
    1 ≤ variableName.length ≤ 103.

    [output] boolean

    Return true, if variableName is a complex variable name, and false otherwise.


    words: ["rmgeydubej"]
variableName: "RmgeydubejRmgeydubejbgsozjgoRmgeydubej"

Output:

true

Expected Output:

false

Console Output:

rmgeydubej rmgeydubejRmgeydubejbgsozjgoRmgeydubej
10

Error Output:

Empty