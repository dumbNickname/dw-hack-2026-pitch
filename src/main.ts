import Reveal from 'reveal.js';
import RevealNotes from 'reveal.js/plugin/notes';
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

deck.initialize();
