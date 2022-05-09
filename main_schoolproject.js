window.transitionToPage = function(href) {
  document.querySelector('body').style.opacity = 0
  setTimeout(function() { 
      window.location.href = href
  }, 500)
}

document.addEventListener('DOMContentLoaded', function(event) {
  document.querySelector('body').style.opacity = 1
})

let header = document.querySelector("header");
document.addEventListener("scroll", () => {
  if (window.scrollY > 200 && header.style.backgroundColor != "141414") {
    header.style.backgroundColor = "141414";
  } else if (window.scrollY < 200 &&header.style.backgroundColor == "141414"){
    header.style.backgroundColor = "none";
  }
});
