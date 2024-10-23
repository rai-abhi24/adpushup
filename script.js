const form = document.getElementById("demo-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let isValid = true;

  const errorMsg =
    "This is an incorrect input. Please check and fill in the details again.";

  const firstName = document.getElementById("first-name");
  const firstNameError = document.getElementById("first-name-error");
  if (!firstName.value) {
    firstNameError.textContent = errorMsg;
    firstNameError.style.display = "block";
    firstName.style.border = "2px solid red";
    isValid = false;
  } else {
    firstNameError.style.display = "none";
    firstName.style.border = "1px solid #ccc";
  }

  const email = document.getElementById("work-email");
  const emailError = document.getElementById("work-email-error");
  if (!email.value) {
    emailError.textContent = errorMsg;
    emailError.style.display = "block";
    email.style.border = "2px solid red";
    isValid = false;
  } else {
    emailError.style.display = "none";
    email.style.border = "1px solid #ccc";
  }

  const phone = document.getElementById("phone");
  const selectOption = document.getElementById("country-code");
  const phoneError = document.getElementById("phone-error");
  const phoneNumber = phone.value.replace(selectOption.value, "");
  
  if (!phoneNumber) {
    phoneError.textContent = errorMsg;
    phoneError.style.display = "block";
    phone.style.border = "2px solid red";
    selectOption.style.border = "2px solid red";
    selectOption.style.borderRight = "none";
    isValid = false;
  } else if (phoneNumber.length < 10) {
    phoneError.textContent = "The field is too short.";
    phoneError.style.display = "block";
    phone.style.border = "2px solid red";
    selectOption.style.border = "2px solid red";
    selectOption.style.borderRight = "none";
    isValid = false;
  } else {
    phoneError.style.display = "none";
    phone.style.border = "1px solid #ccc";
    selectOption.style.border = "1px solid #ccc";
    selectOption.style.borderRight = "none";
  }

  const website = document.getElementById("website");
  const websiteError = document.getElementById("website-error");
  if (!website.value) {
    websiteError.textContent = errorMsg;
    websiteError.style.display = "block";
    website.style.border = "2px solid red";
    isValid = false;
  } else {
    websiteError.style.display = "none";
    website.style.border = "1px solid #ccc";
  }

  const monthlyRevenue = document.getElementById("monthly-revenue");
  const revenueError = document.getElementById("monthly-revenue-error");
  if (!monthlyRevenue.value) {
    revenueError.textContent = errorMsg;
    revenueError.style.display = "block";
    monthlyRevenue.style.border = "2px solid red";
    isValid = false;
  } else {
    revenueError.style.display = "none";
    monthlyRevenue.style.border = "1px solid #ccc";
  }

  if (isValid) {
    form.reset();
  }
});

const cards = document.querySelectorAll(".zoom-card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("zoomed");
      } else {
        entry.target.classList.remove("zoomed");
      }
    });
  },
  { threshold: 0.5 }
);

cards.forEach((card) => {
  observer.observe(card);
});

const phoneInput = document.getElementById("phone");
const countryCodeSelect = document.getElementById("country-code");

if (!phoneInput.value) {
  phoneInput.value = "+91";
}

countryCodeSelect.addEventListener("change", () => {
  const countryCode = countryCodeSelect.value;
  phoneInput.value = `${countryCode}${phoneInput.value.replace(
    /^\+\d+\s*/,
    ""
  )}`;
});
