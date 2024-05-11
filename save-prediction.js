const fs = require('fs');
const path = require('path');

module.exports = async (req, res) => {
    const predictionDetails = req.body;

    // Save prediction details to a text file
    const filePath = path.join(__dirname, 'predictions.txt');
    const predictionString = JSON.stringify(predictionDetails) + '\n';

    fs.appendFile(filePath, predictionString, err => {
        if (err) {
            console.error('Error saving prediction details:', err);
            return res.status(500).json({ error: 'Error saving prediction details' });
        }
        console.log('Prediction details saved successfully');
        res.status(200).json({ message: 'Prediction details saved successfully' });
    });
};
