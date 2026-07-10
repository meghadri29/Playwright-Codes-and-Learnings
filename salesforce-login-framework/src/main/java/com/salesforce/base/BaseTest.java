package com.salesforce.base;

import java.io.FileInputStream;
import java.io.IOException;
import java.time.Duration;
import java.util.Properties;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;

import com.salesforce.exceptions.ElementActionException;

import io.github.bonigarcia.wdm.WebDriverManager;

public class BaseTest {
    protected WebDriver driver;
    protected Properties config;
    protected Duration explicitWait;

    @BeforeTest
    public void setup() {
        try {
            config = new Properties();
            FileInputStream fis = new FileInputStream("src/main/resources/config.properties");
            config.load(fis);
            fis.close();

            String browser = config.getProperty("browser", "chrome").toLowerCase();
            int implicitWaitSec = Integer.parseInt(config.getProperty("implicit.wait.seconds", "5"));
            int explicitWaitSec = Integer.parseInt(config.getProperty("explicit.wait.seconds", "10"));
            explicitWait = Duration.ofSeconds(explicitWaitSec);

            switch (browser) {
                case "firefox":
                    WebDriverManager.firefoxdriver().setup();
                    driver = new FirefoxDriver();
                    break;
                case "chrome":
                default:
                    WebDriverManager.chromedriver().setup();
                    driver = new ChromeDriver();
                    break;
            }

            driver.manage().window().maximize();
            driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(implicitWaitSec));
            driver.get(config.getProperty("app.url"));
        } catch (IOException e) {
            throw new ElementActionException("BaseTest", "load configuration and initialize driver", e);
        }
    }

    @AfterTest
    public void teardown() {
        if (driver != null) {
            try {
                driver.quit();
            } catch (Exception e) {
                throw new ElementActionException("BaseTest", "quit driver during teardown", e);
            }
        }
    }
}
