const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.body.className = savedTheme;
}

document.getElementById('themeA').onclick = () => setTheme('theme-a');
document.getElementById('themeB').onclick = () => setTheme('theme-b');
document.getElementById('themeC').onclick = () => setTheme('theme-c');
document.getElementById('themeD').onclick = () => setTheme('theme-d');

function setTheme(theme) {
  document.body.className = theme;
  localStorage.setItem('theme', theme);
}

function confirmLogout() {
  document.getElementById('logoutModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('logoutModal').style.display = 'none';
}

function logout() {
  alert('Thank you for using the dashboard. You have logged out.');
  closeModal();
  window.location.href = 'login.html';
}

function uploadImage() {
  var fileInput = document.getElementById('upload');
  var file = fileInput.files[0];

  var reader = new FileReader();
  reader.onload = function(e) {
    var imageDataUrl = e.target.result;
    localStorage.setItem('profilePic', imageDataUrl);
    document.getElementById('profilePic').src = imageDataUrl;
  };
  reader.readAsDataURL(file);
}

window.onload = function() {
  var savedImage = localStorage.getItem('profilePic');
  if (savedImage) {
    document.getElementById('profilePic').src = savedImage;
  }
}
