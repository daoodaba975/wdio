async function containingText(element, value) {
  expect($(element)).toHaveTextContaining(value);
}

module.exports = containingText;
