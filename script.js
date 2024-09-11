// Selecting popup overlay, popup box, and add popup button
var popupoverlay = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".popup-box");
var addpopupbutton = document.getElementById("add-popup-button");

addpopupbutton.addEventListener("click", function() {
    popupoverlay.style.display = "block";
    popupbox.style.display = "block";
});

// Selecting cancel button
var cancelpopup = document.getElementById("cancel-popup");
cancelpopup.addEventListener("click", function(event) {
    event.preventDefault();
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
});

// Selecting container, add-book button, and input fields
var container = document.querySelector(".container"); // Updated class name to match HTML
var addbook = document.getElementById("add-book");
var bookTitleInput = document.getElementById("book-title-input");
var bookAuthorInput = document.getElementById("book-author-input");
var bookDescriptionInput = document.getElementById("book-description-input");

addbook.addEventListener("click", function(event) {
    event.preventDefault();
    var div = document.createElement("div");
    div.setAttribute("class", "book-container"); // Ensure this matches the class in HTML
    div.innerHTML = `<h2>${bookTitleInput.value}</h2>
                     <h5>Author: ${bookAuthorInput.value}</h5>
                     <p>Description: ${bookDescriptionInput.value}</p>
                     <button class="delete-button">Delete</button>`;
    container.appendChild(div);
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
});

// Delete book functionality
container.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-button")) {
        var bookToDelete = event.target.closest(".book-container"); // Ensure this matches the class in HTML
        if (bookToDelete) {
            container.removeChild(bookToDelete);
        }
    }
});
