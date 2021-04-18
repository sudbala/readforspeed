import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
// So that webpack understands to include the style. Webpack won't include anything not used by app directly.

const App = () => <div className="test">All the REACT are belong to us</div>;

ReactDOM.render(<App />, document.getElementById('main'));




// // updates #main elt every second to how many seconds you've been on for
// let seconds = 0;
// setInterval(() => {
//   seconds += 1;
//   $('#main').html(`You've been on this page for ${seconds} seconds.`);
// }, 1000);

// console.log('Hello World');
