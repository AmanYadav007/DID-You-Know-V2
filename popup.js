// popup.js
document.addEventListener('DOMContentLoaded', function () {
    fetch(chrome.extension.getURL('data.json'))
      .then(response => response.json())
      .then(data => {
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomDefinition = data[randomIndex];
  
        const definitionElement = document.getElementById('definition');
        const authorElement = document.getElementById('author');
  
        definitionElement.textContent = `"${randomDefinition.definition}"`;
        authorElement.textContent = `– ${randomDefinition.author}`;
      })
      .catch(error => console.error('Error fetching quotes:', error));
  });
  