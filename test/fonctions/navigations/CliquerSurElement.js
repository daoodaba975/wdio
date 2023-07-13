async function clickToElement(element) {
  await $(element).click();
}

module.exports = clickToElement;
