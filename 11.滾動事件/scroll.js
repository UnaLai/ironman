// debounce
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const earthImg = document.querySelector(".moveicon")

function earthmove() {
  const moveToNextAt = (earthImg.offsetTop) + (earthImg.clientHeight / 2);
  if (window.scrollY > moveToNextAt) {
    earthImg.classList.add('move');
  } else {
    earthImg.classList.remove('move');
  }
}

window.addEventListener('scroll', debounce(earthmove, 5));
// window.addEventListener('scroll', earthmove);
