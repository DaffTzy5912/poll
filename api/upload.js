let currentPoll = null;
let voteCounts = [];

module.exports = (req, res) => {
    if (req.method === 'POST') {
        try {
            const pollData = JSON.parse(req.body);
            if (pollData.question && Array.isArray(pollData.options) && pollData.options.length >= 2) {
                currentPoll = pollData;
                voteCounts = new Array(pollData.options.length).fill(0);
                res.status(200).json({ message: 'Poll uploaded successfully' });
            } else {
                res.status(400).json({ error: 'Invalid poll format' });
            }
        } catch (error) {
            res.status(400).json({ error: 'Invalid JSON' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
};
