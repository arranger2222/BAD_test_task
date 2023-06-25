const textInput = document.querySelector('#text');
const counter = document.querySelector('.counter');
const clearBtn = document.querySelector('#reset_button');

textInput.addEventListener('input', e => {
  let string = e.currentTarget.value;
  findUniqueLetter(string);
  autoResize(e);
});

clearBtn.addEventListener('click', e => {
  clearForm(e);
});

function findUniqueLetter(str) {
  const uniqueEl = [];
  const strToArray = str.split(' ');
  strToArray.forEach(el => {
    const uniqueLetter = el
      .split('')
      .find((el, i, arr) => arr.indexOf(el) === arr.lastIndexOf(el));
    if (uniqueLetter) {
      uniqueEl.push(uniqueLetter);
    }
  });
  return (counter.textContent = uniqueEl.find(
    (el, i, arr) => arr.indexOf(el) === arr.lastIndexOf(el),
  ));
}

function autoResize(e) {
  textInput.style.height = 'auto';
  textInput.style.height = `${textInput.scrollHeight + 2}px`;
}

function clearForm(e) {
  e.preventDefault();
  textInput.style.height = 'auto';
  textInput.value = '';
  counter.textContent = '';
}
