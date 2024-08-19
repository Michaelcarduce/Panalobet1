class SpecialHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="special-header">
        <div id="navigation" class="navigation">
          <div class="alignment">
            <a href="#"><img class="logo" src="img/logo.png" alt="PANALOBET Logo" title="PANALOBET Logo"></a>
          </div>
          <div class="alignment navigationlinks">
            <nav>
              <ul id="menu-new" class="colibri-menu topnav">
                <li><a href="index.html" id="home-link">HOME</a></li>
                <li><a href="aboutus.html" id="about-link">ABOUT US</a></li>
                <li><a href="onlineslot.html" id="onlineslot-link">ONLINE SLOT</a></li>
                <li><a href="fishinggames.html" id="fishinggames-link">FISHING GAMES</a></li>
                <li><a href="promotion.html" id="promotion-link">PROMOTIONS</a></li>
                <li><a href="news.html" id="news-link">NEWS</a></li>
              </ul>
            </nav>
          </div>
          <div class="alignment">
            <a href="#" target="_blank"><img class="btnNav" src="img/login_btn_login_normal.webp" alt="" title=""></a>
            <a href="#" target="_blank"><img class="btnNav" src="img/login_btn_signup_normal.webp" alt="" title=""></a>
          </div>
          <div id="nav-icon"><span></span><span></span><span></span></div>
        </div>
      </header>
    `;

    this.initHamburgerMenu();
    this.setActiveLink();
  }

  initHamburgerMenu() {
    const navIcon = this.querySelector('#nav-icon');
    const topNav = this.querySelector('.topnav');
    const navigationLinks = this.querySelector('.navigationlinks');
    
    navIcon.addEventListener('click', function() {
      navIcon.classList.toggle('active');
      topNav.classList.toggle('active');
      navigationLinks.classList.toggle('active');
      document.body.classList.toggle('scroll_fix');
    });
  }

  setActiveLink() {
    const currentPath = window.location.pathname.split('/').pop();
    const links = this.querySelectorAll('.topnav li a');
    links.forEach(link => {
      if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
      }
    });
  }
}




class SpecialFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <section class="dualCompartmentStackedLayout"> 
          <div class="dualCompartment">
            <div class="alignment2">
              <a href="#"><img class="logo" src="img/logo.png" alt="PANALOBET Logo" title="PANALOBET Logo"></a>
            </div>
            <div class="dualCompartmentStackedLayout2">
              <p class="descriptions"><span class="colorSec">Panalobet Welcome 300% Deposit Bonus</span></p>
              <div class="logo-carousel2">
                <img src="img/homepageProviderImages1.webp" alt="PANALOBET" title="PANALOBET" class="img_fit">
                <img src="img/homepageProviderImages2.png" alt="PANALOBET" title="PANALOBET" class="img_fit">
                <img src="img/homepageProviderImages3.png" alt="PANALOBET" title="PANALOBET" class="img_fit">
                <img src="img/homepageProviderImages4.png" alt="PANALOBET" title="PANALOBET" class="img_fit">
                <img src="img/homepageProviderImages5.png" alt="PANALOBET" title="PANALOBET" class="img_fit">
                <img src="img/homepageProviderImages6.png" alt="PANALOBET" title="PANALOBET" class="img_fit">
                <img src="img/homepageProviderImages7.png" alt="PANALOBET" title="PANALOBET" class="img_fit">
                <img src="img/homepageProviderImages8.png" alt="PANALOBET" title="PANALOBET" class="img_fit">
                <img src="img/homepageProviderImages9.png" alt="PANALOBET" title="PANALOBET" class="img_fit">
                <img src="img/homepageProviderImages10.png" alt="PANALOBET" title="PANALOBET" class="img_fit">
                <img src="img/homepageProviderImages11.png" alt="PANALOBET" title="PANALOBET" class="img_fit">
                <img src="img/homepageProviderImages12.png" alt="PANALOBET" title="PANALOBET" class="img_fit">
                <img src="img/homepageProviderImages13.png" alt="PANALOBET" title="PANALOBET" class="img_fit">
                <img src="img/homepageProviderImages14.png" alt="PANALOBET" title="PANALOBET" class="img_fit">
                <img src="img/homepageProviderImages15.png" alt="PANALOBET" title="PANALOBET" class="img_fit">
                <img src="img/homepageProviderImages16.png" alt="PANALOBET" title="PANALOBET" class="img_fit">
                <img src="img/homepageProviderImages17.png" alt="PANALOBET" title="PANALOBET" class="img_fit">
                <img src="img/homepageProviderImages18.png" alt="PANALOBET" title="PANALOBET" class="img_fit">
              </div>
            </div>
          </div>
          <div class="solidDivider"></div>
          <div class="singleCompartmentContainer2">
            <div class="childElement">
              <p class="footerdescriptions2"><span class="colorSec">About Panalobet</span></p>
              <p class="footerdescriptions2">About Us</span>
              <p class="footerdescriptions2">Responsible Gaming</span>
              <p class="footerdescriptions2">General Terms and Conditions</span>
            </div>
            <div class="childElement">
              <p class="footerdescriptions2"><span class="colorSec">Online games</span></p>
              <p class="footerdescriptions2">Online Sabong</span>
              <p class="footerdescriptions2">Slots Online</span>
              <p class="footerdescriptions2">Fishing game</span>
              <p class="footerdescriptions2">Baccarat Card game</span>
            </div>
            <div class="childElement">
              <p class="footerdescriptions2"><span class="colorSec">Promotions</span></p>
              <p class="footerdescriptions2">Welcome Bonus 300%</span>
              <p class="footerdescriptions2">Deposit Get bonus 150%</span>
              <p class="footerdescriptions2">Daily Bonus 20%</span>
              <p class="footerdescriptions2">Panalobet Promo News</span>
            </div>
            <div class="childElement logo-carousel3">
              <img src="img/homeresponsible.webp" alt="PANALOBET" title="PANALOBET" class="img_fit">
            </div>
          </div>
          <div class="dualCompartmentContainerStackedLayoutContents">
            <p class="footermetadescriptions">©2024 by Panalobet licensed by Philippine Amusement and Gaming Corporation</p>
          </div>         
        </section>      
      </footer>
    `;

    this.setActiveLink();
  }

  setActiveLink() {
    const currentPath = window.location.pathname.split('/').pop();
    const links = this.querySelectorAll('.topnav li a');
    links.forEach(link => {
      if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
      }
    });
  }
}




customElements.define('special-header', SpecialHeader);
customElements.define('special-footer', SpecialFooter);
