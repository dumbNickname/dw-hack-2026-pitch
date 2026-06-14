import Reveal from 'reveal.js';
import RevealNotes from 'reveal.js/plugin/notes';
import { gsap } from 'gsap';
import 'reveal.js/reveal.css';
import './styles.css';

const deck = new Reveal({
  hash: true,
  controls: true,
  progress: true,
  center: true,
  transition: 'slide',
  backgroundTransition: 'fade',
  width: 1280,
  height: 720,
  margin: 0.04,
  plugins: [RevealNotes],
});

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function animateCurrentSlide() {
  if (reduceMotion) return;

  const slide = deck.getCurrentSlide();
  const headline = slide.querySelector('h1, h2');
  const kicker = slide.querySelector('.kicker');
  const items = slide.querySelectorAll('.platform-node, .manual-stack article, .scale-bento div, .launch-timeline div, .draft-stack article, .demo-board div, .tool-rail span, .skills-list li, .launch-orbit, .layer-visual');

  gsap.killTweensOf([headline, kicker, ...items]);

  const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

  if (kicker) {
    timeline.fromTo(kicker, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.45 }, 0);
  }

  if (headline) {
    timeline.fromTo(headline, { opacity: 0, y: 36, scale: 0.985 }, { opacity: 1, y: 0, scale: 1, duration: 0.72 }, 0.06);
  }

  if (items.length) {
    timeline.fromTo(items, { opacity: 0, y: 42, scale: 0.94 }, { opacity: 1, y: 0, scale: 1, duration: 0.68, stagger: 0.055 }, 0.18);
  }
}

deck.initialize().then(() => {
  animateCurrentSlide();
  deck.on('slidechanged', animateCurrentSlide);
});
