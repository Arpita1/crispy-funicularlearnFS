const greetBtn = document.getElementById('greetBtn');
const messagePara = document.getElementById('message');

greetBtn.addEventListener('click', () => {
  messagePara.textContent = 'Hello from your first JavaScript event!';
  console.log('Button was clicked!');
});
