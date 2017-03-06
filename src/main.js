//http://stackoverflow.com/questions/3559467/description-box-using-onmouseover
var e = document.getElementById('trigger');
e.onmouseover = function() {
  document.getElementById('popup').style.display = 'block';
}
e.onmouseout = function() {
  document.getElementById('popup').style.display = 'none';
}
