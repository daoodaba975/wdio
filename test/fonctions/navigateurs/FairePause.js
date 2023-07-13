async function toPause(value) {
  browser.pause(value * 1000);
}

module.exports = toPause;
