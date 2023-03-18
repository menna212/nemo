let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById( 'river');
let boat6 = document.getElementById('boat');
let nouvil = document.querySelector('.nouvil');
window.onscroll = function(){
let value = scrollY;
stars.style.left = value + 'px';
moon.style.top= value *3+ 'px';
mountains4.style.top= value + 'px* '; 1.5 + 'px';
mountains3.style.top= value * 2 + 'px';
river.style.top = value + 'px';
boat6.style.top = value + 'px';
boat6.style.left = value * 3 + 'px';
nemo.style.fontSize = value +'px';
if(scrolly >= 67){
nemo.style.fontSize = 67 + 'px';
nemo.style.position = 'fixed';
if(scrolly >= 478) {
nemo.style.display = 'none';
}else{
nemo.style.display = 'block';
}
}
}