let intervalId;

document.getElementById('startIntervalButton').addEventListener('click', () => {
  intervalId = setInterval(() => {
    const messageElement = document.createElement('p');
    messageElement.innerText = 'This message is displayed every 2 seconds!';
    document.getElementById('intervalMessage').appendChild(messageElement);
  }, 2000); // 2000 milliseconds = 2 seconds
});

document.getElementById('stopIntervalButton').addEventListener('click', () => {
  clearInterval(intervalId);
  const stopMessageElement = document.createElement('p');
  stopMessageElement.innerText = 'Interval stopped.';
  document.getElementById('intervalMessage').appendChild(stopMessageElement);
});