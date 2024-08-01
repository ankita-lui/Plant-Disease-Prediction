document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const disease = urlParams.get('disease');

    const diseaseName = document.getElementById('disease-name');
    const diseaseDescription = document.getElementById('disease-description');
    const diseaseSymptoms = document.getElementById('disease-symptoms');
    const diseaseTreatment = document.getElementById('disease-treatment');

    // Simulated disease database
    const diseaseInfo = {
        'Leaf Spot': {
            description: 'Leaf spot is a common plant disease characterized by brown or black spots on leaves.',
            symptoms: ['Circular spots on leaves', 'Yellowing around spots', 'Leaf drop in severe cases'],
            treatment: 'Remove affected leaves, improve air circulation, and apply fungicide if necessary.'
        },
        'Powdery Mildew': {
            description: 'Powdery mildew is a fungal disease that appears as a white, powdery coating on leaves.',
            symptoms: ['White powdery spots on leaves', 'Curling or distortion of leaves', 'Stunted growth'],
            treatment: 'Increase air circulation, avoid overhead watering, and apply fungicide if needed.'
        },
        'Rust': {
            description: 'Rust is a fungal disease that produces rusty-colored spots on leaves and stems.',
            symptoms: ['Orange or reddish-brown pustules on leaves', 'Yellowing of leaves', 'Leaf drop'],
            treatment: 'Remove infected parts, improve sanitation, and use fungicides for severe cases.'
        },
        'Blight': {
            description: 'Blight is a rapid and complete chlorosis, browning, then death of plant tissues.',
            symptoms: ['Water-soaked spots on leaves', 'Rapid browning of leaves', 'Wilting of plant parts'],
            treatment: 'Remove and destroy infected plants, improve drainage, and use appropriate fungicides.'
        },
        'Mosaic Virus': {
            description: 'Mosaic virus causes mottled and distorted leaves, stunted growth, and reduced yield.',
            symptoms: ['Mottled pattern on leaves', 'Leaf distortion', 'Stunted growth'],
            treatment: 'Remove and destroy infected plants, control insect vectors, and use virus-resistant varieties.'
        }
    };

    if (disease && diseaseInfo[disease]) {
        const info = diseaseInfo[disease];
        diseaseName.textContent = disease;
        diseaseDescription.textContent = info.description;
        info.symptoms.forEach(symptom => {
            const li = document.createElement('li');
            li.textContent = symptom;
            diseaseSymptoms.appendChild(li);
        });
        diseaseTreatment.textContent = info.treatment;
    } else {
        diseaseName.textContent = 'Unknown Disease';
        diseaseDescription.textContent = 'No information available for this disease.';
    }
});