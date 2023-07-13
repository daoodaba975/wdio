const navigateToURL = require("../fonctions/navigateurs/LancerLeNavigateur.js");
const clickToElement = require("../fonctions/navigations/CliquerSurElement.js");
const setValueToInput = require("../fonctions/navigations/EntrerUneValeur.js");
const verifyExisting = require("../fonctions/verifications/VerifierSiExiste.js");
const containingText = require("../fonctions/verifications/SiContientTexte.js");
const toPause = require("../fonctions/navigateurs/FairePause.js");

const { usr, pwd, vrf } = require("../variables/variables.js");
const { theInternetURL } = require("../url/herokuappUrl.js");
const locateurs = require("../locateurs/herokuappLocateurs.js");

describe("Mon application de connexion", () => {
  it("doit se connecter avec des informations d'identification valides", async () => {
    await navigateToURL(browser, theInternetURL);
    await toPause(3);

    await setValueToInput(locateurs.herokuappLocateurs.username, usr);
    await toPause(3);

    await setValueToInput(locateurs.herokuappLocateurs.password, pwd);
    await toPause(3);

    await clickToElement(locateurs.herokuappLocateurs.submit);
    await toPause(3);

    await verifyExisting(locateurs.herokuappLocateurs.verify);
    await toPause(3);

    await containingText(locateurs.herokuappLocateurs.verify, vrf);
    await toPause(3);
  });
});
