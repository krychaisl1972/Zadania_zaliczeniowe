$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Zadanie1.feature");
formatter.feature({
  "line": 1,
  "name": "Create new address after login",
  "description": "",
  "id": "create-new-address-after-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Create new address",
  "description": "",
  "id": "create-new-address-after-login;create-new-address",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Login to CodersLab shop",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User goes to AddressPage",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User add new address",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User set following alias \"\u003calias\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User set following address \"\u003caddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User set following city \"\u003ccity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User set following post code \"\u003cpostCode\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User set following country",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User set following phone \"\u003cphone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User submits added new address form",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Address was submitted correctly",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "create-new-address-after-login;create-new-address;",
  "rows": [
    {
      "cells": [
        "alias",
        "address",
        "city",
        "postCode",
        "phone"
      ],
      "line": 19,
      "id": "create-new-address-after-login;create-new-address;;1"
    },
    {
      "cells": [
        "johns",
        "17 KrokusRd",
        "London",
        "YH34OX2",
        "0705521456"
      ],
      "line": 20,
      "id": "create-new-address-after-login;create-new-address;;2"
    },
    {
      "cells": [
        "anders",
        "345 Kensington Rd",
        "Hull",
        "HU23NW2",
        "0704565512"
      ],
      "line": 21,
      "id": "create-new-address-after-login;create-new-address;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "Create new address",
  "description": "",
  "id": "create-new-address-after-login;create-new-address;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Login to CodersLab shop",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User goes to AddressPage",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User add new address",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User set following alias \"johns\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User set following address \"17 KrokusRd\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User set following city \"London\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User set following post code \"YH34OX2\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User set following country",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User set following phone \"0705521456\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User submits added new address form",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Address was submitted correctly",
  "keyword": "Then "
});
formatter.match({
  "location": "AddressSteps.inputLogin()"
});
formatter.result({
  "duration": 17494403510,
  "status": "passed"
});
formatter.match({
  "location": "AddressSteps.userGoesToAddressPage()"
});
formatter.result({
  "duration": 867190657,
  "status": "passed"
});
formatter.match({
  "location": "AddressSteps.userClickForNewAddress()"
});
formatter.result({
  "duration": 1043568115,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "johns",
      "offset": 26
    }
  ],
  "location": "AddressSteps.userAliasInput(String)"
});
formatter.result({
  "duration": 185577369,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "17 KrokusRd",
      "offset": 28
    }
  ],
  "location": "AddressSteps.userAddressInput(String)"
});
formatter.result({
  "duration": 231624619,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 25
    }
  ],
  "location": "AddressSteps.userCityInput(String)"
});
formatter.result({
  "duration": 90407598,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "YH34OX2",
      "offset": 30
    }
  ],
  "location": "AddressSteps.userPostcodeInput(String)"
});
formatter.result({
  "duration": 89506315,
  "status": "passed"
});
formatter.match({
  "location": "AddressSteps.userCountryInput()"
});
formatter.result({
  "duration": 316163546,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0705521456",
      "offset": 26
    }
  ],
  "location": "AddressSteps.userPhoneInput(String)"
});
formatter.result({
  "duration": 70976860,
  "status": "passed"
});
formatter.match({
  "location": "AddressSteps.userSaveData()"
});
formatter.result({
  "duration": 951353496,
  "status": "passed"
});
formatter.match({
  "location": "AddressSteps.submitMessage()"
});
formatter.result({
  "duration": 186803261,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Create new address",
  "description": "",
  "id": "create-new-address-after-login;create-new-address;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Login to CodersLab shop",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User goes to AddressPage",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User add new address",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User set following alias \"anders\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User set following address \"345 Kensington Rd\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User set following city \"Hull\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User set following post code \"HU23NW2\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User set following country",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User set following phone \"0704565512\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User submits added new address form",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Address was submitted correctly",
  "keyword": "Then "
});
formatter.match({
  "location": "AddressSteps.inputLogin()"
});
formatter.result({
  "duration": 13765919792,
  "status": "passed"
});
formatter.match({
  "location": "AddressSteps.userGoesToAddressPage()"
});
formatter.result({
  "duration": 1015326262,
  "status": "passed"
});
formatter.match({
  "location": "AddressSteps.userClickForNewAddress()"
});
formatter.result({
  "duration": 1187812785,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "anders",
      "offset": 26
    }
  ],
  "location": "AddressSteps.userAliasInput(String)"
});
formatter.result({
  "duration": 151885557,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "345 Kensington Rd",
      "offset": 28
    }
  ],
  "location": "AddressSteps.userAddressInput(String)"
});
formatter.result({
  "duration": 208164653,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hull",
      "offset": 25
    }
  ],
  "location": "AddressSteps.userCityInput(String)"
});
formatter.result({
  "duration": 73723387,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HU23NW2",
      "offset": 30
    }
  ],
  "location": "AddressSteps.userPostcodeInput(String)"
});
formatter.result({
  "duration": 80585572,
  "status": "passed"
});
formatter.match({
  "location": "AddressSteps.userCountryInput()"
});
formatter.result({
  "duration": 348969524,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0704565512",
      "offset": 26
    }
  ],
  "location": "AddressSteps.userPhoneInput(String)"
});
formatter.result({
  "duration": 60575528,
  "status": "passed"
});
formatter.match({
  "location": "AddressSteps.userSaveData()"
});
formatter.result({
  "duration": 1093440520,
  "status": "passed"
});
formatter.match({
  "location": "AddressSteps.submitMessage()"
});
formatter.result({
  "duration": 128836956,
  "status": "passed"
});
formatter.uri("Zadanie2.feature");
formatter.feature({
  "line": 1,
  "name": "Purchase Hummingbird Printed Sweater",
  "description": "",
  "id": "purchase-hummingbird-printed-sweater",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Buy a product",
  "description": "",
  "id": "purchase-hummingbird-printed-sweater;buy-a-product",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Log in to CodersLab shop",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "choose Hummingbird Printed Sweater",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "choose size M",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "choose 5 pieces",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "add product to basket",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "go to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "proceed to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "confirm address",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "choose delivery method - PrestaShop \"pick up in store\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "choose payment option - Pay by Check",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "click \"order with an obligation to pay\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "make screenshot with confirmation of order and price",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "PurchaseSteps.userIsLooggedInToCodersLab()"
});
formatter.result({
  "duration": 14304975758,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.userChooseSweter()"
});
formatter.result({
  "duration": 126967802,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.userChooseSize()"
});
formatter.result({
  "duration": 10101314896,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: #group_1 \u003e option:nth-child(2)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027krystian-VirtualBox\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.4.0-42-generic\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 78.0.2, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20200708170202, moz:geckodriverVersion: 0.26.0, moz:headless: false, moz:processID: 1244845, moz:profile: /tmp/rust_mozprofile64iOFo, moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, platformVersion: 5.4.0-42-generic, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 4f4eb6d7-0848-4885-a5cb-412998d2edeb\n*** Element info: {Using\u003dcss selector, value\u003d#group_1 \u003e option:nth-child(2)}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy19.isSelected(Unknown Source)\n\tat pages.UserPurchasePage.setSizeSelector(UserPurchasePage.java:62)\n\tat steps.PurchaseSteps.userChooseSize(PurchaseSteps.java:42)\n\tat ✽.And choose size M(Zadanie2.feature:7)\n",
  "status": "failed"
});
formatter.match({
  "location": "PurchaseSteps.userChooseAmount()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PurchaseSteps.userAddToBasket()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PurchaseSteps.userToCheckout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PurchaseSteps.userProceedToCheckout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PurchaseSteps.userConfirmAddress()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PurchaseSteps.userChooseDelivery()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PurchaseSteps.userChoosePayment()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PurchaseSteps.userOrderPay()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PurchaseSteps.submitMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PurchaseSteps.closeBrowser()"
});
formatter.result({
  "status": "skipped"
});
});