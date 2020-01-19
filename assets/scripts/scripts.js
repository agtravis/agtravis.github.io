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
      'Test yourself on multiple topics, with conditional scoring and distinctive high-scores',
    screenshot: 'assets/images/timed-quiz.PNG'
  }
];

var portfolioDiv = document.getElementById('portfolio-contents');

if (portfolioDiv) {
  for (var i = 0; i < portfolio.length; ++i) {
    var newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'portfolio-slot');
    newDiv.setAttribute('id', 'portfolio-slot' + i);
    var newImg = document.createElement('img');
    newImg.setAttribute('class', 'portfolio-img pointer');
    newImg.setAttribute('alt', portfolio[i].description);
    newImg.setAttribute('src', portfolio[i].screenshot);
    newImg.setAttribute('id', 'portfolio-image' + i);
    var newHeading = document.createElement('h5');
    newHeading.setAttribute('class', 'portfolio-heading');
    newHeading.textContent = portfolio[i].title;
    var newPara = document.createElement('p');
    newPara.setAttribute('class', 'portfolio-para bold');
    newPara.setAttribute('id', 'description' + i);
    var newAnchor = document.createElement('a');
    var newContainer = document.createElement('div');
    newContainer.setAttribute('id', 'container' + i);
    newContainer.setAttribute('class', 'portfolio-container-div hide');
    newAnchor.setAttribute('href', portfolio[i].href);
    newAnchor.setAttribute('target', '_blank');
    newAnchor.setAttribute('class', 'portfolio-link');
    newAnchor.setAttribute('id', 'deployed-app' + i);
    newAnchor.textContent = 'See Deployed App';
    newPara.innerHTML = portfolio[i].description;
    // newPara.appendChild(newAnchor);
    newDiv.appendChild(newHeading);
    newDiv.appendChild(newImg);
    newContainer.appendChild(newPara);
    newContainer.appendChild(newAnchor);
    newDiv.appendChild(newContainer);
    if (!portfolioDiv.firstChild) {
      portfolioDiv.appendChild(newDiv);
    } else {
      portfolioDiv.insertBefore(newDiv, portfolioDiv.childNodes[0]);
    }
  }
  for (var i = 0; i < portfolio.length; ++i) {
    document
      .getElementById('portfolio-image' + i)
      .addEventListener('click', function() {
        if (!this.parentElement.children[1].classList.contains('opacity')) {
          this.parentElement.children[1].classList.add('opacity');
          this.parentElement.children[1].classList.remove('pointer');
          this.parentElement.children[2].classList.remove('hide');
        } else {
          this.parentElement.children[1].classList.remove('opacity');
          this.parentElement.children[1].classList.add('pointer');
          this.parentElement.children[2].classList.add('hide');
        }
      });
    document
      .getElementById('portfolio-slot' + i)
      .addEventListener('mouseleave', function() {
        this.children[1].classList.remove('opacity');
        this.children[1].classList.add('pointer');
        this.children[2].classList.add('hide');
      });
    document
      .getElementById('description' + i)
      .addEventListener('mousedown', function() {
        this.parentElement.parentElement.children[2].classList.add('hide');
        this.parentElement.parentElement.children[1].classList.remove(
          'opacity'
        );
        this.parentElement.parentElement.children[1].classList.add('pointer');
        this.parentElement.parentElement.children[1].classList.add('active');
      });
    document
      .getElementById('portfolio-image' + i)
      .addEventListener('mouseup', function() {
        if (!this.parentElement.children[1].classList.contains('opacity')) {
          this.parentElement.children[1].classList.remove('active');
          this.parentElement.children[1].classList.remove('opacity');
          this.parentElement.children[1].classList.add('pointer');
        }
      });
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
