let bars = document.getElementById('bars');
let nav = document.getElementById('navbar');
const searchbox = document.getElementById('searchbox');

bars.onclick = () =>{
 bars.classList.toggle('fa-times');
 nav.classList.toggle('active');
}

window.onscroll = () =>{
 menu.classList.remove('fa-times');
 nav.classList.remove('active');
}

function search(){
if (searchbox.style.display = 'none') {
 searchbox.style.display = 'block';
} else {
 searchbox.style.display = 'none';
}
}
