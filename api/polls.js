const fs = require('fs');
const path = require('path');

const filePath = path.resolve('./data/polls.json');

module.exports = async (req, res) => {
  if (req.method === 'GET') {
    const data = fs.readFileSync(filePath, 'utf-8');
    res.status(200).json(JSON.parse(data));
  } else if (req.method === 'POST') {
    const body = req.body;
    const polls = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    polls.push({
      question: body.question,
      options: [body.option1, body.option2],
      votes: [0, 0]
    });
    fs.writeFileSync(filePath, JSON.stringify(polls, null, 2));
    res.status(200).json({ status: 'Poll added' });
  }
};
