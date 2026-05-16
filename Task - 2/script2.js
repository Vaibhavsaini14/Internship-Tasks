function toggleMenu() {
  document.getElementById('menu').classList.toggle('open');
}

function addBook() {
  var title = document.getElementById('book').value.trim();

  if (title === '') {
    alert('Please enter a book title.');
    return;
  }

  var li = document.createElement('li');
  li.innerHTML = '<span>📖 ' + title + '</span><button onclick="this.parentElement.remove()">Remove</button>';
  document.getElementById('list').appendChild(li);
  document.getElementById('book').value = '';
}

function submitReview(event) {
  event.preventDefault();

  var bname  = document.getElementById('bname').value.trim();
  var author = document.getElementById('author').value.trim();
  var rating = document.getElementById('rating').value;
  var msg    = document.getElementById('msg').value.trim();
  var valid  = true;

  ['err1','err2','err3','err4','ok'].forEach(function(id) {
    document.getElementById(id).textContent = '';
  });

  if (!bname)  { document.getElementById('err1').textContent = 'Book title is required.';  valid = false; }
  if (!author) { document.getElementById('err2').textContent = 'Author name is required.'; valid = false; }
  if (!rating) { document.getElementById('err3').textContent = 'Please select a rating.';  valid = false; }
  if (!msg)    { document.getElementById('err4').textContent = 'Review cannot be empty.';  valid = false; }

  if (valid) {
    document.getElementById('ok').textContent = '✓ Review submitted! Thanks for sharing.';
    document.getElementById('form').reset();
  }
}
