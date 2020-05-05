Feature: Home Page
  Scenario: Basic
    Given [COMMON] Visit home page
    Then Should have link to Learn React

  Scenario: Custom command
    Given [COMMON] Visit home page
    Then Click disabled button with custom command