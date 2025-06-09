const quotes = [
  "You are capable of amazing things.",
  "Don't watch the clock; do what it does. Keep going.",
  "Believe in yourself and all that you are.",
  "Success is the sum of small efforts repeated daily.",
  "Dream big. Start small. Act now.",
  "You’ve got this. One step at a time!"
];

function showQuote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").textContent = quote;
}
