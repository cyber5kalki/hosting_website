const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // You can add code here to handle the form submission, like sending an email or storing the data in a database.
  // For this example, we will log the form data to the console.
  console.log("Name: ", name);
  console.log("Email: ", email);
  console.log("Message: ", message);

  // Optionally, you can display a confirmation message to the user after the form submission.
  alert("Thank you! Your message has been sent.");
  form.reset();
});
