import $ from 'jquery'; // ES6 syntax. More like my style
import './style.scss';
// So that webpack understands to include the style. Webpack won't include anything not used by app directly.

// updates #main elt every second to how many seconds you've been on for
let seconds = 0;
setInterval(() => {
  seconds += 1;
  $('#main').html(`You've been on this page for ${seconds} seconds.`);
}, 1000);

console.log('Hello World');
