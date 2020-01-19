'use strict';

const portfolio = [
  {
    title: 'Password Generator',
    href: 'https://agtravis.github.io/homework-week-3/index.html',
    description:
      'A random password generator with user input and rules defining the result',
    screenshot: 'assets/images/password-generator.PNG'
  },
  {
    title: 'Timed Quiz',
    href: 'https://agtravis.github.io/homework-week-4/index.html',
    description:
      'A timed quiz app to test users knowledge on multiple topics, with time based scores and local storage high scores for each quiz',
    screenshot: 'assets/images/timed-quiz.PNG'
  }
];

var portfolioDiv = document.getElementById('portfolio-contents');

if (portfolioDiv) {
  for (var i = 0; i < portfolio.length; ++i) {
    var newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'portfolio-slot');
    var newImg = document.createElement('img');
    newImg.setAttribute('class', 'portfolio-img');
    newImg.setAttribute('alt', portfolio[i].description);
    newImg.setAttribute('src', portfolio[i].screenshot);
    var newHeading = document.createElement('h5');
    newHeading.setAttribute('class', 'portfolio-heading');
    newHeading.textContent = portfolio[i].title;
    var newPara = document.createElement('p');
    newPara.setAttribute('class', 'portfolio-para hide');
    newPara.textContent = portfolio[i].description;
    var newAnchor = document.createElement('a');
    newAnchor.setAttribute('href', portfolio[i].href);
    newAnchor.setAttribute('target', '_blank');
    newAnchor.setAttribute('class', 'portfolio-link');
    newAnchor.appendChild(newImg);
    newDiv.appendChild(newHeading);
    newDiv.appendChild(newAnchor);
    newDiv.appendChild(newPara);
    if (!portfolioDiv.firstChild) {
      portfolioDiv.appendChild(newDiv);
    } else {
      portfolioDiv.insertBefore(newDiv, portfolioDiv.childNodes[0]);
    }
  }
}

document
  .getElementById('portfolio-dropdown')
  .addEventListener('click', function(event) {
    event.preventDefault();
    if (document.getElementById('portfolio-list').classList.contains('hide')) {
      document.getElementById('portfolio-list').classList.remove('hide');
    } else {
      document.getElementById('portfolio-list').classList.add('hide');
    }
  });

if (document.getElementById('profile-pic')) {
  document.getElementById('profile-pic').addEventListener('click', function() {
    if (this.getAttribute('src') === 'assets/images/me1.jpg') {
      this.setAttribute('src', 'assets/images/me2.jpg');
    } else {
      this.setAttribute('src', 'assets/images/me1.jpg');
    }
  });
}
