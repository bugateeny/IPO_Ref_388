Feature: API Automation FrameWork Test

  @UsZip
  Scenario Outline: Validate GET call for Zip Code Details in United States

    Given User is connected to Host
    And User enters a "<COUNTRY>" and "<ZIPCODE>" values
    Then User should get valid status response

    Examples:

      | COUNTRY | ZIPCODE |
      | us      | 90210   |
      | ca      | A0A     |
      | us      | 234     |

  @UsCity
  Scenario Outline: Validate GET call for City Details in United States

    Given User is connected to Host
    And User enters a "<COUNTRY>" and "<STATE>" and "<CITY>" values
    Then User should get valid status response

    Examples:

      | COUNTRY | STATE | CITY     |
      | us      | ma    | belmont  |
      | us      | ca    | belmontt |
      | us      | ma    | belmont  |


  @GbPostC
  Scenario Outline: Validate GET call for Post-Code Details in Great Britain

    Given User is connected to Host
    And User enters a "<COUNTRY>" and "<POSTCODE>" values
    Then User should get valid status response

    Examples:

      | COUNTRY | POSTCODE |
      | gb      | WV1      |
      | gb      | AB1      |
      | us      | 90210    |