
// Get the input field
var input = document.getElementById("search-input")
input.addEventListener('keypress', (e) => {
    if (e.keyCode == 13) {
        location.href = "search.html?q=" + input.value;
    }
})

