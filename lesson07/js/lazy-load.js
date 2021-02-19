let imagesToAdd = document.querySelectorAll('img[data-src]');

let imgOptions = {
    threshhold: 0,
    rootMargin: "0px 0px -150px 0px"
};

let loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onLoad = () => {image.removeAttribute('data-src');};
};

if('IntersectionObserver' in window){
let imgObserver = new IntersectionObserver((items, imgObserver) => {
    items.forEach((item) => {
        if (!item.isIntersecting) {
            return;
        } else {
            loadImages(item.target);
            imgObserver.unobserve(item.target);
        }   
    });
  }, imgOptions);
    imagesToAdd.forEach((img) => {
    imgObserver.observe(img); 
});
} else {
    imagesToAdd.forEach((img) =>{
      loadImages(img);  
    });
}