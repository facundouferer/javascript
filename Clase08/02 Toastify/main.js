document.getElementById('toastButton').addEventListener('click', () => {
  Toastify({
    text: "This is a Toastify notification!",
    duration: 3000, // Duration in milliseconds
    close: true, // Show close button
    gravity: "top", // Position: top or bottom
    position: "right", // Position: left, center or right
    backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)", // Background color
  }).showToast();
});