document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('rankPredictionForm').addEventListener('submit', predictRank);
});

function predictRank(event) {
    event.preventDefault();

    const formData = new FormData(document.getElementById('rankPredictionForm'));
    const predictionDetails = {};
    formData.forEach((value, key) => {
        predictionDetails[key] = value;
    });

    // Call the savePrediction function with predictionDetails
    savePrediction(predictionDetails);

    // Reset form after prediction
    document.getElementById('rankPredictionForm').reset();
}

async function savePrediction(predictionDetails) {
    const response = await fetch('/save-prediction', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(predictionDetails)
    });
    const data = await response.json();
    console.log(data); // Log the response from the server
}
