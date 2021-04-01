import ScrollReveal from 'scrollreveal';

const elementsArray = [
  document.querySelector('#about-us'),
  document.querySelector('#latest-announcements'),
  document.querySelector('#call-to-action'),
  document.querySelector('#blog-testimonials'),
  document.querySelector('#footer')
];

ScrollReveal().reveal(elementsArray, {
  distance: '100%',
  origin: 'bottom',
  delay: 300
});
