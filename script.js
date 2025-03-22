const container = document.querySelector(".container");

// const div = document.createElement("div");
// div.classList.add("grid");
// container.appendChild(div);

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
    let randomColour = Math.floor(Math.random() * 256);
  }
});
