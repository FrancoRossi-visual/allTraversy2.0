const El = '';

function insertAfter(newEl, existingEl) {
  if (existingEl.nextElementSibling === null) {
    existingEl.parentElement.appendChild(newEl);
  } else {
    existingEl.parentElement.insertBefore(newEl, existingEl.nextElementSibling);
  }
}

// New element to insert
const li = document.createElement('li');
li.textContent = 'Insert Me After!';

// Existing element to insert after
const firstItem = document.querySelector('li:nth-child(2)');

// Our custom function

insertAfter(li, firstItem);
