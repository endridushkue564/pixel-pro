/**
 * Filename: elaborate_program.js
 * 
 * Description: This code is an elaborate and complex JavaScript program that demonstrates
 * various functionalities and best practices. It includes multiple classes, functions, and
 * advanced algorithms.
 */

// Class representing a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Class representing a book
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    console.log(`${this.title} was written by ${this.author} in ${this.year}.`);
  }
}

// Class representing a library
class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  listBooks() {
    console.log(`Books in ${this.name} library:`);
    this.books.forEach((book, index) => {
      console.log(`${index + 1}. ${book.title}`);
    });
  }
}

// Function to find the factorial of a number using recursion
function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

// Function to sort an array of numbers in ascending order
function bubbleSort(arr) {
  let len = arr.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < len - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

// Main program

// Creating instances of Person class
const person1 = new Person("John", 25);
const person2 = new Person("Sarah", 31);

person1.introduce();
person2.introduce();

// Creating instances of Book class
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);

book1.getSummary();
book2.getSummary();

// Creating instance of Library class
const library = new Library("MyLibrary");

// Adding books to the library
library.addBook(book1);
library.addBook(book2);

// Listing books in the library
library.listBooks();

// Calculating factorial of a number
const num = 5;
console.log(`Factorial of ${num}: ${factorial(num)}`);

// Sorting an array using bubble sort
const unsortedArr = [7, 2, 9, 1, 6, 3];
console.log("Unsorted array:", unsortedArr);
console.log("Sorted array:", bubbleSort(unsortedArr));