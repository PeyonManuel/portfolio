export const fadeInLeftOnScroll = (element) => {
  if (!element) {
    return;
  }

  var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
  var elementHeight = element.offsetHeight;

  if (0 > distanceToTop - window.innerHeight + elementHeight) {
    element.classList.add('fade-right');
  }
};

export const fadeUpLessOnScroll = (element) => {
  if (!element) {
    return;
  }
  var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
  var elementHeight = element.offsetHeight;

  if (
    elementHeight / 1.5 >
    distanceToTop - window.innerHeight + elementHeight
  ) {
    element.classList.add('fade-up-less');
  }
};
