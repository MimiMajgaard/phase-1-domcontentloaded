document.addEventListener('DOMContentLoaded', cb)
    document.querySelector('text')

    

function cb (event){
    event.preventDefault()
    document.querySelector('p').textContent = "This is really cool!"
}





// set up an event DOMContentLoaded listener 
// use events' callback to target the paragraph element with id="text"
// replace the text with "This is really cool"
// use 'textContent' or 'innerHTML'
