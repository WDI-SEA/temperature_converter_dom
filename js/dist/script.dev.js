"use strict";

document.getElementById('submit').addEventListener('click', function (e) {
  console.log(document.getElementById('entry').value);
});
document.getElementById('using').addEventListener('submit', function (e) {
  e.preventDefault();
  console.log('The form has been submitted');
});