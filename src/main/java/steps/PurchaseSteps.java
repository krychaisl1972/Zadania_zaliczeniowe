package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import pages.InputPage;
import pages.ScreenCapture;
import pages.UserPurchasePage;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

public class PurchaseSteps {
    WebDriver driver;
    UserPurchasePage userPurchasePage;
    ScreenCapture screenCapture;

    @Given("^Log in to CodersLab shop$")
    public void userIsLooggedInToCodersLab() {
        System.setProperty("webdriver.gecko.driver",
                "src/main/resources/Drivers/geckodriver");

        driver = new FirefoxDriver();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.manage().window().maximize();

        driver.get("https://prod-kurs.coderslab.pl/index.php?controller=authentication");
        InputPage inputPage = new InputPage(driver);
        userPurchasePage = new UserPurchasePage(driver);
        screenCapture = new ScreenCapture(driver);

        inputPage.loginAs("itwdnkuifyvjtqlixg@ttirv.org", "kursautomat");
    }
    @When("^choose Hummingbird Printed Sweater$")
    public void userChooseSweter() {
        userPurchasePage.setProductChoice();
    }

    @And("^choose size M$")
    public void userChooseSize(){
        userPurchasePage.setSizeSelector();
    }

    @And("^choose 5 pieces$")
    public void userChooseAmount(){
        userPurchasePage.setQuantityChoice();
    }

    @And("^add product to basket$")
    public void userAddToBasket(){
        userPurchasePage.setAddToCard();
    }

    @And("^go further$")
    public void setCheckoutPage(){
        userPurchasePage.setGoToCheckout();
    }

    @And("^proceed to checkout$")
    public void userProceedToCheckout(){ userPurchasePage.setProceedToCheckout(); }

    @And("^confirm address$")
    public void userConfirmAddress(){
        userPurchasePage.setAddressChoice();
        userPurchasePage.setContinueTo2();
    }

    @And("^choose delivery method - PrestaShop \"pick up in store\"$")
    public void userChooseDelivery() {
        userPurchasePage.setDeliveryChoice();
        userPurchasePage.setContinueTo3();
    }

    @And("^choose payment option - Pay by Check$")
    public void userChoosePayment(){
        userPurchasePage.setPaymentChoice();
    }


    @And("^click to approve conditions$")
    public void userApproveConditions(){
        userPurchasePage.setAgreeClick();
    }


    @And("^click \"order with an obligation to pay\"$")
    public void userOrderPay(){
        userPurchasePage.setOrderConformation();
    }


    @Then("make screenshot with confirmation of order and price")
    public void userTakeScreenshot() throws IOException, InterruptedException{
        screenCapture.takeScreenshot();

    }

}
