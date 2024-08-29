// Function to load stored hours from localStorage
function loadHours() {
    let hoursData = JSON.parse(localStorage.getItem('workHours')) || [];
    const tableBody = document.getElementById('hoursTableBody');

    tableBody.innerHTML = ''; // Clear existing rows

    hoursData.forEach(entry => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${entry.hours}</td><td>${entry.category}</td>`;
        tableBody.appendChild(row);
    });
}

// Function to add new hours to the log
function addHours(event) {
    event.preventDefault(); // Prevent form submission

    const hours = document.getElementById('hours').value;
    const category = document.getElementById('category').value;

    if (hours && category) {
        let hoursData = JSON.parse(localStorage.getItem('workHours')) || [];

        hoursData.push({ hours, category });

        localStorage.setItem('workHours', JSON.stringify(hoursData));

        document.getElementById('hoursForm').reset();

        loadHours(); // Reload the table with updated data
    }
}

// Load hours when the page loads
document.addEventListener('DOMContentLoaded', loadHours);
document.getElementById('hoursForm').addEventListener('submit', addHours);
