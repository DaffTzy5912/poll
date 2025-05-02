// /pages/api/upload.js
module.exports = (req, res) => {
    if (req.method === 'POST') {
        try {
            const pollData = JSON.parse(req.body);
            console.log("Received poll:", pollData); // Debugging line
            if (pollData.question && Array.isArray(pollData.options) && pollData.options.length >= 2) {
                currentPoll = pollData;
                voteCounts = new Array(pollData.options.length).fill(0);
                console.log("Current poll set to:", currentPoll); // Debugging line
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
