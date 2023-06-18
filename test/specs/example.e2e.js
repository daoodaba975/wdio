require("../url/herokuappUrl.js");
require("../locateurs/herokuappLocateurs.js");
// require("../fonctions/navigateus/LancerLeNavigateur.js");
import { LancerLeNavigateur } from "../fonctions/navigateurs/LancerLeNavigateur.js";

describe("My Login application", () => {
  it("should login with valid credentials", async () => {
    // await browser.url(heroku.appUrl);
    await LancerLeNavigateur(heroku.appUrl);

    await $(lock.username).setValue("tomsmith");
    await $(lock.password).setValue("SuperSecretPassword!");
    await $(lock.submit).click();

    await expect($(lock.verify)).toBeExisting();
    await expect($(lock.verify)).toHaveTextContaining(
      "You logged into a secure area!"
    );
  });
});
