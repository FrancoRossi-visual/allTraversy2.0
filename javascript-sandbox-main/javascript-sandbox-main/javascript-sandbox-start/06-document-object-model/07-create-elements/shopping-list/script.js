const appendNewItem = (event) => {
  const newItem = document.createElement('li');
  let newItemContent = document.querySelector('input').value;

  newItem.innerHTML = `
      ${newItemContent}
      <button class="remove-item btn-link text-red">
      <i class="fa-solid fa-xmark"></i>
      </button>
      `;
  // newItem.style.width = '100%';
  document.querySelector('ul').appendChild(newItem);
  event.preventDefault();
};

// document.querySelector('.btn').addEventListener('click', appendNewItem);

// Clean and performant

const createNewItem = (event) => {
  const li = document.createElement('li');
  li.appendChild(
    document.createTextNode(document.querySelector('input').value)
  );
  const button = addButton('remove-item btn-link text-red');

  li.appendChild(button);

  document.querySelector('.items').appendChild(li);
  event.preventDefault();
};

const addIcon = (classes) => {
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
};

const addButton = (classes) => {
  const button = document.createElement('button');
  button.className = classes;
  const icon = addIcon('fa-solid fa-xmark');
  button.appendChild(icon);
  return button;
};

document.querySelector('.btn').addEventListener('click', createNewItem);
