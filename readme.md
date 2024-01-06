EVENTING
Find events. Anywhere.

*KEY FEATURES*
● Filter Events by City.
    As a user,
    I should be able to filter events by city
    So that I can see only the events in that city.

  Scenario: User filters events by a specific city
    Given the user is on the Eventing app home screen
    When the user selects the "Filter" option
    And chooses a city from the available options
    Then the app should display events specific to the selected city

● Show/Hide Event Details.
    As a user,
    I should be able to show or hide an event's details
    So that I can peruse all events efficiently in a clean interface.

  Scenario: User shows event details
    Given the user is viewing the list of events
    When the user taps on a specific event
    Then the app should display the details of that event

  Scenario: User hides event details
    Given the user is viewing the details of an event
    When the user taps on the "Hide Details" option
    Then the app should hide the event details and return to the event list

● Specify Number of Events.
    As a user,
    I should be able to specify the number of events displayed
    So that the user interface is not overly cluttered or difficult to read.

  Scenario: User sets the number of events to display
    Given the user is on the Eventing app home screen
    When the user specifies the number of events to display
    Then the app should show only the specified number of events


● Use the App When Offline.
    As a user,
    I should be able to use the app while offline
    So that I can use the app reliably in areas where internet access is poor.

  Scenario: User accesses the app without an internet connection
    Given the user has previously used the Eventing app and data is stored locally
    When the user opens the app without an internet connection
    Then the app should display cached data and functionalities available offline

● Add an App Shortcut to the Home Screen.
    As a user,
    I should be able to add an app shortcut to my device's home screen
    So that I can access the app quickly and easily each time.

  Scenario: User adds Eventing app shortcut to the home screen
    Given the Eventing app is installed on the device
    When the user selects the option to add a shortcut to the home screen
    Then the app should create a shortcut for easy access on the device's home screen

● Display Charts Visualizing Event Details
    As a user,
    I should be able to display charts with an event's details 
    So that I can easily see and compare data for that event.

  Scenario: User views charts visualizing event details
    Given the user is viewing the details of an event
    When the user selects the "Charts" option
    Then the app should display visual charts representing event-related data
