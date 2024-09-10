
// header 
var typed = new Typed('#element', {
  strings: ['<i>Web </i> Developer', '<i>Mern </> Stack Developer', '&amp; Cyber Expert...'],
  typeSpeed: 60,
  loop: true,
  backSpeed: 40,
  backDelay: 1000,
});

// progress 
window.onscroll = function () {
  updateProgressBar();
};

function updateProgressBar() {
  const progressBar = document.getElementById('progressBar');
  const totalHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPosition = window.scrollY;
  const progressPercentage = (scrollPosition / totalHeight) * 100;

  // Cap the progress at 50%
  const cappedProgress = Math.min(progressPercentage, 100);
  progressBar.style.width = cappedProgress + "%";
}

//skills
// Select the progress bar and button elements
var progressBar = document.getElementById('progressBar');
var scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Update progress bar based on scroll position
window.onscroll = function () {
  updateProgressBar();
  toggleScrollToTopBtn();
};

function updateProgressBar() {
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (scrollTop / scrollHeight) * 100;
  progressBar.style.width = scrolled + "%";
}

function toggleScrollToTopBtn() {
  if (document.documentElement.scrollTop > 300) { // Show button after 300px scroll
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

// Scroll to top function
scrollToTopBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};


