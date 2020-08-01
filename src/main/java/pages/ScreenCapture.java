package pages;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

public class ScreenCapture {

    public static void main(String[] args) throws IOException {

        System.setProperty("webdriver.gecko.driver",
                "src/main/resources/Drivers/geckodriver");
        WebDriver driver = new FirefoxDriver();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
        driver.get("https://prod-kurs.coderslab.pl/index.php?controller=authentication");
        InputPage inputPage = new InputPage(driver);
        inputPage.loginAs("itwdnkuifyvjtqlixg@ttirv.org", "kursautomat");

        driver.get("https://prod-kurs.coderslab.pl/index.php?controller=history");
        driver.manage().window().maximize();
        File scrFile = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
        FileUtils.copyFile(scrFile, new File("src\\test\\Output\\screenshot1.png"), true);
        driver.quit();
    }
}