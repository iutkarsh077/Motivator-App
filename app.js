let a = document.getElementById("first");
let btn = document.getElementById("btn");
let author = document.getElementById("name");

function func1() {
  fetch("https://web-series-quotes-api.deta.dev/quote/", {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      a.innerHTML = data[0].quote;
      author.innerHTML = data[0].author;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
