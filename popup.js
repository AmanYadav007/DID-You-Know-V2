document.addEventListener('DOMContentLoaded', function() {
  fetch('https://raw.githubusercontent.com/AmanYadav007/DUK-api/main/data.json')
    .then(response => response.json())
    .then(data => {
      const randomTextElement = document.getElementById('randomText');
      const randomIndex = Math.floor(Math.random() * data.length);
      randomTextElement.innerText = data[randomIndex];
    })
    .catch(error => console.error('Error fetching random text:', error));
});
