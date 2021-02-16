Feature: Google Homepage

  This feature is to test the google homepage

  Background:
    Given the user has accessed the Google homepage
    And I accept cookies 

  Scenario: Verifiying page url
   Then the user is taken to the Google homepage

#   Scenario: Verifiying Google logo
#     Then the user can see the Google logo

#   Scenario: Verifiying the 'search bar'
#     Then the user can see the Search bar

#   Scenario Outline: Verify homepage button text
#     Then the "<option>" button is present
#     And the "<option>" button text is "<text>"

#     Examples:
#       | option   | text              |
#       | Search   | Google Search     |
#       | Refining | I'm Feeling Lucky |




# GIVEN a user has accessed the Google homepage via google.co.uk
# THEN the user is taken to the Google homepage


# GIVEN a user has accessed the Google homepage via google.co.uk
# THEN the user is displayed the google homepage
# Then I can see the Google logo
# AND the user can see a search bar in the middle of the screen
# AND the user can see 2 buttons labelled 'Google Search' and 'I'm Feeling Lucky'







# GIVEN a user has accessed the Google homepage
# WHERE the user has not signed in
# THEN the user is shown a 'Sign in' button on the top right corner

# GIVEN a user has accessed the Google homepage
# WHERE the user has signed in
# THEN the user is shown a 'My Google' button on the top right corner

# GIVEN a user has accessed the Google homepage
# WHERE the user has entered text on the search bar e.g Premier League football
# AND the user presses 'Google Search' button
# THEN the user is shown a new page listing results based on the search. Premier League Football results are displayed.
# AND search results are listed in order of relevance (may need to be specified)

# GIVEN a user has accessed the Google homepage
# WHERE the user has entered text on the search bar e.g Premier League football
# AND the user presses 'I'm Feeling Lucky' button
# THEN the user is taken to the website listed first on the Google search result (premierleague.com based on xxx)

