Feature: Create new address after login


  Scenario Outline: Create new address
    Given Login to CodersLab shop
    When User goes to AddressPage
    And User add new address
    And User set following alias "<alias>"
    And User set following address "<address>"
    And User set following city "<city>"
    And User set following post code "<postCode>"
    And User set following country
    And User set following phone "<phone>"
    And User submits added new address form
    Then Address was submitted correctly


    Examples:
      | alias   | address            | city   | postCode   | phone       |
      | johns   | 17 KrokusRd        | London | YH34OX2    | 0705521456  |
      | anders  | 345 Kensington Rd  | Hull   | HU23NW2    | 0704565512  |