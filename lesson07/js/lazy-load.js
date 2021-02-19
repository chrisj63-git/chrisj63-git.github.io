CONST imagesToAdd = document.querySelectorAll('img[data-src]');

CONST imgOptions = {
    threshhold: 1,
    rootMargin: "0px 0px 50px 0px"
};

CONST loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onLoad() => {image.removeAttribute('data-src');};
};

if('IntersectionObserver' in window){
CONST imgObserver = new IntersectionObserver((items, imgObserver) => {
    items.forEach((item) => {
        if (!item.isIntersecting) {
            return;
        } else {
            loadImages(item.target);
            imgObserver.unobserve(item.target);
        }   
    });
  });
}, imgOptions);

    imagesToLoad.forEach((img) => {
    imgObserver.observe(img); 
});
}
else {
    imagesToAdd.forEach((img) =>{
      loadImages(img);  
    });
}