# User stories

## Minimum viable product

#### Display & filter race entries
- As a user, I want to see a list of all race entries in their final position
- As a user, I want to be able to search for a particular entry so that I can
  access it easily
    - By driver
    - By car number

#### Show strategy details
- As a user, I want to click on a race entry so that I can see the details of
  their race strategy

###### Given that a user has clicked on a race entry
- As a user, I want to see all the drivers of a particular entry to see see if a
  particular driver is the weakest link
  - Average lap time per driver
- As a user, I want to see the pit stop times (per stint) so that I can
  determine if a car was sidelined in the garage at any point

## Extensions

#### Compare race statistics

- As a user, I want to be able to compare stints with another entry so that I
  can see where time was won/lost

#### Improved statistics
- As a user, I want to see the stints each driver has completed so that I can
  see if a particular driver is better at a particular point in the race
  - Average lap time per stint per driver
  - Fastest lap per driver per stint

#### Flagging information

- As a user, I want to see how many red- and yellow- flag periods there were
  (and their length) so that I can see at a glance if this was a "messy" race
- As a user, I want to see which stints and pit stops occurred under yellow
  flags, so I can see if race engineers made smart calls

#### Favorites
- As a user, I want to be able to favorite particular entries so that I can more
  easily find them in comparison dialogs
    - Local/Session Storage? IndexedDB?

#### Lap charts
- As a user, I want to see the entry's position over time so that I can
  determine the lap on a significant event concerning this entry occurred
  - Displayed as a chart (D3?)

#### Upload new race data
- As a superuser, I want to upload a "race replay" file so that I can build the
  strategy information for a completed race
  - Parse data from timing-data frames into pg database

#### Replay of race data
- As a super-user, I want to upload a "race replay" file and have the server
  replay it in real time so that I can simulate a live race/being connected to a
  3rd-party live-timing server
- As a super-user, I want to fast-forward to a particular point in the replay so
  that I can match it with an video/audio replay I am hosting
- As a user, I want to have up-to-date information so that I can follow the
  [simulated] live race
    - Poll via pressing "refresh button" or auto-refresh

#### Caching
- As an owner, I want the client to cache results to improve performance when
  switching between different views
- As an owner, I want the server to cache responses so that it doesn't need to
  hit the database as frequently

#### Connect to a live-timing server

_Blocked: No new races until January_

- As an owner, I want the backend to get data from a live-timing server so that
  users can see the strategy of a live race.
