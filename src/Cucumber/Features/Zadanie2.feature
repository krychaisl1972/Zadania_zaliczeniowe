Feature: Purchase Hummingbird Printed Sweater


  Scenario: Buy a product
    Given Log in to CodersLab shop
    When choose Hummingbird Printed Sweater
    And choose size M
    And choose 5 pieces
    And add product to basket
    And go further
    And proceed to checkout
    And confirm address
    And choose delivery method - PrestaShop "pick up in store"
    And choose payment option - Pay by Check
    And click to approve conditions
    And click "order with an obligation to pay"
    Then make screenshot with confirmation of order and price
