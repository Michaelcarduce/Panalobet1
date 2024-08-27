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
            <a href="#" target="_blank"><img class="btnNav" src="img/CTA Login.png" alt="" title=""></a>
            <a href="#" target="_blank"><img class="btnNav" src="img/CTA Sign Up.png" alt="" title=""></a>
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
              <p class="descriptions"><span class="colorTer">Panalobet Welcome 300% Deposit Bonus</span></p>
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
              <p class="footerdescriptions2"><span class="colorTer">About Panalobet</span></p>
              <p class="footermetadescriptions colorReg">About Us</span>
              <p class="footermetadescriptions colorReg">Responsible Gaming</span>
              <p class="footermetadescriptions colorReg">General Terms and Conditions</span>
            </div>
            <div class="childElement">
              <p class="footerdescriptions2"><span class="colorTer">Online games</span></p>
              <p class="footermetadescriptions colorReg">Online Sabong</span>
              <p class="footermetadescriptions colorReg">Slots Online</span>
              <p class="footermetadescriptions colorReg">Fishing game</span>
              <p class="footermetadescriptions colorReg">Baccarat Card game</span>
            </div>
            <div class="childElement">
              <p class="footerdescriptions2"><span class="colorTer">Promotions</span></p>
              <p class="footermetadescriptions colorReg">Welcome Bonus 300%</span>
              <p class="footermetadescriptions colorReg">Deposit Get bonus 150%</span>
              <p class="footermetadescriptions colorReg">Daily Bonus 20%</span>
              <p class="footermetadescriptions colorReg">Panalobet Promo News</span>
            </div>
            <div class="childElement logo-carousel3">
              <img src="img/homeresponsible.webp" alt="PANALOBET" title="PANALOBET" class="img_fit">
            </div>
          </div>
          <div>
            <p class="footermetadescriptions colorTer">©2024 by Panalobet licensed by Philippine Amusement and Gaming Corporation</p>
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
