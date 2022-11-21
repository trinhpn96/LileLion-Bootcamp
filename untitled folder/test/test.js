// 1. Variable declaration:
let currentImg = document.querySelector(".current-img");
let imgList = document.querySelectorAll(".imgList img");

console.log(imgList);

// 2. CSS style of list of imgs
imgList[0].style.opacity = 0.5;

// 3. Adding function in event of each img
imgList.forEach(function (img) {
  img.addEventListener("click", showImg);
});

// 4. Declaring function to show each img
function showImg(event) {
    console.log (event);
    currentImg.src = event.target.src;

//   5. Style Css filter for the current img and other img
for (let i = 0; i < imgList.length; i++) {
    imgList[i].style.opacity = 1;
}
event.target.style.opacity = 0.5;
}