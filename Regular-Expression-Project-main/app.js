// For Name
document.getElementById('name').addEventListener('blur', function () {
  const name = document.getElementById('name');
  const pattern = /^[a-zA-Z(\s)?]{2,23}$/;

  if (!pattern.test(name.value)) {
    return name.classList.add('is-invalid');
  }
});

// For Email
document.getElementById('email').addEventListener('blur', function () {
  const email = document.getElementById('email');
  const pattern =
    /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})(\.([a-zA-Z]{2,5}))?$/;

  if (!pattern.test(email.value)) {
    return email.classList.add('is-invalid');
  }
});

// For Zipcode
document.getElementById('zipcode').addEventListener('blur', function () {
  const zipcode = document.getElementById('zipcode');
  const pattern = /^[0-9]{5}$/;

  if (!pattern.test(zipcode.value)) {
    return zipcode.classList.add('is-invalid');
  }
});

// For Phone Number
document.getElementById('phone').addEventListener('blur', function () {
  const phone = document.getElementById('phone');
  const pattern = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

  if (!pattern.test(phone.value)) {
    return phone.classList.add('is-invalid');
  }
});
