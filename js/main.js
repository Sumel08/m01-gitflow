document.getElementById('addition-form').addEventListener('submit', event => {
  event.preventDefault();

  const form = event.target;
  const formFields = form.elements;
  const addend1 = Number(formFields.addend1.value);
  const addend2 = Number(formFields.addend2.value);
  const addition = addend1 + addend2;
  document.getElementById('addition-result').innerText = `The addition of ${addend1} plus ${addend2} is ${addition}`;
});
