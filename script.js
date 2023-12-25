/* плавный скролл */
function Down(){
  const block = document.getElementById('block_1');
  block.scrollIntoView({behavior: "smooth", block: "center"})
}
function About(){
  const aboutme = document.getElementById('aboutme')
  aboutme.scrollIntoView({ behavior: 'smooth', block: 'start' })
  
}
function Achie() {
	const achie = document.getElementById('achievements')
	achie.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
function Photo(){
  const photo = document.getElementById('photogallery')
  photo.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
function Contact(){
  const contact =  document.querySelector('footer')
  contact.scrollIntoView({ behavior: 'smooth', block: 'start' })
}




const topbtn = document.getElementById('top-btn')
const aboutme = document.getElementById('aboutme')
const achie = document.getElementById('achievements')



window.onload = () => {
  topbtn.style.visibility = 'hidden';
  topbtn.style.opacity = 0
  aboutme.style.visibility = 'hidden'
  aboutme.style.opacity = 0
}
window.onscroll = () =>{
  if(window.scrollY > 100){
    aboutme.style.opacity = 1;
    aboutme.style.visibility = 'visible'
    topbtn.style.visibility = 'visible';
    topbtn.style.opacity = 1;

  }else{
    topbtn.style.visibility = 'hidden'
		topbtn.style.opacity = 0;
    aboutme.style.opacity = 0;
  }
}
function Up() {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth',
	})
}
/* Обратная связь */