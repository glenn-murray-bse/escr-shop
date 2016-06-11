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
    And I wait for "3" seconds
    Then total no of items on the page are "16"
    When I click item 3
   Then the item "heading" is "Green Flex Fleece Zip Hoodie"
  And I wait for "3" seconds
  #And the item "" is ""
  #    When I select "L" in "Size" dropdown field
#    And I select "2" in "Quantity" dropdown field


#    And I click "ADD TO CART" button
#    And I click "CHECKOUT" button
#    Then I should see "1" item in cart


