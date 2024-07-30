function createImage(imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.querySelector("img");
    img.src = imgPath;

    img.addEventListener("load", function () {
      imgContainer.appendChild(img);
    });
  });
}

createImage("asdasd")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
