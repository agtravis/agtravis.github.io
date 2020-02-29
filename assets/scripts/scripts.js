'use strict';

const portfolio = [
  {
    title: 'Password Generator',
    href: 'https://agtravis.github.io/homework-week-3/index.html',
    github: 'https://github.com/agtravis/homework-week-3',
    description:
      'A random password generator with user input and rules defining the result',
    screenshot: 'assets/images/password-generator.PNG'
  },
  {
    title: 'Timed Quiz',
    href: 'https://agtravis.github.io/homework-week-4/index.html',
    github: 'https://github.com/agtravis/homework-week-4',
    description:
      'Test yourself on multiple topics, with conditional scoring and distinctive local storage high-scores',
    screenshot: 'assets/images/timed-quiz.png'
  },
  {
    title: 'Day Planner',
    href: 'https://agtravis.github.io/homework-week-5/index.html',
    github: 'https://github.com/agtravis/homework-week-5',
    description:
      'A daily planner for office hours with local storage conditional time-slots for any date',
    screenshot: 'assets/images/day-planner.png'
  },
  {
    title: 'Weather Dashboard',
    href: 'https://agtravis.github.io/homework-week-6/index.html',
    github: 'https://github.com/agtravis/homework-week-6',
    description:
      'A weather forecast tool with 3rd party API queries & geolocation',
    screenshot: 'assets/images/weather-dashboard.png'
  },
  {
    title: 'Pocket Bartender',
    href: 'https://agtravis.github.io/pocket-bartender/index.html',
    github: 'https://github.com/agtravis/pocket-bartender',
    description:
      'Mobile first app with API queries & local storage for inspiration with home cocktailing',
    screenshot: 'assets/images/pocket-bartender.png'
  },
  {
    title: 'Resume Generator',
    href: 'https://github.com/agtravis/node-resume-generator',
    github: 'https://github.com/agtravis/node-resume-generator',
    description:
      'CLI to run with Node.JS that uses the GitHub API to generate a PDF resume with theme selection',
    screenshot: 'assets/images/node-resume-generator.png'
  },
  {
    title: 'Dev-Team Builder',
    href: 'https://github.com/agtravis/employee-summary-team-builder',
    github: 'https://github.com/agtravis/employee-summary-team-builder',
    description:
      'CLI to run with Node.JS that takes user input to assemble a project team, uses regex validation',
    screenshot: 'assets/images/employee-summary-team-builder.png'
  },
  {
    title: 'Note Taker',
    href: 'https://agtravis-note-taker.herokuapp.com/',
    github: 'https://github.com/agtravis/note-taker',
    description:
      'Heroku deployed app written in JavaScript for Node.JS that runs in the browser and stores user input on a server',
    screenshot: 'assets/images/enter-notes.PNG'
  },
  {
    title: 'Employee Tracker',
    href: 'https://github.com/agtravis/employee-tracker',
    github: 'https://github.com/agtravis/employee-tracker',
    description:
      'CLI running in Node.JS that navigates a SQL DB where a user can manage a team of employees, CRUD features',
    screenshot: 'assets/images/employee-tracker.png'
  },
  {
    title: 'Burger App',
    href: 'https://agtravis-burger.herokuapp.com/',
    github: 'https://github.com/agtravis/burger',
    description:
      'An app that runs in the browser via Heroku and utilizing SQL and CRUD operations to create a fun UI',
    screenshot: 'assets/images/burger-app.png'
  }
];

var portfolioDiv = document.getElementById('portfolio-contents');

if (portfolioDiv) {
  for (var i = 0; i < portfolio.length; ++i) {
    var newDiv = document.createElement('div');
    var newImg = document.createElement('img');
    var newHeading = document.createElement('h5');
    var newPara = document.createElement('p');
    var newAnchor = document.createElement('a');
    var newContainer = document.createElement('div');
    var newAnchorGit = document.createElement('a');
    newDiv.setAttribute('class', 'portfolio-slot');
    newDiv.setAttribute('id', 'portfolio-slot' + i);
    newImg.setAttribute('class', 'portfolio-img pointer');
    newImg.setAttribute('alt', portfolio[i].description);
    newImg.setAttribute('src', portfolio[i].screenshot);
    newImg.setAttribute('id', 'portfolio-image' + i);
    newHeading.setAttribute('class', 'portfolio-heading');
    newHeading.textContent = portfolio[i].title;
    newPara.setAttribute('class', 'portfolio-para bold');
    newPara.setAttribute('id', 'description' + i);
    newContainer.setAttribute('id', 'container' + i);
    newContainer.setAttribute('class', 'portfolio-container-div hide');
    newAnchor.setAttribute('href', portfolio[i].href);
    newAnchor.setAttribute('target', '_blank');
    newAnchor.setAttribute('class', 'portfolio-link');
    newAnchor.setAttribute('id', 'deployed-app' + i);
    newAnchor.textContent = 'Deployed App';
    newAnchorGit.setAttribute('href', portfolio[i].github);
    newAnchorGit.setAttribute('target', '_blank');
    newAnchorGit.setAttribute('class', 'portfolio-link');
    newAnchorGit.setAttribute('id', 'github' + i);
    newAnchorGit.textContent = 'GitHub Repo';
    newPara.innerHTML = portfolio[i].description;
    newDiv.appendChild(newHeading);
    newDiv.appendChild(newImg);
    newContainer.appendChild(newPara);
    newContainer.appendChild(newAnchor);
    newContainer.appendChild(newAnchorGit);
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

if (document.getElementById('contact-form')) {
  var contactForm = document.getElementById('contact-form');
  var submitButton = document.getElementById('submit');
  var userName = document.getElementById('username');
  var email = document.getElementById('email');
  var message = document.getElementById('message');
  var isNamed;
  var isEmailed;
  var isMessaged;

  submitButton.addEventListener('click', function() {
    userName.style.border = '';
    email.style.border = '';
    message.style.border = '';
    if (userName.value !== '') {
      isNamed = true;
    } else {
      isNamed = false;
      // alert('Please enter your name');
      userName.focus();
      userName.style.border = '2px solid red';
    }
    if (email.value !== '') {
      if (email.value.indexOf('@') !== -1) {
        isEmailed = true;
      } else {
        isEmailed = false;
        // alert('Please make sure you enter a valid email address');
        email.focus();
        email.style.border = '2px solid red';
      }
    } else {
      isEmailed = false;
      // alert('Please enter your email');
      email.focus();
      email.style.border = '2px solid red';
    }
    if (message.value !== '') {
      isMessaged = true;
    } else {
      isMessaged = false;
      // alert('Please enter a message');
      message.focus();
      message.style.border = '2px solid red';
    }
    if (isNamed && isEmailed && isMessaged) {
      contactForm.submit();
    }
  });
}
