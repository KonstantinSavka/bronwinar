(function () {
    
    // VARIABLES
    const text = document.getElementById('text');
    const addBtn = document.getElementById('add');
    const listBox = document.querySelector('.list__content');

    let iterator = 0;

    // FUNCTIONS

    // Create new task item

    function newItem() {
        // Creating task parts

        const listItem = document.createElement('div');
        const listTask = document.createElement('p');
        const itemCheckbox = document.createElement('input');
        const deleteBtn = document.createElement('button');

        // Modifying parts

        // * Task container
        listItem.classList.add('list__item');

        // * Checkbox
        itemCheckbox.setAttribute("type", "checkbox");
        itemCheckbox.addEventListener('click', function () {
            itemCheckbox.previousElementSibling.classList.toggle('done');
        });

        // * Delete btn
        deleteBtn.classList.add('list__delete-btn');
        deleteBtn.innerHTML = 'Delete task';
        deleteBtn.addEventListener('click', function () {
            listItem.remove();
        });

        // * Pushing ready parts to DOM 
        listBox.append(listItem);
        listItem.append(listTask);
        listItem.append(itemCheckbox);
        listItem.append(deleteBtn);

        return listTask;
    }

    // Add text to task + clear input 

    function getInputValue() {
        iterator++;
        newItem().innerHTML = iterator + ') ' + (text.value);
        text.value = '';
    };

    // Event
    addBtn.addEventListener('click', getInputValue);
})();