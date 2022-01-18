const curseur = document.getElementById('cursor')
let oldx = 0
let oldy = 0
window.addEventListener('mousemove', function cursorFollow (event) {
  curseur.style.top = event.pageY + -10 + 'px'
  curseur.style.left = event.pageX + -10 + 'px'

  if (event.clientX < oldx && event.clientY < oldy) {
    curseur.style.background = "url('images/leftTop.gif') no-repeat"
  } else if (event.clientX < oldx && event.clientY > oldy) {
    curseur.style.background = "url('images/leftBottom.gif') no-repeat"
  } else if (event.clientX > oldx && event.clientY < oldy) {
    curseur.style.background = "url('images/rightTop.gif') no-repeat"
  } else if (event.clientX > oldx && event.clientY > oldy) {
    curseur.style.background = "url('images/rightBottom.gif') no-repeat"
  }

  oldx = event.clientX
  oldy = event.clientY
})