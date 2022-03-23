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
  },
  {
    title: 'ETSY',
    logo: './images/etsy.png',
    altText: 'handdrawn etsy icon',
    link: 'https://www.etsy.com/shop/SylvanaRoseArt'
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

// CORALS IMG
const shops = document.querySelector('.section3-img')
const about = document.querySelector('.section2-img')
const social = document.querySelector('.section1-img')

// CORALS IMG TO DISPLAY

// CONTAINERS WHERE BUBBLES ARE DISPLAYED
const shopContainer = document.querySelector('.shop-links-container')
const socialContainer = document.querySelector('.social-links-container')

// __________________________________________________________________
// MOUSE OVER

const coralChange = (coral, coralName) => {
  coral.addEventListener('mouseenter', () => {
    coral.src = `./images/${coralName}.gif`
  })
  coral.addEventListener('mouseleave', () => {
    coral.src = `./images/${coralName}.png`
  })
}

coralChange(social, 'social')
coralChange(shops, 'shops')
coralChange(about, 'about')

// ______________________________________________________________________
// BUBBLES

// DISPLAY BUBBLES FONCTION - ADD BUBBLES TO CONTAINER
const bubblesDisplay = (bubbles, coral, bubbleContainer) => {
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

    // INITIALIZE TO FALSE (NO BUBBLES DISPLAY)
    let displayBubbles = false
    // DISPLAY ON CLICK/TAP ON CORAL
    coral.addEventListener('click', function () {
      if (!displayBubbles) {
        displayBubbles = true
        bubbleContainer.innerHTML += bubble

        // STOP BUBBLE AFTER 45SEC
        const duration = 45000
        setTimeout(function () {
          bubbleContainer.innerHTML = ''
        }, duration)

      // OR STOP IF RE-CLICK/RE-TAP
      } else {
        displayBubbles = false
        bubbleContainer.innerHTML = ''
      }
    })
  }
}

// SHOP BUBBLES DISPLAY
bubblesDisplay(shopBubbles, shops, shopContainer)

// SOCIAL BUBBLES DISPLAY
bubblesDisplay(socialBubbles, social, socialContainer)

// ______________________________________________________________________
// ABOUT

// INITIALIZE DISPLAY TO FALSE

const welcome = document.querySelector('.about-image')

// DISPLAY BASIS TEXT WITH NO BACKGROUND
const displayWelcomeText = () => {
  welcome.src = './images/welcome.png'
  welcome.classList.remove('about-background')

  console.log('display welcome text')
}

// DISPLAY ABOUT TEXT WITH BACKGROUND WHILE 44S
// BACKGROUND AND TEXT CHANGE AFTER 45SEC
const displayAboutText = () => {
  welcome.src = './images/text.gif'
  welcome.classList.add('about-background')
  console.log('displayAboutText')

  setTimeout(() => {
    displayWelcomeText()
    about.style.pointerEvents = 'auto'
  }, 44000)
}

about.addEventListener('click', function () {
  about.style.pointerEvents = 'none'
  displayAboutText()
})
