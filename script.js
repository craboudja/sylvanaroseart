const shopBubbles = [
  {
    title: 'REDBUBBLE',
    logo: './images/redbubble.png',
    altText: 'handdrawn redbubble icon',
    link: 'https://www.redbubble.com/fr/i/sac-a-dos/Motif-fleuri-par-SylvanaRoseArt/83036847.K1KHE'
  },
  {
    title: 'INPRNT',
    logo: './images/inprnt.png',
    altText: 'handdrawn inprnt icon',
    link: 'https://www.inprnt.com/gallery/sylvanaroseart/'
  },
  {
    title: 'OPENSEA',
    logo: './images/opensea.png',
    altText: 'handdrawn opensea icon',
    link: 'https://opensea.io/collection/etherdiving'
  }
]

const socialBubbles = [
  {
    title: 'INSTAGRAM',
    logo: './images/instagram.png',
    altText: 'handdrawn instagram icon',
    link: 'https://www.instagram.com/sylvanaroseart/'
  },
  {
    title: 'FACEBOOK',
    logo: './images/facebook.png',
    altText: 'handdrawn facebook icon',
    link: 'https://www.facebook.com/SylvanaRoseArt'
  },
  {
    title: 'MAIL',
    logo: './images/mail.png',
    altText: 'handdrawn mail icon',
    link: 'mailto:sylvanaroseart@gmail.com'
  },
  {
    title: 'TWITTER',
    logo: './images/twitter.png',
    altText: 'handdrawn twitter icon',
    link: 'https://twitter.com/SylvanaRoseArt'
  }
]

const shops = document.querySelector('.section3-img')
const about = document.querySelector('.section2-img')
const social = document.querySelector('.section1-img')

const coralItems = [shops, about, social]

const stylePointerEvents = (items, stat) => {
  for (let item = 0; item < items.length; item++) {
    items[item].style.pointerEvents = stat
  }
}

// DISPLAY BUBBLES FONCTION

const bubblesDisplay = (bubbles, corals, bubbleContainer) => {
  for (let i = 0; i < bubbles.length; i++) {
    const { logo, altText, link, title } = bubbles[i]

    // BUBBLE LOOP DISPLAY
    const bubble = `
      <a 
          href=${link} 
          target="_blank" 
          rel="noopener noreferrer">
              <img 
                class="${title.toLowerCase()} bubble bubble-depart-position animate-${title.toLowerCase()}" 
                src=${logo} 
                alt=${altText} />
      </a>
      `

    // DISPLAY BUBBLES ON CLICK OR TAP ON CORAL

    const coral = corals

    coral.addEventListener('click', function () {
      bubbleContainer.innerHTML += bubble
      // STOP CLICK ON CORAL
      coral.style.pointerEvents = 'none'
      // OK CLICK AND STOP BUBBLE AFTER 45SEC
      const duration = 45000
      setTimeout(function () {
        bubbleContainer.innerHTML = ''
        coral.style.pointerEvents = 'auto'
      }, duration)
    })
  }
}

const shopContainer = document.querySelector('.shop-links-container')
const socialContainer = document.querySelector('.social-links-container')

bubblesDisplay(shopBubbles, shops, shopContainer)
bubblesDisplay(socialBubbles, social, socialContainer)

// ABOUT

// DISPLAY ABOUT GIF THEN WELCOME
about.addEventListener('click', function () {
  stylePointerEvents(coralItems, 'none')
  const welcome = document.querySelector('.slide-image')
  const text = document.querySelector('.about-video')
  welcome.src = ''
  welcome.alt = ''
  text.src = './images/text.mp4'

  // welcome.classList.add('about-background')

  const duration = 43000
  setTimeout(function () {
    welcome.src = './images/welcome.gif'
    text.src = ''
    stylePointerEvents(coralItems, 'auto')
    welcome.classList.remove('about-background')
  }, duration)
})
