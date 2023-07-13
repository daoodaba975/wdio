async function verifyExisting(element) {
  expect($(element)).toBeExisting();
}

module.exports = verifyExisting;
