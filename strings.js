let str = "JavaScript";
let a = "JAVA";
let b = "java";

a == b; // false
a.toLowerCase() == b.toLowerCase(); // true

let str1 = "JavaScript"; // string interning - string is a primitive data type in JavaScript, and when we create a string literal like "JavaScript", it is stored in a special area of memory called the string pool. If we create another string literal with the same value, like str1 = "JavaScript", it will point to the same memory location as str, instead of creating a new string object. This is known as string interning.
str == str1; // true

let str2 = new String("JavaScript"); // string object - when we create a string using the String constructor, it creates a new string object in memory, even if the value is the same as an existing string literal. This means that str2 is a different object in memory than str and str1, even though they have the same value.
str == str2; // true - when we use the == operator to compare a string literal and a string object, JavaScript will convert the string object to a primitive string value before making the comparison. This means that str and str2 will be considered equal, even though they are different types of objects in memory.
str === str2; // false - when we use the === operator to compare a string literal and a string object, JavaScript will not perform type coercion, and will consider them to be different types of objects in memory. This means that str and str2 will not be considered equal, even though they have the same value.

let str3 =
  "JavaScript is a programming language and JavaScript is used for web development.";

let sliceStr = str3.slice(0, str3.indexOf("and")); // "JavaScript is a programming language "
console.log(str3);
console.log(sliceStr);

let name = "Divya Chandravel";
let email = "divya.chandravel@example.com";
let phone = "123-456-7890";
let address = "123 Main St, Anytown, USA";
let separator = "-".repeat(40);
let contactInfo = `${separator}
Name        : ${name}
Email       : ${email}
Phone       : ${phone}
Address     : ${address}
${separator}`;
console.log(contactInfo);
