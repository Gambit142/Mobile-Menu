const mobileMenuDiv = document.querySelector('#mobile-menu');
mobileMenuDiv.className = 'mobile-menu-hidden';
// Create closing icon and attach to div
const closingIcondiv = document.createElement('div');
closingIcondiv.className = 'menu-item';
closingIcondiv.className = 'closing-icon-item';
let anchorTag = document.createElement('a');
anchorTag.setAttribute('href', '#');
const closingIcon = document.createElement('IMG');
closingIcon.setAttribute('src', 'media/png/Closing-Icon.png');
closingIcon.setAttribute('alt', 'Icon image');
closingIcon.id = 'close-button';
anchorTag.appendChild(closingIcon);
closingIcondiv.appendChild(anchorTag);
mobileMenuDiv.appendChild(closingIcondiv);
// Create portfolio link item and attach to the mobile menu div
const portfolioLinkDiv = document.createElement('div');
portfolioLinkDiv.className = 'menu-item';
anchorTag = document.createElement('a');
anchorTag.className = 'nav-menu-link';
anchorTag.textContent = 'Portfolio';
anchorTag.setAttribute('href', '#');
portfolioLinkDiv.appendChild(anchorTag);
mobileMenuDiv.appendChild(portfolioLinkDiv);
// Create about link section and attach to the mobile menu div
const aboutDiv = document.createElement('div');
aboutDiv.className = 'menu-item';
anchorTag = document.createElement('a');
anchorTag.className = 'nav-menu-link';
anchorTag.textContent = 'About';
anchorTag.setAttribute('href', '#');
aboutDiv.appendChild(anchorTag);
mobileMenuDiv.appendChild(aboutDiv);
// Create contact link section and attach to the mobile menu div
const contactDiv = document.createElement('div');
contactDiv.className = 'menu-item';
anchorTag = document.createElement('a');
anchorTag.className = 'nav-menu-link';
anchorTag.textContent = 'Contact';
anchorTag.setAttribute('href', '#');
contactDiv.appendChild(anchorTag);
mobileMenuDiv.appendChild(contactDiv);
const menuButton = document.querySelector('.menu-bars');

function display() {
  mobileMenuDiv.classList.add('show');
  menuButton.style.display = 'none';
}

menuButton.addEventListener('click', display);
