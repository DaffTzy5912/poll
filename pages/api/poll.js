let currentPoll = null;
let voteCounts = [];

module.exports = (req, res) => {
    if (currentPoll) {
        const pollWithResults = {
            ...currentPoll,
            results: currentPoll.options.map((option, i) => ({
                option,
                votes: voteCounts[i] || 0
            }))
        };
        res.status(200).json(pollWithResults);
    } else {
        res.status(200).json({ question: null, options: [] });
    }
};
