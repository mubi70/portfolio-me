var data = [
  { username: "mubbashir", password: "mubi123", id: "12345" },
  { username: "abdullah", password: "abdullah123", id: "54321" },
  { username: "waleed", password: "waleed123", id: "11111" },
  { username: "daniyal", password: "daniyal123", id: "00000" },
];

var form = document.getElementById("searchForm");
var usernameInput = document.getElementById("username");
var passwordInput = document.getElementById("password");
var idInput = document.getElementById("id");
var messageDiv = document.getElementById("message");

var errors = {
  username: document.getElementById("usernameError"),
  password: document.getElementById("passwordError"),
  id: document.getElementById("idError"),
};

var validationRules = {
  username: function (value) {
    return value.trim().length >= 3 || "Username must be at least 3 characters.";
  },
  password: function (value) {
    return value.trim().length >= 8 || "Password must be at least 6 characters.";
  },
  id: function (value) {
    return value.trim().length === 5 || "ID must be exactly 5 characters.";
  },
};

function validateField(field, value) {
  var validationRule = validationRules[field];
  var errorMessage = validationRule(value);
  if (errorMessage !== true) {
    errors[field].textContent = errorMessage;
    return false;
  }
  errors[field].textContent = "";
  return true;
}

usernameInput.addEventListener("input", function () {
  validateField("username", usernameInput.value);
});
passwordInput.addEventListener("input", function () {
  validateField("password", passwordInput.value);
});
idInput.addEventListener("input", function () {
  validateField("id", idInput.value);
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  var username = usernameInput.value.trim();
  var password = passwordInput.value.trim();
  var id = idInput.value.trim();

  var isUsernameValid = validateField("username", username);
  var isPasswordValid = validateField("password", password);
  var isIdValid = validateField("id", id);

  if (isUsernameValid && isPasswordValid && isIdValid) {
    var match = data.find(function (item) {
      return (
        item.username.toLowerCase() === username.toLowerCase() &&
        item.password.toLowerCase() === password.toLowerCase() &&
        item.id === id
      );
    });

    if (match) {
      messageDiv.textContent = `Data Found: Username - ${match.username}, ID - ${match.id}`;
      messageDiv.className = "message success";
    } else {
      messageDiv.textContent = "Data does not exist.";
      messageDiv.className = "message";
    }
  } else {
    messageDiv.textContent = "Please fill out the form correctly before submitting.";
    messageDiv.className = "message";
  }
});
