async function setValueToInput(element, value) {
  await $(element).setValue(value);
}

module.exports = setValueToInput;
