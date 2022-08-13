Feature: Launch browser example 1

  Scenario: Open google and enter text to search
    Given driver 'https://www.google.com'
    When input("input[type=text]", 'karate')
    And submit()
    * delay(10000)
