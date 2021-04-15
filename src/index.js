import $ from 'jquery' //ES6 syntax. More like my style

// updates #main elt every second to how many seconds you've been on for
let seconds = 0
setInterval(() => {
    $('#main').html(`You've been on this page for ${++seconds} seconds.`)
}, 1000);