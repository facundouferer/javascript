document.getElementById('showMessageButton').addEventListener('click', () => {
  setTimeout(() => {
    document.getElementById('message').innerText = 'This message is displayed after a 3-second delay!';
  }, 3000); // 3000 milliseconds = 3 seconds
});