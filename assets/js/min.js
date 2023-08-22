// Function to clear the form fields
function clearForm() {
  const form = document.getElementById("myForm");
  form.reset();
}

// Call the clearForm function when the page loads
window.onload = clearForm;
