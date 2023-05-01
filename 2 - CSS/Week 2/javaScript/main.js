//The HTML code contains a button with an id attribute of myBtn that will trigger the modal window, and
// a div element with an id attribute of myModal that contains the modal window itself.
// The CSS code contains styles for the modal window and its content.
// The JavaScript code adds functionality to the button and modal window. It selects
// the myBtn and myModal elements using their id attributes, and adds event listeners to the button and modal window. 
//  When the button is clicked, the modal window is displayed. When the x button in the modal window is clicked, or the user 
//  clicks outside of the modal window, it is closed.


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}







