let oldScroll = 0;
const header = document.querySelector("header"); // header elementni olish

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;


  if (currentScroll > oldScroll) {
    header.style.top = "-100px"; // yo‘qoladi
  } 

  else {
    header.style.top = "0"; 
  }

  oldScroll = currentScroll;
});
