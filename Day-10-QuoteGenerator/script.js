const quoteEl = document.getElementById('quote');
const authorEl = document.getElementById('author');
const button = document.getElementById('new-quote');

async function getQuote() {
  try {
    quoteEl.textContent = 'Loading...';
    authorEl.textContent = '';

    const response = await fetch('https://dummyjson.com/quotes/random');

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    quoteEl.textContent = data.quote;
    authorEl.textContent = `${data.author}`;
  } catch (error) {
    console.error('Error fetching quote:', error);
    quoteEl.textContent = 'Could not load quote.';
  }
}



button.addEventListener('click', getQuote);

// Load first quote on page load
getQuote();
