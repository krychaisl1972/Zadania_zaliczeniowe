package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;


public class UserPurchasePage {
    private static WebDriver driver;

    @FindBy(xpath = "/html/body/main/section/div/div/section/section/section/div/article[2]/div/div[1]/h3/a")
    WebElement productChoice;

    @FindBy(css = "#group_1 > option:nth-child(2)")
    WebElement sizeSelector;

    @FindBy(xpath = "//*[@id=\"quantity_wanted\"]")
    WebElement quantityChoice;

    @FindBy(xpath = "/html/body/main/section/div/div/section/div[1]/div[2]/div[2]/div[2]/form/div[2]/div/div[2]/button")
    WebElement addToCard;

    @FindBy(xpath = "//*[contains(text(),'Proceed to checkout')]")
    WebElement goToCheckout;

    @FindBy(xpath = "/html/body/main/section/div/div/section/div/div[2]/div[1]/div[2]/div/a")
    WebElement proceedToCheckout;

    @FindBy(xpath = "//*[@id=\"id-address-delivery-address-4572\"]")
    WebElement addressChoice;

    @FindBy(xpath = "/html/body/section/div/section/div/div[1]/section[2]/div/div/form/div[2]/button")
    WebElement continueTo2;

    @FindBy(xpath = "/html/body/section/div/section/div/div[1]/section[3]/div/div[2]/form/div/div[1]/div[1]/div/span/span")
    WebElement deliveryChoice;

    @FindBy(xpath = "/html/body/section/div/section/div/div[1]/section[3]/div/div[2]/form/button")
    WebElement continueTo3;

    @FindBy(id = "payment-option-1")
    WebElement paymentChoice;

    @FindBy(css = "#conditions_to_approve\\[terms-and-conditions\\]")
    WebElement agreeClick;

    @FindBy(css = "div.ps-shown-by-js > button:nth-child(1)")
    WebElement orderConformation;


    public UserPurchasePage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    public void setProductChoice() {
            productChoice.click();
    }

    public void setSizeSelector() {
            sizeSelector.click();
    }

    public void setQuantityChoice() {
        quantityChoice.click();
        quantityChoice.clear();
        quantityChoice.sendKeys("5");
    }

    public void setAddToCard() {
            addToCard.click();
    }

    public void setGoToCheckout() {
        WebDriverWait wait = new WebDriverWait(driver, 10);
        wait.until(ExpectedConditions.elementToBeClickable(goToCheckout));
        goToCheckout.click();
    }

    public void setProceedToCheckout() {
            proceedToCheckout.click();

    }

    public void setAddressChoice() {
            addressChoice.click();
    }

    public void setContinueTo2() {
            continueTo2.click();
    }

    public void setDeliveryChoice() {
            deliveryChoice.click();
    }

    public void setContinueTo3() {
            continueTo3.click();
    }

    public void setPaymentChoice() {
        paymentChoice.click();
    }

    public void setAgreeClick() {
        if (agreeClick.isEnabled())
            agreeClick.click();
    }

    public void setOrderConformation() {
            orderConformation.click();
    }

}


