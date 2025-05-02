
document.getElementById('poll-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const form = new FormData(e.target);
  const data = {
    question: form.get('question'),
    option1: form.get('option1'),
    option2: form.get('option2'),
  };

  fetch('/api/polls', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then(() => alert('Poll uploaded!'));
});
