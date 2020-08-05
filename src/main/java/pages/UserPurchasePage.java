package pages;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;


public class UserPurchasePage {
    private static WebDriver driver;

    @FindBy(css = "article.product-miniature:nth-child(2) > div:nth-child(1)")
    WebElement productChoice;

    @FindBy(css = "#group_1 > option:nth-child(2)")
    WebElement sizeSelector;

    @FindBy(xpath = "//*[@id=\"quantity_wanted\"]")
    WebElement quantityChoice;

    @FindBy(css = "button.btn-primary")
    WebElement addToCard;

    @FindBy(xpath = "//*[contains(text(),'Proceed to checkout')]")
    WebElement goToCheckout;

    @FindBy(css = "a.btn")
    WebElement proceedToCheckout;

    @FindBy(xpath = "//*[@id=\"id-address-delivery-address-4572\"]")
    WebElement addressChoice;

    @FindBy(css = ".btn")
    WebElement continueTo2;

    @FindBy(css = "div.delivery-option:nth-child(1) > div:nth-child(1) > span:nth-child(1) > span:nth-child(2)")
    WebElement deliveryChoice;

    @FindBy(css = "button.continue:nth-child(2)")
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
        else {
            Assert.fail();
        }
    }

    public void setOrderConformation() {
            orderConformation.click();
    }

}


