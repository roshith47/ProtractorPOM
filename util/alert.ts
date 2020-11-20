import { protractor,browser, element, by } from "protractor"
//import { protractor } from "protractor/built/ptor";
const log = require('../config/logging').default;
export class alert{
static async VerifyAndCloseAlert(text: String) {
    let EC = protractor.ExpectedConditions;
    browser.wait(EC.alertIsPresent(), 4000, "Alert not found");
    let alert = await browser.switchTo().alert();
    let alerttext = await alert.getText();
    log.debug("Alert text: " + alerttext);
    /*alerttext.then(function (txt) {
        log.debug("Alert text: " + txt);
    })*/

    browser.sleep(2000);
    expect(alerttext).toContain(alerttext);
    await alert.accept();

}
}