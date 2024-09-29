// Function to display the full-size image in the modal
function showImage(fullSizeSrc) {
  var modal = document.getElementById("imageModal");
  var fullImage = document.getElementById("fullImage");

  // Set the source of the full image to the passed src
  fullImage.src = fullSizeSrc;

  // Show the modal
  modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
  var modal = document.getElementById("imageModal");
  modal.style.display = "none";
}
