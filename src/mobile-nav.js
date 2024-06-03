const mobileNav = () => {
    const headerBtn = document.querySelector('.header__bars');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-nav__link');
  
    // State
    let isMobileNavOpen = false;
    const light = "#f1f5f9"
    const dark = "#070a13"
  
    headerBtn.addEventListener('click', () => {
      isMobileNavOpen = !isMobileNavOpen;
      if (isMobileNavOpen) {
        mobileNav.style.display = 'flex';
        document.body.style.overflowY = 'hidden';
        headerBtn.style.color = light;
    } else {
        mobileNav.style.display = 'none';
        document.body.style.overflowY = 'auto';
        headerBtn.style.color = dark;
      }
    
    });
  
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        isMobileNavOpen = false;
        mobileNav.style.display = 'none';
        document.body.style.overflowY = 'auto';
      });
    });
  };
  
  export default mobileNav;