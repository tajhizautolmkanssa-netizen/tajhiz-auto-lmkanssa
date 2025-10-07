/**
 * scripts.js
 * Handles front-end interaction for the Vehicle Fitment Selector
 * NOTE: In a real system, this JavaScript would interact with a robust
 * backend database (like ACES/PIES data) to validate parts.
 */

// Placeholder variables to simulate a selected vehicle
let selectedVehicle = null;

const productCards = document.querySelectorAll('.product-card');

/**
 * Simulates searching for parts based on the selected criteria.
 */
function searchParts() {
    const year = document.getElementById('year-select').value;
    const make = document.getElementById('make-select').value;
    const model = document.getElementById('model-select').value;
    const engine = document.getElementById('engine-select').value;

    if (!year || !make || !model) {
        alert("Please select Year, Make, and Model to find parts.");
        return;
    }

    selectedVehicle = { year, make, model, engine };
    alert(`Searching parts for: ${year} ${make} ${model} ${engine}`);
    
    // Update all product displays
    updateFitmentDisplay();
}

/**
 * Simulates loading a vehicle from the user's saved 'My Garage'.
 */
document.getElementById('load-garage').addEventListener('click', (e) => {
    e.preventDefault();
    // Simulate loading a pre-saved vehicle profile
    selectedVehicle = {
        year: '2018',
        make: 'Honda',
        model: 'Civic',
        engine: '2.0L'
    };
    alert("Loaded 2018 Honda Civic 2.0L from My Garage.");

    // Update the selector dropdowns (optional, for visual consistency)
    document.getElementById('year-select').value = selectedVehicle.year;
    document.getElementById('make-select').value = selectedVehicle.make;
    document.getElementById('model-select').value = selectedVehicle.model;
    
    updateFitmentDisplay();
});


/**
 * Changes the visible fitment status on product cards based on the selected vehicle.
 */
function updateFitmentDisplay() {
    productCards.forEach(card => {
        const statusDiv = card.querySelector('.fitment-status');
        
        // Simple, simulated fitment logic:
        // Assume this product only fits older Ford trucks, not the loaded Honda Civic
        const isCompatible = (selectedVehicle && selectedVehicle.make === 'Ford' && selectedVehicle.year >= '2015');

        if (selectedVehicle) {
            if (isCompatible) {
                statusDiv.textContent = `Fitment: GUARANTEED for your ${selectedVehicle.model}`;
                statusDiv.className = 'fitment-status status-success';
            } else {
                statusDiv.textContent = `Fitment: Unconfirmed for ${selectedVehicle.model}`;
                statusDiv.className = 'fitment-status status-alert';
            }
        } else {
            statusDiv.textContent = 'Fitment: Vehicle Required';
            statusDiv.className = 'fitment-status status-alert';
        }
    });
}

// Initial load state
document.addEventListener('DOMContentLoaded', updateFitmentDisplay);