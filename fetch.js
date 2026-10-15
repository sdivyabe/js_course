// fetch("https://catfact.ninja/fact")
//   //   .then((res) => res.text())  //text() - return a promise
//   .then((res) => res.json()) //json() - return a  promise and js object
//   .then((txt) => console.log(txt))
//   .catch(() => console.log("API Failed"));

const getCatFact = async () => {
  const res = await fetch("https://catfact.ninja/fact");
  console.log(res);
  const txt = res.json();
  console.log(txt);
};
// getCatFact();

let exmp = {
  name: "Apple MacBook Pro 17",
  data: {
    year: 2022,
    price: 20000.4,
    "CPU Model": "Intel Core i10",
    "Hard disk size": "1.5 TB",
  },
};

const rest = async () => {
  let data = await fetch("https://api.restful-api.dev/objects", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(exmp),
  });
  let txt = await data.json();
  console.log(txt);
};
rest()
