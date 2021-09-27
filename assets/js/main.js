const modal = new bootstrap.Modal(document.querySelector('#createUserModal'));
const form = document.querySelector('#form');
const submitButton = document.querySelector('#submit');
const closeModal = document.querySelector('#closeModal');

closeModal.addEventListener('click', () => {
  modal.toggle();
});

submitButton.addEventListener('click', () => {
  if (form['name'].value && form['lastName'].value) {
    const nameEl = document.querySelector('#name');
    const lastNameEl = document.querySelector('#lastName');

    nameEl.innerHTML = form['name'].value;
    lastNameEl.innerHTML = form['lastName'].value;
    modal.toggle();
  } else {
    document.querySelector('#nameInputError').innerHTML = form['name'].value
      ? ''
      : 'Must not be empty';

    document.querySelector('#lastNameInputError').innerHTML = form['lastName']
      .value
      ? ''
      : 'Must not be empty';
  }
});
