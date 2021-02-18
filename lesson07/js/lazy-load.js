CONST images = document.querySelectorAll("[data-src]");

function preloadimage(img) {
  const src = img.getAttribute("data-src");
  if (!src) {
      return;
  }
  img.src = src;    
}


CONST imgOptions = {
    threshhold: 0,
    rootMargin: "0px 0px 300px 0px"
};

CONST imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
    if (!entry.isIntersecting) {
        return;
    } else {
        preloadImage(entry.target);
        imgObserver.unobserve(entry.target);
    }
})
}, imgOptions);

images.forEach(image +> {
   imgObserver, observe(image); 
});