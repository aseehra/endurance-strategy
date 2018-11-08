# User stories

## Minimum Viable Product

### As a superuser:
- I want to upload a "race replay" file so that I can build the strategy
  information for a completed race

### As a user:
- I want to be able to search for a particular entry so that I can access it
  easily
    - By driver
    - By car number
- I want to click on a race entry to see the details of their race strategy

##### Given I have clicked on a race entry:
- I want to see the stints each driver has completed so that I can see if a
  particular driver is the weakest link
- I want to see the pit stop times (per stint) so that I can determine if a car
  was sidelined in the garage at any point
- I want to be able to compare stints with another entry so that I can see where
  time was won/lost

## Extensions

### As a user
- I want to be able to favorite particular entries so that I can more easily
  access their details
- I want to see the entry's position over time so that I can determine the lap
  on a significant event concerning this entry occurred
    - This could be a table, but ideally would be a chart (D3?)
- I want to have up-to-date information so that I can follow the [simulated]
  live race
    - Poll via pressing "refresh button"

### As a superuser
- I want to upload a "race replay" file and have the server replay it in real
  time so that I can simulate a live race/being connected to a 3rd-party
  live-timing server
- I want to fast-forward to a particular point in the replay so that I can match
  it with an video/audio replay I am hosting

### As an administrator
- I want the client to cache results so that my backend does not fall over if
  users hit the refresh button over and over again

## Post-capstone extensions

### As an administrator
- I want the backend to get data from a live-timing server so that users can see
  the strategy of a live race
  - *BLOCKED*: Cannot attempt until January when races start again :sad_face:

### As a user
- I want to see the periods where the race was run under yellow- or red-flags so
  that I can see at a glance if this was a "messy" race
    - *BLOCKED*: Need more information from live-timing servers than currently
      saved
- I want the app to auto-refresh so that I always have up-to-date information

##### Given I have clicked on a race entry
- I want to see which stints and pit stops occurred under yellow flags, so I can
  see if race engineers made smart calls
    - *BLOCKED*: Need more information from live-timing servers than currently
      saved
