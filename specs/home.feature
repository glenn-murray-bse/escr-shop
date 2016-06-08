Feature: Test

  Scenario: Go to Google
    Given Go to the route "list/mens_outerwear"
    Then  The title of the page is "SHOP"


  Scenario: Go to Shop and asset heading
    Given Go to the route "list/ladies_outerwear"
    And I wait for "2" seconds
    Then  The title of the page is "SHOP"
    And I should see "Ladies Outerwear" heading
    And I wait for "2" seconds
    And Go to the route "list/ladies_tshirts"
    And I wait for "2" seconds
    And I should see "Ladies T-Shirts" heading

  @pj
  Scenario: Go to Shop and click women wear
    Given Go to the route ""
    And I click the "Ladies Outerwear" link
    And I should see "Ladies Outerwear" heading
    And I click the "Men's T-Shirts" link
    And I should see "Men's T-Shirts" heading
    And I click the "Ladies T-Shirts" link
    And I should see "Ladies T-Shirts" heading
    And I click the "Men's Outerwear" link
    And I should see "Men's Outerwear" heading
    And I wait for "2" seconds

