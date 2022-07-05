export const dataset = {
  question_1: {
    id: "question_1",
    name: "Missing number",
    text: "You are given a list of n-1 integers and these integers are in the range of 1 to n. There are no duplicates in the list. One of the integers is missing from the list. Write an efficient code to find the missing integer.",
    hints: [
      `Input: arr[] = {1, 2, 4} Output: 3`,
      `The elements of the array are present in the range of the maximum and minimum array element [6, 13]. Therefore, the total values will be {6, 7, 8, 9, 10, 11, 12, 13}. 
    The element from the above range which is missing from the array is  9`,
      "It can be only one element",
      "If there is no element, return null",
    ],
    testCases: [
      {
        input: {
          array: [1, 2, 3, 4, 5, 7],
        },
        output: 6,
      },
      {
        input: {
          array: [1, 3, 4, 5],
        },
        output: 2,
      },
      {
        input: {
          array: [5, 6, 7, 9],
        },
        output: 8,
      },
      {
        input: {
          array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15],
        },
        output: 12,
      },
      {
        input: {
          array: [1, 2, 3, 4, 5],
        },
        output: null,
      },
    ],
    atempt: 1,
  },
  question_2: {
    id: "question_2",
    name: "Higher number",
    text: "Find the higher number of the two, in case they are equal, return their equal amount",
    hints: [
      "For input values a=10 and b=21. The output should be 21",
      "For input values a=12 and b=12. The output should be 24",
    ],
    testCases: [
      {
        input: { a: 12, b: 61 },
        output: 61,
      },
      {
        input: { a: 52, b: 11 },
        output: 52,
      },
      { input: { a: 12, b: 12 }, output: 24 },
    ],
    atempt: 1,
  },

  question_3: {
    id: "question_3",
    name: "Fibonacci number",
    text: `The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is, F(n) = F(n - 1) + F(n - 2), for n > 1. Given n, calculate F(n).`,

    hints: [
      `Input: n = 3
  Output: 2
  Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.`,
      `F(0) = 0, F(1) = 1`,
      `It can be realized with recursion`,
    ],
    testCases: [
      {
        input: { n: 0 },
        output: 0,
      },
      {
        input: { n: 1 },
        output: 1,
      },
      { input: { n: 7 }, output: 8 },
      {
        input: { n: 5 },
        output: 3,
      },
      {
        input: { n: 10 },
        output: 55,
      },
      { input: { n: 12 }, output: 144 },
    ],
    atempt: 1,
  },
  question_4: {
    id: "question_4",
    name: "Find Duplicate",
    text: `Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive. There is only one repeated number in nums, return this repeated number. You must solve the problem without modifying the array nums and uses only constant extra space.`,
    input: { array: [1, 2, 3, 4, 5, 6, 7, 7, 8, 6, 10] },
    hints: [
      `Example 1: Input: nums = [1,3,4,2,2] Output: 2`,
      `Example 2: Input: nums = [3,1,3,4,2] Output: 3`,
      `All the integers in nums appear only once except for precisely one integer which appears two or more times.`,
      `Find the first repeating number`,
      `Return null if there are no repeating numbers`,
    ],
    testCases: [
      {
        input: { array: [1, 2, 3, 4, 5, 6, 7, 7, 8, 6, 10] },
        output: 7,
      },
      {
        input: { array: [1, 1, 2, 4, 9, 9, 9] },
        output: 1,
      },
      {
        input: { array: [1, 2, 3, 4, 6, 7, 9] },
        output: null,
      },
      {
        input: { array: [2, 1, 5, 6, 7, 9, 9] },
        output: 9,
      },
    ],
    atempt: 1,
  },
  question_5: {
    id: "question_5",
    name: "Palindrome Number",
    text: `Given an integer x, return true if x is palindrome integer.`,

    hints: [
      `An integer is a palindrome when it reads the same backward as forward.`,
      `For example, 121 is a palindrome while 123 is not.`,
      `121 reads as 121 from left to right and from right to left.`,
    ],
    testCases: [
      {
        input: { number: 121 },
        output: true,
      },
      {
        input: { number: 21 },
        output: false,
      },
      {
        input: { number: 1295921 },
        output: true,
      },
      {
        input: { number: 1 },
        output: true,
      },
      {
        input: { number: 1220 },
        output: false,
      },
    ],
    atempt: 1,
  },
};
