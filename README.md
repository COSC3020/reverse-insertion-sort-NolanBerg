[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/Bi-S25fM)
# Reverse Insertion Sort

Consider the code for insertion sort we covered in class:

```javascript
function insertionSort(arr) {
  for(var i = 1; i < arr.length; i++) {
    var val = arr[i];
    var j;
    for(j = i; j > 0 && arr[j-1] > val; j--) {
      arr[j] = arr[j-1];
    }
    arr[j] = val;
  }
  return arr;
}
```

Change this function such that it works from the end of the array rather than
the beginning, `insertionSortReverse()` -- only the direction of
iterating over the elements is reversed, the array is still sorted the same way
(ascending). Add your code in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

RESOURCES USED: Originally coded in python and used ai to convert to js where function takes in array and sorts using reverse insertion sort. Below is python code I used to sort array without testing:

import random

def reverse_insertion_sort(arr):
    
for i in range(len(arr) - 2, -1, -1):
        
key = arr[i]

j = i + 1

while j <= len(arr) - 1 and key > arr[j]:

arr[j - 1] = arr[j]

j += 1

arr[j - 1] = key


random_array = [random.randint(1, 25) for _ in range(5)]

print(random_array)

reverse_insertion_sort(random_array)

print(random_array)




## Average-Case Time Complexity of Insertion Sort

In the lectures, we covered that insertion sort has best-case time complexity of
$\Theta(n)$ and worst-case time complexity of $\Theta(n^2)$. What is the
average-case time complexity ($\Theta$)?

Hint: Think about what happens in each iteration of the loop, and how often the
loop is executed. Keep in mind that for asymptotic analysis we don't care about
constant factors.

Describe your reasoning and the conclusion you've come to. Your reasoning is
most important -- you can easily find the answer, but you need to demonstrate
that you've understood the concept. Add your answer to this markdown file.


The average-case time complexity is also $\Theta(n^2)$ for random or arbitrary order of input elements. Each element needs to be compared and swapped with approximately half of the preceding elements.
