let currentPoll = null;
let voteCounts = [];

module.exports = (req, res) => {
    if (req.method === 'POST') {
        if (!currentPoll) {
            return res.status(400).json({ error: 'No active poll' });
        }

        try {
            const { index } = JSON.parse(req.body);
            if (typeof index === 'string' && !isNaN(index) && index >= 0 && index < currentPoll.options.length) {
                voteCounts[index] = (voteCounts[index] || 0) + 1;
                res.status(200).json({ success: true });
            } else {
                res.status(400).json({ error: 'Invalid vote' });
            }
        } catch (error) {
            res.status(400).json({ error: 'Invalid request' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
};
