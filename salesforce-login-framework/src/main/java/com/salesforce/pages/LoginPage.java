package com.salesforce.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.salesforce.exceptions.ElementActionException;
import com.salesforce.utils.WaitUtils;

public class LoginPage {
    private WebDriver driver;
    private WaitUtils waitUtils;

    @FindBy(xpath = "//input[@id='username']")
    private WebElement usernameInput;

    @FindBy(xpath = "//input[@id='password']")
    private WebElement passwordInput;

    @FindBy(xpath = "//input[@id='Login']")
    private WebElement loginButton;

    @FindBy(xpath = "//input[@id='rememberUn']")
    private WebElement rememberMeCheckbox;

    @FindBy(xpath = "//div[@id='error']")
    private WebElement errorMessage;

    public LoginPage(WebDriver driver, WaitUtils waitUtils) {
        this.driver = driver;
        this.waitUtils = waitUtils;
        PageFactory.initElements(driver, this);
    }

    public void enterUsername(String username) {
        try {
            waitUtils.waitForElementVisible(usernameInput);
            usernameInput.clear();
            usernameInput.sendKeys(username);
        } catch (Exception e) {
            throw new ElementActionException("LoginPage", "enter username", e);
        }
    }

    public void enterPassword(String password) {
        try {
            waitUtils.waitForElementVisible(passwordInput);
            passwordInput.clear();
            passwordInput.sendKeys(password);
        } catch (Exception e) {
            throw new ElementActionException("LoginPage", "enter password", e);
        }
    }

    public void clickLogin() {
        try {
            waitUtils.waitForElementClickable(loginButton);
            loginButton.click();
        } catch (Exception e) {
            throw new ElementActionException("LoginPage", "click login button", e);
        }
    }

    public void toggleRememberMe(boolean enable) {
        try {
            waitUtils.waitForElementClickable(rememberMeCheckbox);
            if (enable != rememberMeCheckbox.isSelected()) {
                rememberMeCheckbox.click();
            }
        } catch (Exception e) {
            throw new ElementActionException("LoginPage", "toggle remember me", e);
        }
    }

    public String getErrorMessage() {
        try {
            waitUtils.waitForElementVisible(errorMessage);
            return errorMessage.getText();
        } catch (Exception e) {
            throw new ElementActionException("LoginPage", "get error message", e);
        }
    }

    public boolean isErrorDisplayed() {
        try {
            waitUtils.waitForElementVisible(errorMessage);
            return errorMessage.isDisplayed();
        } catch (Exception e) {
            return false;
        }
    }

    public String getCurrentUrl() {
        try {
            return driver.getCurrentUrl();
        } catch (Exception e) {
            throw new ElementActionException("LoginPage", "get current URL", e);
        }
    }

    public void doLogin(String username, String password) {
        enterUsername(username);
        enterPassword(password);
        clickLogin();
    }
}
