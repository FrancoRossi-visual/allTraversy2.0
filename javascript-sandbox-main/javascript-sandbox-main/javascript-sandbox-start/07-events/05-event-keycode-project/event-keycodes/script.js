// Method 1

// declare variables

// const allKeys = document.querySelectorAll('.key');
// const eventKeyTxt = allKeys[0].childNodes[0];
// const eventKeyCodeTxt = allKeys[1].childNodes[0];
// const eventCodeTxt = allKeys[2].childNodes[0];

// // log event

// document.body.addEventListener('keypress', (e) => {
//   eventKeyTxt.textContent = `${e.key}`;
//   eventKeyCodeTxt.textContent = `${e.keyCode}`;
//   eventCodeTxt.textContent = `${e.code}`;
// });

// <div class="key">
// s
// <small>e.key</small>
// </div>

// <div class="key">
// 83
// <small>e.keyCode</small>
// </div>

// <div class="key">
// KeyS
// <small>event.code</small>
// </div>

// const createEventObject = (e) => {
//   const eventObject = {
//     key: `${e.key}`,
//     keyCode: `${e.keyCode}`,
//     Code: `${e.code}`,
//   };
//   console.log(eventObject);
// };

// function addSmallTxT() {
//   const smallTxt = document.createElement('small');
//   smallTxt.textContent = 'mundo';
//   keyUI.appendChild(smallTxt);
// }

// const keyUI = document.createElement('div');
// keyUI.className = 'key';
// keyUI.innerText = 'hola';
// addSmallTxT();

function createEventObject(e) {
  const insert = document.getElementById('insert');

  while (insert.firstChild) {
    insert.firstChild.remove();
  }

  const keyCodes = {
    'e.key': e.key === ' ' ? 'Space' : e.key,
    'e.keyCode': e.keyCode,
    'e.Code': e.code,
  };

  for (key in keyCodes) {
    const div = document.createElement('div');
    div.className = 'key';
    const small = document.createElement('small');

    const keyText = document.createTextNode(key);
    const valueText = document.createTextNode(keyCodes[key]);

    small.appendChild(keyText);
    div.appendChild(valueText);
    div.appendChild(small);

    insert.appendChild(div);
  }
}

window.addEventListener('keypress', createEventObject);
