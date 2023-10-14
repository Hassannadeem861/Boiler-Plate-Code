const hamBurger = document.querySelector("#hamBurger");
hamBurger.addEventListener("click", () => {
  const navBar = document.querySelector("#navBar");
  //   navBar.classList.add("navBarRes");
  navBar.classList.toggle("navHeight");
  console.log("clicked");
});

const addClassOnSize = () => {
  const ww = document.body.clientWidth;
  console.log(ww);
  const navBar = document.querySelector("#navBar");
  if (ww < 751) {
    navBar.classList.add("navBarRes");
  } else {
    navBar.classList.remove("navBarRes");
  }
};
addClassOnSize();
window.addEventListener("resize", addClassOnSize);
