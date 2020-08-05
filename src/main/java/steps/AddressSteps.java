package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import pages.LoginPage;

import java.util.concurrent.TimeUnit;

public class AddressSteps {
    WebDriver driver;
    LoginPage loginPage;


    @Given("^Login to CodersLab shop$")
    public void inputLogin() {
        System.setProperty("webdriver.gecko.driver",
                "src/main/resources/Drivers/geckodriver");

        driver = new FirefoxDriver();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.manage().window().maximize();

        driver.get("https://prod-kurs.coderslab.pl/index.php?controller=authentication");
        loginPage = new LoginPage(driver);

        loginPage.loginAs("itwdnkuifyvjtqlixg@ttirv.org", "kursautomat");
    }
    @When("^User goes to AddressPage$")
    public void userGoesToAddressPage() {
        driver.get("https://prod-kurs.coderslab.pl/index.php?controller=addresses");
    }

    @And("^User add new address$")
    public void userClickForNewAddress(){
        driver.findElement(By.cssSelector(".addresses-footer > a:nth-child(1)")).click();

    }
    @And("^User set following alias \"([^\"]*)\"$")
    public void userAliasInput(String alias){
        driver.findElement(By.name("alias")).sendKeys(alias);
    }

    @And("^User set following address \"([^\"]*)\"$")
    public void userAddressInput(String address){
        driver.findElement(By.name("address1")).sendKeys(address);
    }

    @And("^User set following city \"([^\"]*)\"$")
    public void userCityInput(String city){
        driver.findElement(By.name("city")).sendKeys(city);
    }

    @And("^User set following post code \"([^\"]*)\"$")
    public void userPostcodeInput(String postcode){
        driver.findElement(By.name("postcode")).sendKeys(postcode);
    }

    @And("^User set following country$")
    public void userCountryInput() {
        driver.findElement(By.xpath("//*[@id=\"content\"]/div/div/form/section/div[10]/div[1]/select")).click();
    }

    @And("^User set following phone \"([^\"]*)\"$")
    public void userPhoneInput(String phone){
        driver.findElement(By.name("phone")).sendKeys(phone);
    }

    @And("^User submits added new address form$")
    public void userSaveData(){
        driver.findElement(By.cssSelector("button.btn")).click();
    }

    @Then("Address was submitted correctly")
    public void submitMessage(){
        driver.findElement(By.xpath("//*[@id=\"notifications\"]/div/article")).getText();
    }

    @And("close browser")
    public void closeBrowser(){
        driver.quit();
    }

}
