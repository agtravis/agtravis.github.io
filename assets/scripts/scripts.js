'use strict';

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
