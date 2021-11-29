function addTask() {
    var input = document.getElementById("input");
    // get current text from input field
    var newTask = input.value;
    // only add new item to list if some text was entered 
    if (newTask != "") {
        // create new HTML list item
        var item = document.createElement("li");
        // add HTML for buttons and new task text
        // Note, need to use '' because of "" in HTML
        item.innerHTML = '<input type="button" class="done" onclick="markDone(this.parentNode)"  value="&#x2713;" /> ' + '<input type="button" class="remove" onclick="remove(this.parentNode)" value="&#x2715;" /> ' + '<input type="button" value="!" class="important" onclick="addImportant(this.parentNode())">' + newTask;

        // add new item as part of existing list
        document.getElementById("tasks").appendChild(item);

        /* Step 4 below here */
        input.value = ''
        input.placeholder = 'Enter Next Task Here...'
    }
}

// change styling used for given item
function markDone(item) {
    item.className = 'finished';
}

function remove(item) {
    // remove item completely from document
    if (item.className == 'finished') {
        item.remove();
    } else {
        alert('Finish Task First!')
    }
}

function doAbout() {
    var aboutInput = document.getElementById('divabout');
    aboutInput.className = 'aboutcolor'
    aboutInput.innerHTML = 'Author is Krunal Mistry.'
}

function clearAbout() {
    var aboutInput = document.getElementById('divabout');
    aboutInput.innerHTML = ''
    aboutInput.className = ''
}

function addImportant(item) {
    if (item.className == 'finished') {
        alert('You have completed this Task...')
    } else {
        item.className = 'Important';
    }
}