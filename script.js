function showAlert(message) {
  let alertBox = document.querySelector(".alert");
  alertBox.innerText = message;
  alertBox.style.display = "block"; // Show the alert

  setTimeout(() => {
    alertBox.style.display = "none"; // Hide after 5 seconds
  }, 3000);
}

function copyPasswordAnyDesk() {
  let password = document.getElementById("adPassword").innerText;
  navigator.clipboard
    .writeText(password)
    .then(() => {
      showAlert("Password copied! Redirecting to AnyDesk...");
      setTimeout(() => {
        window.location.href = "AnyDesk://488586374";
      }, 1000); // Redirect after a second
    })
    .catch((err) => {
      console.error("Failed to copy:", err);
    });
}

function copyPasswordRustDesk() {
  let password = document.getElementById("rdPassword").innerText;
  navigator.clipboard
    .writeText(password)
    .then(() => {
      alert("Password copied! Just paste it in RustDesk.");
    })
    .catch((err) => {
      console.error("Failed to copy:", err);
    });
}

function openRustDesk() {
  window.location.href = "rustdesk://117704810?password=raspberry1";
}
