let oldScroll = 0;
const header = document.querySelector("header"); 

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;


  if (currentScroll > oldScroll) {
    header.style.top = "-100px"; 
  } 

  else {
    header.style.top = "0"; 
  }

  oldScroll = currentScroll;
});
