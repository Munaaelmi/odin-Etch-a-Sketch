const container = document.querySelector(".container");
const gridSizeBtn = document.querySelector(".gridSizeBtn");

const divs = () => {
  const div = document.createElement("div");
  div.classList.add("grid");
  container.appendChild(div);
};

for (let i = 0; i < 256; i++) {
  divs();
}

container.addEventListener("mouseover", (e) => {
  if (e.target.tagName === "DIV") {
    let randomColourOne = Math.floor(Math.random() * 255);
    let randomColourTwo = Math.floor(Math.random() * 255);
    let randomColourThree = Math.floor(Math.random() * 255);
    e.target.style.backgroundColor = `rgb(${randomColourOne}, ${randomColourTwo}, ${randomColourThree})`;
  }
});

gridSizeBtn.addEventListener("click", () => {
  let userResponse = prompt(
    "How many number of squares would you like for your grid between 1 -100?"
  );
  let gridSize = userResponse;

  if (userResponse > 1 && userResponse <= 100) {
    if (userResponse) {
      let newContainer = document.createElement("section");
      const divs = () => {
        const div = document.createElement("div");
        div.classList.add("grid");
        newContainer.classList.add("container");
        newContainer.appendChild(div);
        document.body.append(newContainer);
        container.remove();
      };
      for (let i = 0; i < gridSize * gridSize; i++) {
        divs();
      }

      newContainer.addEventListener("mouseover", (e) => {
        if (e.target.tagName === "DIV") {
          let randomColourOne = Math.floor(Math.random() * 255);
          let randomColourTwo = Math.floor(Math.random() * 255);
          let randomColourThree = Math.floor(Math.random() * 255);
          e.target.style.backgroundColor = `rgb(${randomColourOne}, ${randomColourTwo}, ${randomColourThree})`;
        }
      });

      let section = newContainer.previousElementSibling.tagName === "SECTION";

      if (section) {
        newContainer.previousElementSibling.remove();
      }
    }
  }
});
