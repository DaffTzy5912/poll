
fetch('/api/polls')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('poll-container');
    data.forEach((poll, index) => {
      const div = document.createElement('div');
      div.innerHTML = `
        <h3>${poll.question}</h3>
        <button onclick="vote(${index}, 0)"> ${poll.options[0]} </button>
        <button onclick="vote(${index}, 1)"> ${poll.options[1]} </button>
      `;
      container.appendChild(div);
    });
  });

function vote(pollIndex, optionIndex) {
  fetch('/api/polls')
    .then(res => res.json())
    .then(data => {
      data[pollIndex].votes[optionIndex]++;
      fetch('/api/polls', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data[pollIndex])
      }).then(() => location.reload());
    });
}
