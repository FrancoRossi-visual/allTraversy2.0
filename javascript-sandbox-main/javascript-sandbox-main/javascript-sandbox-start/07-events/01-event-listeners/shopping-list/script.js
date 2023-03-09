function clearAll() {
  const allItems = document.querySelector('#item-list');
  // document.querySelectorAll('#item-list li').forEach((li) => li.remove());
  while (allItems.firstChild) {
    allItems.removeChild(allItems.firstChild);
  }
}

document.querySelector('#clear').addEventListener('click', clearAll);
