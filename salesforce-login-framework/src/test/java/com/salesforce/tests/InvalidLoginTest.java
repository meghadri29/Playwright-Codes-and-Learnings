package com.salesforce.tests;

import org.testng.annotations.Test;
import org.testng.asserts.SoftAssert;

import com.salesforce.base.BaseTest;
import com.salesforce.exceptions.ElementActionException;
import com.salesforce.pages.LoginPage;
import com.salesforce.utils.WaitUtils;

public class InvalidLoginTest extends BaseTest {

    @Test
    public void testInvalidLoginShowsError() {
        SoftAssert softAssert = new SoftAssert();
        try {
            WaitUtils waitUtils = new WaitUtils(driver, explicitWait);
            LoginPage loginPage = new LoginPage(driver, waitUtils);

            String username = config.getProperty("invalid.username");
            String password = config.getProperty("invalid.password");

            loginPage.doLogin(username, password);

            softAssert.assertTrue(
                    loginPage.isErrorDisplayed(),
                    "Error message should be displayed after invalid login attempt"
            );

            String errorText = loginPage.getErrorMessage();
            softAssert.assertFalse(
                    errorText.isEmpty(),
                    "Error message text should not be empty"
            );

            softAssert.assertAll();
        } catch (ElementActionException e) {
            throw e;
        } catch (Exception e) {
            throw new ElementActionException("InvalidLoginTest", "execute invalid login test", e);
        }
    }
}
