// 1. Variable declaration:
let current = document.querySelector(".current");
let images = document.querySelectorAll(".images img");

console.log(images);

// 2. CSS style of list of imgs
images[0].style.opacity = 0.5;

// 3. Adding function in event of each img
images.forEach(function (item) {
  item.addEventListener("click", showImage);
});

// 4. Declaring function to show each img
function showImage(e) {
  console.log(e);
  current.src = e.target.src;

  //   5. Style Css filter for the current img and other img
  for (let i = 0; i < images.length; i++) {
    images[i].style.opacity = 1;
  }

  e.target.style.opacity = 0.5;
}
