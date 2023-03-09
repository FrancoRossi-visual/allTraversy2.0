// ui selectors

const itemInputUI = document.getElementById('item-input');
const priorityInputUI = document.getElementById('priority-input');
const checkboxUI = document.getElementById('checkbox');
const headingUI = document.querySelector('h1');

// console.log(itemInputUI, priorityInputUI, checkboxUI, headingUI);

function logAll(e) {
  //data
  e.preventDefault();
  const itemInputVAL = itemInputUI.value;
  const priorityInputVAL = priorityInputUI.value;
  const checkboxVAL = checkboxUI.checked;
  const data = {
    item: itemInputVAL,
    priority: priorityInputVAL,
    RecurringItem: checkboxVAL,
  };
  console.log(data);
}

const addItemUI = document.querySelector('.btn');
addItemUI.addEventListener('submit', logAll);
