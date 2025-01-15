function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior
    const dateInput = document.getElementById("date-input").value;

    if (dateInput) {
        const formattedDate = new Date(dateInput).toLocaleDateString();
        alert(`You selected: ${formattedDate}`);
        // Redirect to another page
        window.location.href = "food.html";
    } else {
        alert("Please select a date.");
    }
}