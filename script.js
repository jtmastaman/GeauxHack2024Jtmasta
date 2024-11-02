//function to get all countries and display them
fetch('country.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        const userList = document.getElementById('user-list');
        data.forEach(user => {
            const userDiv = document.createElement('div');
            userDiv.textContent = `Country: ${user.Country}`;
            userList.appendChild(userDiv);
        });
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
/*json file with country as array that contains Country string as name of country
Food1 is the first food with resturants 1 and 2 attached
Food2 is the second with resturants 3 and 4 attached
Restaurant1 is the first
Restaurant2 is the second
Restaurant3 is the third
Restaurant4 is the fourth

*/

function storeInput() {
    const userInput = document.getElementById('user-input').value; // Get the input value
    const storedOutput = document.getElementById('stored-output');

    // Create a new div for the stored value
    const outputDiv = document.createElement('div');
    outputDiv.textContent = userInput; // Set the text to the input value

    // Append the new div to the output area
    storedOutput.appendChild(outputDiv);

    // Optionally, clear the input field
    document.getElementById('user-input').value = '';
}

// Event listener for the store button
document.getElementById('store-button').addEventListener('click', storeInput);
