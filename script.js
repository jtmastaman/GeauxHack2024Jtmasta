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
        button.onclick = () => displayFoodOptions(country); // Attach click event
        buttonContainer.appendChild(button); // Add button to container
    });
}
    function displayFoodOptions(country){

        const buttonContainer = document.getElementById('button-container');
    
        // Clear existing food buttons before adding new ones
        buttonContainer.innerHTML = ''; 

        const button1 = document.createElement('button');
        button1.textContent = country.Food1;
        button1.onclick = () => displayFood1Info(country); // Attach click event
        buttonContainer.appendChild(button1); // Add button to container

            // Create the second food button
        const button2 = document.createElement('button');
        button2.textContent = country.Food2;
        button2.onclick = () => displayFood2Info(country); // Attach click event
        buttonContainer.appendChild(button2); // Add button to container
    }
    function displayFood1Info(country){
        const userList = document.getElementById('user-list');
        userList.innerHTML = ''; // Clear previous content
    
        // Create a div to display the country information
        const userDiv = document.createElement('div');
        userDiv.innerHTML = `
            <p>Restaurants for: ${country.Food1}</p>
            <ul>
                <li>${country.Restaurant1}</li>
                <li>${country.Restaurant2}</li>
            </ul>
        `;
        userList.appendChild(userDiv)
    };
    function displayFood2Info(country) {
        const userList = document.getElementById('user-list');
        userList.innerHTML = ''; // Clear previous content
    
        // Create a div to display the food 2 information
        const userDiv = document.createElement('div');
        userDiv.innerHTML = `
            <p>Restaurants for ${country.Food2}:</p>
            <ul>
                <li>${country.Restaurant3}</li>
                <li>${country.Restaurant4}</li>
            </ul>
        `;
        userList.appendChild(userDiv);
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