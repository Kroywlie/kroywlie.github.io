let header = document.querySelector("header");
document.addEventListener("scroll", () => {
  if (window.scrollY > 200 && header.style.backgroundColor != "141414") {
    header.style.backgroundColor = "141414";
  } else if (window.scrollY < 200 &&header.style.backgroundColor == "141414"){
    header.style.backgroundColor = "none";
  }
});
