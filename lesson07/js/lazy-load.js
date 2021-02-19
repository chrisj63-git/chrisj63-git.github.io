let imagesToAdd = document.querySelectorAll('img[data-src]');

const imgOptions = {
    threshhold: 0,
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = function(){image.removeAttribute("data-src");};
};

if('IntersectionObserver' in window){
const imgObserver = new IntersectionObserver((items, imgObserver) => {
    items.forEach((item) => {
        if (!item.isIntersecting) {
            return;
        } else {
            loadImages(item.target);
            imgObserver.unobserve(item.target);
        }   
    });
  }, imgOptions);
    imagesToAdd.forEach((image) => {
    imgObserver.observe(image); 
});
} /* else {
    imagesToAdd.forEach((image) =>{
      loadImages(image);  
    }); 
} */