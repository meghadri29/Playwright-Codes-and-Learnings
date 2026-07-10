package com.salesforce.tests;

import org.testng.annotations.Test;
import org.testng.asserts.SoftAssert;

import com.salesforce.base.BaseTest;
import com.salesforce.exceptions.ElementActionException;
import com.salesforce.pages.LoginPage;
import com.salesforce.utils.WaitUtils;

public class ValidLoginTest extends BaseTest {

    @Test
    public void testValidLogin() {
        SoftAssert softAssert = new SoftAssert();
        try {
            WaitUtils waitUtils = new WaitUtils(driver, explicitWait);
            LoginPage loginPage = new LoginPage(driver, waitUtils);

            String username = config.getProperty("valid.username");
            String password = config.getProperty("valid.password");

            loginPage.doLogin(username, password);

            String currentUrl = loginPage.getCurrentUrl();
            softAssert.assertFalse(
                    currentUrl.contains("login.salesforce.com"),
                    "URL should not remain on login page after successful login"
            );

            softAssert.assertAll();
        } catch (ElementActionException e) {
            throw e;
        } catch (Exception e) {
            throw new ElementActionException("ValidLoginTest", "execute valid login test", e);
        }
    }
}
