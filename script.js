// Fetch the country data from the JSON file
fetch('country.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(countries => {
        displayCountryButtons(countries); // Create buttons for each country
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

// Function to create buttons for each country
function displayCountryButtons(countries) {
    const buttonContainer = document.getElementById('button-container');
    buttonContainer.innerHTML = ''; // Clear previous buttons

    countries.forEach(country => {
        const button = document.createElement('button');
        button.textContent = country.Country; // Set button text to country name
        button.onclick = () => displayCountryInfo(country); // Attach click event
        buttonContainer.appendChild(button); // Add button to container
    });
}
    function displayCountryInfo(country) {
        const userList = document.getElementById('user-list');
        userList.innerHTML = ''; // Clear previous content
    
        // Create a div to display the country information
        const userDiv = document.createElement('div');
        userDiv.innerHTML = `
            <h3>${country.Country}</h3>
            <p>Popular Foods:</p>
            <ul>
                <li>${country.Food1}</li>
                <li>${country.Food2}</li>
            </ul>
            <p>Restaurants:</p>
            <ul>
                <li>${country.Restaurant1}</li>
                <li>${country.Restaurant2}</li>
                <li>${country.Restaurant3}</li>
                <li>${country.Restaurant4}</li>
            </ul>
        `;
        userList.appendChild(userDiv)
    };