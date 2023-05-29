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
  let obj = { email: email.value, message: message.value };
  console.log(obj);

  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}
