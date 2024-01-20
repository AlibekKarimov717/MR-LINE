




function myFunction() {
  let x = document.getElementById("button").getAttribute("aria-expanded"); 
  if (x == "true") 
  {
    document.body.classList.add("remove-scrolling"); 
  } else {
    document.body.classList.remove("remove-scrolling"); 
  }
  }
