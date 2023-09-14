document.getElementById('multiplication-form').addEventListener('submit', event => {
  event.preventDefault();

  const form = event.target;
  const formFields = form.elements;
  const multiplier = Number(formFields.multiplier.value);
  const multiplicand = Number(formFields.multiplicand.value);
  const multiplication = multiplier * multiplicand;
  document.getElementById(
    'multiplication-result',
  ).innerText = `The multiplication of ${multiplier} times ${multiplicand} is ${multiplication}`;
});
