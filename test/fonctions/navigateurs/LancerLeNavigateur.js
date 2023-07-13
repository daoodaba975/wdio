async function navigateToURL(browser, url) {
  await browser.url(url);
}

module.exports = navigateToURL;
