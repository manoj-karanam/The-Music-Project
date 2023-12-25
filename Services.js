function displayCheckedItems() {
    const checkboxesGenre = document.querySelectorAll('input[name="Genre"]:checked');
    const checkedItemsListGenre = document.getElementById('checked-items-Genre');

    const checkboxesInstruments = document.querySelectorAll('input[name="Instruments"]:checked');
    const checkedItemsListInstruments = document.getElementById('checked-items-Instruments');


    
    // Clear the previous list
    checkedItemsListGenre.innerHTML = '';
    checkedItemsListInstruments.innerHTML = '';

    // Iterate through checked checkboxes and display them
    checkboxesGenre.forEach((checkbox) => {
        const listItem = document.createElement('li');
        listItem.textContent = checkbox.value;
        checkedItemsListGenre.appendChild(listItem);
    });

    checkboxesInstruments.forEach((checkbox) => {
        const listItem = document.createElement('li');
        listItem.textContent = checkbox.value;
        checkedItemsListInstruments.appendChild(listItem);

    
    });

    const username = document.getElementById('username').value;
    // document.getElementById("result") = 
    
    document.getElementById("result").innerHTML = "Hey " + username + " Thank you for reaching out, Gister Groove is working on your request we will update you soon " 
   
}


