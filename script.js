document.addEventListener('DOMContentLoaded', () => {
    const imageUpload = document.getElementById('image-upload');
    const predictButton = document.getElementById('predict-button');
    const resultSection = document.getElementById('result-section');
    const uploadedImage = document.getElementById('uploaded-image');
    const predictionResult = document.getElementById('prediction-result');

    predictButton.addEventListener('click', () => {
        if (imageUpload.files.length > 0) {
            const file = imageUpload.files[0];
            const reader = new FileReader();

            reader.onload = function(e) {
                uploadedImage.src = e.target.result;
                resultSection.style.display = 'block';
                
                // Show loading state
                predictionResult.innerHTML = '<div class="loading"></div> Analyzing image...';
                predictButton.disabled = true;
                predictButton.innerHTML = '<div class="loading"></div> Predicting...';
                
                // Simulating a prediction (replace with actual API call)
                setTimeout(() => {
                    const fakeDiseases = ['Leaf Spot', 'Powdery Mildew', 'Rust', 'Blight', 'Mosaic Virus'];
                    const randomDisease = fakeDiseases[Math.floor(Math.random() * fakeDiseases.length)];
                    
                    // Redirect to disease details page
                    window.location.href = `disease-details.html?disease=${encodeURIComponent(randomDisease)}`;
                }, 2000);
            }

            reader.readAsDataURL(file);
        } else {
            alert('Please select an image first.');
        }
    });
});