// script.js

document.addEventListener("DOMContentLoaded", function() {
    // --- Home Page (index.html) ---
    const buyButton = document.querySelector('button[onclick="window.location.href=\'buy.html\'"]');
    const adoptButton = document.querySelector('button[onclick="window.location.href=\'adopt.html\'"]');

    // Event listeners for home page navigation
    if (buyButton) {
        buyButton.addEventListener('click', function() {
            window.location.href = 'buy.html';
        });
    }

    if (adoptButton) {
        adoptButton.addEventListener('click', function() {
            window.location.href = 'adopt.html';
        });
    }

    // --- Pet Selection (buy.html and adopt.html) ---
    const petTypeSelect = document.getElementById('pet-type');
    const petList = document.getElementById('pet-list');

    // Dummy data for pets
    const petsData = {
        dogs: ['Bulldog', 'Golden Retriever', 'Poodle'],
        cats: ['Siamese', 'Persian', 'Maine Coon'],
        birds: ['Parrot', 'Canary', 'Finch']
    };

    // Handle pet type change and update the pet list
    if (petTypeSelect) {
        petTypeSelect.addEventListener('change', function() {
            const selectedPetType = petTypeSelect.value;
            const pets = petsData[selectedPetType];

            // Clear current list and populate new one
            petList.innerHTML = '';
            pets.forEach(pet => {
                const option = document.createElement('option');
                option.textContent = pet;
                petList.appendChild(option);
            });
        });

        // Initialize the pet list for the first time
        petTypeSelect.dispatchEvent(new Event('change'));
    }

    // --- Professionals Page (professionals.html) ---
    const professionalsList = document.getElementById('professionals-list');
    const studentsList = document.getElementById('students-list');

    // Dummy data for professionals and students
    const professionalsData = [
        { name: 'Dr. Smith', type: 'Vet' },
        { name: 'Jane Doe', type: 'Trainer' }
    ];

    const studentsData = [
        { name: 'Alex', role: 'Pet Walker' },
        { name: 'Maria', role: 'Pet Sitter' }
    ];

    // Populate professionals
    if (professionalsList) {
        professionalsData.forEach(professional => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `${professional.name} - ${professional.type} <a href="#">Contact</a>`;
            professionalsList.appendChild(listItem);
        });
    }

    // Populate students
    if (studentsList) {
        studentsData.forEach(student => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `${student.name} - ${student.role} <a href="#">Hire</a>`;
            studentsList.appendChild(listItem);
        });
    }

    // --- Donation & Volunteering Page (donate.html) ---
    const donateButton = document.querySelector('button#donate');
    const volunteerButton = document.querySelector('button#volunteer');

    // Action for Donate
    if (donateButton) {
        donateButton.addEventListener('click', function() {
            alert('Thank you for your donation! Please choose a shelter.');
        });
    }

    // Action for Volunteer
    if (volunteerButton) {
        volunteerButton.addEventListener('click', function() {
            alert('Thank you for volunteering! Choose a nearby shelter or pet finding group.');
        });
    }
});

    function navigateToPage() {
        const selectedValue = document.getElementById('pet-type').value;
        if (selectedValue) {
            window.location.href = selectedValue; // Navigate to the selected page
        }
    }
   
        document.getElementById('applicationForm').addEventListener('submit', function(event) {
            event.preventDefault();

            // Get form data
            const name = document.getElementById('name').value;
            const role = document.getElementById('role').value;

            // Save data to localStorage (temporary solution)
            const student = {
                name,
                role,
            };
            const students = JSON.parse(localStorage.getItem('students')) || [];
            students.push(student);
            localStorage.setItem('students', JSON.stringify(students));

            // Redirect to professionals.html
            window.location.href = 'professionals.html';
        });
        const students = JSON.parse(localStorage.getItem('students')) || [];
    const partTimersList = document.getElementById('partTimersList');

    students.forEach(student => {
        const li = document.createElement('li');
        li.textContent = `${student.name} (${student.role}) - `;
        const hireLink = document.createElement('a');
        hireLink.href = "#";
        hireLink.textContent = "Hire";
        li.appendChild(hireLink);
        partTimersList.appendChild(li);
    });
    document.addEventListener("DOMContentLoaded", () => {
        // Select all subscription blocks
        const subscriptionBlocks = document.querySelectorAll(".subscription-block");
    
        // Iterate through each subscription block
        subscriptionBlocks.forEach(block => {
            // Get all checkboxes within this block
            const checkboxes = block.querySelectorAll(".feature");
            // Get the element to display the total price
            const totalPriceElement = block.querySelector(".total-price");
    
            // Add event listener to each checkbox
            checkboxes.forEach(checkbox => {
                checkbox.addEventListener("change", () => {
                    let totalPrice = 0;
    
                    // Calculate the total price based on checked boxes
                    checkboxes.forEach(cb => {
                        if (cb.checked) {
                            totalPrice += parseFloat(cb.dataset.price); // Add the price of the checked feature
                        }
                    });
    
                    // Update the total price element in the block
                    totalPriceElement.textContent = totalPrice.toFixed(2);
                });
            });
        });
    });
    