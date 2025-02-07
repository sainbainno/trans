document.getElementById('search-btn').addEventListener('click', async function() {
  const word = document.getElementById('word-input').value.trim();
  const resultDiv = document.getElementById('result');

  if (!word) {
    resultDiv.innerHTML = 'Please enter a word.';
    return;
  }

  const apiKey = 'YOUR_API_KEY';  // Insert your dictionary API key here
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Word not found');

    const data = await response.json();
    const meaning = data[0].meanings[0].definitions[0].definition;
    
    resultDiv.innerHTML = `<h2>Meaning:</h2><p>${meaning}</p>`;
  } catch (error) {
    resultDiv.innerHTML = 'Could not find the meaning. Please try again later.';
  }
});
