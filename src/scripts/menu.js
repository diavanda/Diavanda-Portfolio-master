let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("ul li a");

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop -120;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        // document.querySelector('ul li a[href*=' + id + ']').classList.add('active');

        let matchingNavLink = document.querySelector('ul li a[href="#' + id + '"]');
      
      if (matchingNavLink) {
        matchingNavLink.classList.add('active');
      }
    });
    };
  });
};
