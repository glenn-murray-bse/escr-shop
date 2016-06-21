Feature: Test

  Scenario: Go to Shop and asset heading
    Given Go to the route "list/ladies_outerwear"
    And I wait for "2" seconds
    Then  The title of the page is "SHOP"
    And I should see "Ladies Outerwear" heading
    And I wait for "2" seconds
    And Go to the route "list/ladies_tshirts"
    And I wait for "2" seconds
    And I should see "Ladies T-Shirts" heading

  Scenario: Check page heading for each tab
    Given Go to the route ""
    And I wait for "3" seconds
    And I click "Ladies Outerwear" link
    And I should see "Ladies Outerwear" heading
    And I click "Men's T-Shirts" link
    And I should see "Men's T-Shirts" heading
    And I click "Ladies T-Shirts" link
    And I should see "Ladies T-Shirts" heading
    And I click "Men's Outerwear" link
    And I should see "Men's Outerwear" heading
    And I wait for "2" seconds

  @pj
  Scenario: Go to Men's Outwear page
    Given Go to the route "list/mens_outerwear"
    #And I wait for "5" seconds
    Then total no of items on the page are "16"
    When I click item 3
    Then the item "heading" is "Green Flex Fleece Zip Hoodie"
    And the item "price" is "$45.65"
    When I select "Size" from the "L" dropdown
    And I select "Quantity" from the "5" dropdown
    And I click "Add to Cart" button
    #And I wait for "1" seconds
    Then a dialog is displayed with title "Added to cart"
    When I click the "View Cart" dialog button
    And I should see "5" items in shopping Cart
    #And I wait for "1" seconds
    And I click "CHECKOUT" link
    #And I wait for "1" seconds
    And I should see "Checkout" form
    And I enter "apj@gmail.com" in "accountEmail" field
    And I enter "04037332221" in "accountPhone" field
    And I enter "Victoria" in "shipState" field
    #And I wait for "3" seconds
    And I click "Place Order" checkout button
    #And I wait for "3" seconds
    And the following field has error message:
      | errorMessage    |
      | Address         |
      | City            |
      | Zip/Postal Code |
      | Cardholder Name |
      | Card Number     |
      | CVV             |


