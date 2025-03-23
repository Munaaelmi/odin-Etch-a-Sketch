const container = document.querySelector(".container");
const gridSizeBtn = document.querySelector(".gridSizeBtn");

const divs = () => {
  const div = document.createElement("div");
  div.classList.add("grid");
  container.appendChild(div);
};

// const containerTwo = () => {
//   const container2 = document.createElement("div");
//   container.classList.add("container");
//   const div = document.createElement("div");
//   div.classList.add("grid");
//   container2.appendChild(div);
//   document.body.append(container2);
//   container.remove();
// };

for (let i = 0; i < 256; i++) {
  divs();
}

gridSizeBtn.addEventListener("click", () => {
  let userResponse = prompt(
    "How many number of squares would you like for your grid?"
  );
  let gridSize = userResponse;

  const divs = () => {
    const container2 = document.createElement("div");
    const div = document.createElement("div");
    container2.classList.add("container");
    div.classList.add("grid");

    console.log(container2, div);
    // container2.classList.add("container");
    // div.classList.add("grid");
    // container2.appendChild(div);
    document.body.append(container2);
    // container.remove();

    container2.appendChild(div);
  };

  for (let i = 0; i < gridSize; i++) {
    divs();
  }
});

container.addEventListener("mouseover", (e) => {
  if (e.target.tagName === "DIV") {
    let randomColourOne = Math.floor(Math.random() * 255);
    let randomColourTwo = Math.floor(Math.random() * 255);
    let randomColourThree = Math.floor(Math.random() * 255);

    e.target.style.backgroundColor = `rgb(${randomColourOne}, ${randomColourTwo}, ${randomColourThree})`;
  }
});
