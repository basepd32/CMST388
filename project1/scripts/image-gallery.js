// defining variables
let largeIMG = document.querySelector("#largeIMG");
let caption = document.querySelector("#caption");
let thumbnails = document.querySelector("#thumbnails").children;

// changing caption based on alt text of gallery images
function hoverIMG(galleryIMG) {
    caption.innerHTML = galleryIMG.alt;
}

// changing src of large image based on selected image
function selectIMG(galleryIMG) {
    largeIMG.src = galleryIMG.src;

// removing all css classes from thumbnail images, then adding a border class on clicked thumbnail image
    for (i = 0; i < thumbnails.length; i++) thumbnails[i].classList.remove("thumbUP");
    galleryIMG.classList.add("thumbUP");
}