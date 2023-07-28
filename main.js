function sendMail() {
  var params = {
    fullName: document.getElementById("fullName").value,
    phone_number: document.getElementById("phone_number").value,
    email: document.getElementById("email").value,
    state: document.getElementById("state").value,
    kesargulkand: document.getElementById("kesargulkand").value,
    zip: document.getElementById("zip").value,
    city: document.getElementById("city").value,
  };

  const serviceID = "service_4mnbqwl";
  const templateID = "template_kurq6uy";

  var emailInput = document.getElementById("email");
  var emailValue = emailInput.value;
  var emailRegex = /^\S+@\S+\.\S+$/;

  if (!emailRegex.test(emailValue)) {
    emailInput.style.borderColor = "red";
    return;
  }

  var zipInput = document.getElementById("zip");
  var zipValue = zipInput.value;
  var zipRegex = /^\d{6}$/;

  if (!zipRegex.test(zipValue)) {
    zipInput.style.borderColor = "red";
    return;
  }

  var stateInput = document.getElementById("state");
  var stateValue = stateInput.value;

  var validStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry",
    "andhra aradesh",
    "arunachal aradesh",
    "assam",
    "bihar",
    "chhattisgarh",
    "goa",
    "gujarat",
    "haryana",
    "himachal Pradesh",
    "jharkhand",
    "karnataka",
    "kerala",
    "madhya Pradesh",
    "maharashtra",
    "manipur",
    "meghalaya",
    "mizoram",
    "nagaland",
    "odisha",
    "punjab",
    "rajasthan",
    "sikkim",
    "tamil nadu",
    "telangana",
    "tripura",
    "uttar pradesh",
    "uttarakhand",
    "west bengal",
    "andaman and nicobar islands",
    "chandigarh",
    "dadra and nagar Haveli and Daman and Diu",
    "delhi",
    "lakshadweep",
    "puducherry",
  ];

  if (!validStates.includes(stateValue)) {
    stateInput.style.borderColor = "red";
    return;
  }

  emailInput.style.borderColor = "";
  zipInput.style.borderColor = "";
  stateInput.style.borderColor = "";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("fullName").value = "";
      document.getElementById("phone_number").value = "";
      document.getElementById("email").value = "";
      document.getElementById("state").value = "";
      document.getElementById("kesargulkand").value = "";
      document.getElementById("zip").value = "";
      document.getElementById("city").value = "";

      // Redirect the user to the specified link
      window.location.href = "https://shreepushkarbrand.blogspot.com/p/304qr.html?m=1";
    })
    .catch((err) => console.log(err));
}

document.addEventListener('DOMContentLoaded', function() {
  const inputFields = document.querySelectorAll('input');

  inputFields.forEach((input, index) => {
    input.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        if (index < inputFields.length - 1) {
          inputFields[index + 1].focus();
        } else {
          document.querySelector('button[type="submit"]').click();
        }
      }
    });
  });
});