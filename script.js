
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


// chat box 
document.getElementById('openChat').addEventListener('click', function () {
  document.getElementById('chatbox').style.display = 'flex';
});

document.getElementById('closeChat').addEventListener('click', function () {
  document.getElementById('chatbox').style.display = 'none';
});

document.getElementById('predefined-questions').addEventListener('click', function (e) {
  if (e.target.tagName === 'LI') {
    var question = e.target.getAttribute('data-question');
    var questionText = e.target.innerText;
    addMessage(questionText, 'user');
    getAnswer(question);
  }
});

function addMessage(message, sender) {
  var chatContent = document.getElementById('chat-content');
  var messageDiv = document.createElement('div');
  messageDiv.className = 'chat-message ' + sender;
  messageDiv.innerText = message;
  chatContent.appendChild(messageDiv);
  chatContent.scrollTop = chatContent.scrollHeight;
}

function getAnswer(question) {
  var answers = {
    'what is name of your owner': 'hassan Sardar.',
    'What is best skills of your owner': 'He is MERN stack developer and cyber expert.',
    'what is his best skills': 'My creator is skilled in HTML, CSS, JavaScript, and and Back end Developer.',
    'how can I contact him?': 'His phone number is 03146362403.',
  };

  var response = answers[question] || 'I\'m not sure how to answer that. Please check the portfolio for more information!';
  addMessage(response, 'bot');
}
