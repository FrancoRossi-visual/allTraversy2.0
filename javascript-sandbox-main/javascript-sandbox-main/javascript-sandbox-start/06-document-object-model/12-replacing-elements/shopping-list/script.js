function replaceFistItem() {
  const firstItem = document.querySelector('li:first-child');

  const li = document.createElement('li');
  li.textContent = 'Replaced first';

  firstItem.replaceWith(li);
}

function replaceSecondItem() {
  const seccondItem = document.querySelector('li:nth-child(2)');
  seccondItem.outerHTML = '<li>Replaced seccond</li>';
}

// replaceFistItem();
// replaceSecondItem();

function replaceAll() {
  const allItems = document.querySelectorAll('li');
  console.log(allItems);
  allItems.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `replaced li:${index + 1}`;
    console.log(li);
    item.replaceWith(li);
  });
}

replaceAll();
