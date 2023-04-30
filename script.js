const form = document.getElementById("name-form");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  const name = document.getElementById("name-input").value;
  const password = document.getElementById("password-input").value;
  if (name !== "" && password === "8122003") {
    // Display the loading page for 5 seconds
    document.body.innerHTML = `
      <div class="loader">
        <p>aapuko praphullu..</p>
        <span>.</span>
      </div>
    `;
    setTimeout(function() {
      // Redirect to the congratulations page after 5 seconds
      window.location.href = `congragulations.html?name=${name}`;
    }, 4000);
  } else if (name === "") {
    alert("Please enter your name!");
  } else {
    alert("thappu praphu!");
  }
});

