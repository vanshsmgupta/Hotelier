const sendMail = () => {
  const params = {
    name: document.getElementById("name").value,
    number: document.getElementById("number").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };
  emailjs
    .send("service_w4x7sz3", "template_nk1z848", params)
    .then((response) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      alert("Message sent successfully");
    });
};

const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("nav-links");

menuIcon.addEventListener("click", () => {
  if (navLinks.style.display === "block") {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "block";
  }
});
