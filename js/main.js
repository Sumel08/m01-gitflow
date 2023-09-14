document.getElementById('addition-form').addEventListener('submit', event => {
  event.preventDefault();

  const form = event.target;
  const formFields = form.elements;
  const addend1 = Number(formFields.addend1.value);
  const addend2 = Number(formFields.addend2.value);
  const addition = addend1 + addend2;
  document.getElementById('addition-result').innerText = `The addition of ${addend1} plus ${addend2} is ${addition}`;
});

document.getElementById('subtraction-form').addEventListener('submit', event => {
  event.preventDefault();

  const form = event.target;
  const formFields = form.elements;
  const minuend = Number(formFields.minuend.value);
  const subtrahend = Number(formFields.subtrahend.value);
  const subtraction = minuend - subtrahend;
  document.getElementById(
    'subtraction-result',
  ).innerText = `The subtraction of ${minuend} minus ${subtrahend} is ${subtraction}`;
});
