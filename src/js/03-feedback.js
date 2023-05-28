let formData = {};
const form = document.querySelector('.feedback-form');
const btn = document.querySelector('button');
const LS = localStorage;

form.addEventListener('input', function (event) {
  formData[event.target.name] = event.target.value;
  LS.setItem('feedback-form-state', JSON.stringify(formData));
});

if (LS.getItem('feedback-form-state')) {
  formData = JSON.parse(LS.getItem('feedback-form-state'));
  for (let key in formData) {
    form.elements[key].value = formData[key];
  }
}

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, message },
  } = event.currentTarget;

  if (email.value === '' || message.value === '') {
    return console.log('Please fill in all the fields!');
  }

  console.log(`Login: ${email.value}, Password: ${message.value}`);
  event.currentTarget.reset();
  localStorage.clear();
}
