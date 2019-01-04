
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}




function elementFromTop(elemTrigger, elemTarget, classToAdd, distanceFromTop, unit) {
    var winY = window.innerHeight || document.documentElement.clientHeight,
        elTriggerLength = elemTrigger.length,
        elTargetLength, distTop, distPercent, distPixels, distUnit, elTarget, i, j;
    for (i = 0; i < elTriggerLength; ++i) {
        elTarget = document.querySelectorAll('.'+elemTarget);
        elTargetLength = elTarget.length;
        distTop = elemTrigger[i].getBoundingClientRect().top;
        distPercent = Math.round((distTop / winY) * 100);
        distPixels = Math.round(distTop);
        distUnit = unit == 'percent' ? distPercent : distPixels;
        if (distUnit <= distanceFromTop) {
            if (!hasClass(elemTrigger[i], elemTarget)) {
               for (j = 0; j < elTargetLength; ++j) {
                   if (!hasClass(elTarget[j], classToAdd)) { addClass(elTarget[j], classToAdd); }
                   }
               } else {
               if (!hasClass(elemTrigger[i], classToAdd)) { addClass(elemTrigger[i], classToAdd); }                }
           } else {
           delClass(elemTrigger[i], classToAdd);
           if (!hasClass(elemTrigger[i], elemTarget)) {
              for (j = 0; j < elTargetLength; ++j) { delClass(elTarget[j], classToAdd); }
               }
           }
       }
   }
// params:  trigger element, target element class, classes to add to target element, trigger element distance from top, unit ('percent' or 'pixels')
// usage:   elementFromTop(elemTrigger, elemTarget, classToAdd, distanceFromTop, unit);



var animateHTML = function() {
  var elems;
  var windowHeight;
  function init() {
    elems = document.querySelectorAll('.hidden');
    windowHeight = window.innerHeight;
    addEventHandlers();
    checkPosition();
  }
  function addEventHandlers() {
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  }
  function checkPosition() {
    for (var i = 0; i < elems.length; i++) {
      var positionFromTop = elems[i].getBoundingClientRect().top;
      if (positionFromTop - windowHeight <= 0) {
        elems[i].className = elems[i].className.replace(
          'hidden',
          'fade-in-element'
        );
      }
    }
  }
  return {
    init: init
  };
};
animateHTML().init();



AOS.init({
  duration: 1200,
})






