let day = 0;

switch (day) {
  case 0:
  case 6:
    console.log("Happy weekend!");
    break;
  case 1:
    console.log("Happy Monday!");
    break;
  case 2:
  case 3:
  case 4:
    console.log("Midweek blues!");
    break;
  case 5:
    console.log("It's Friday!");
    break;
  default:
    console.log("Invalid day!");
}

//let i = 1;
// for (i = 1; i <= 5; i++) {
//   console.log("*");
// }

// while (i <= 5) {
//   console.log("*");
//   i++;
// }

// do {
//   console.log("*");
//   i++;
// } while (i <= 5);

//Pattern loop

// let i,
//   j,
//   row,
//   n = 5;
// for (i = 0; i < 5; i++) {
//   row = "";
//   for (j = 0; j < 5; j++) {
//     row = row + "*";
//   }
//   console.log(row);
// }

// for (i = 0; i < n; i++) {
//   row = "";
//   for (j = 0; j < n; j++) {
//     //row = row + "*";
//     if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
//       row = row + i;
//     } else {
//       row = row + " ";
//     }
//   }
//   console.log(row);
// }

// let i,
//   j,
//   row,
//   n = 11;

// for (i = 0; i < n; i++) {
//   row = "";
//   for (j = 0; j < n; j++) {
//     //row = row + "*";
//     if (
//       i === 0 ||
//       i === n - 1 ||
//       j === 0 ||
//       j === n - 1 ||
//       i === Math.floor(n / 2) ||
//       j === Math.floor(n / 2) ||
//       i === j ||
//       //   j === n - 1 - i
//       i + j === n - 1 ||
//       i + j === Math.floor(n / 2) ||
//       i - j === Math.floor(n / 2) ||
//       j - i === Math.floor(n / 2) ||
//       i + j === n - 1 + Math.floor(n / 2)
//     ) {
//       row = row + "*";
//     } else {
//       row = row + " ";
//     }
//   }
//   console.log(row);
// }

//Triangle Pattern
let i,
  j,
  row,
  n = 5;
// for (i = 0; i < n; i++) {
//   row = "";
//   for (j = 0; j <= i; j++) {
//     row = row + j + " ";
//   }
//   row = row + "";
//   console.log(row);
// }

// for (i = 0; i < n; i++) {
//   row = "";
//   for (j = 0; j <= i; j++) {
//     row = row + i + " ";
//   }
//   row = row + "";
//   console.log(row);
// }

// for (i = 0; i < n; i++) {
//   row = "";
//   for (j = 0; j <= i; j++) {
//     // row = row + i + i + " ";
//     row = row + i + j + " ";
//   }
//   row = row + "";
//   console.log(row);
// }

// for (i = n; i > 0; i--) {
//   row = "";
//   for (j = 1; j <= i ; j++) {
//     row = row + j + " ";

//   }
//    console.log(row);
// }

//Pyramid Pattern

for (i = 1; i <= n; i++) {
  row = "";
  for (j = 1; j <= n - i; j++) {
    row = row + " ";
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    row += k + " ";
  }
  console.log(row);
}
