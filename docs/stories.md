# User stories

## Minimum viable product

#### Upload race data
- As a superuser, I want to upload a "race replay" file so that I can build the
  strategy information for a completed race

#### Display & filter race entries
- As a user, I want to see a list of all race entries in their final position
- As a user, I want to be able to search for a particular entry so that I can
  access it easily
    - By driver
    - By car number

#### Show strategy details
- As a user, I want to click on a race entry so that I can see the details of
  their race strategy

##### Given that a user has clicked on a race entry
- As a user, I want to see the stints each driver has completed so that I can
  see if a particular driver is the weakest link
- As a user, I want to see the pit stop times (per stint) so that I can
  determine if a car was sidelined in the garage at any point
- As a user, I want to be able to compare stints with another entry so that I
  can see where time was won/lost

## Extensions

#### Favorites
- As a user, I want to be able to favorite particular entries so that I can more
  easily access their details

#### Lap charts
- As a user, I want to see the entry's position over time so that I can
  determine the lap on a significant event concerning this entry occurred
  - Displayed as a chart (D3?)

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
- As an owner, I want the client to cache results so that my backend does not
  fall over if users swap between entries/hit refresh often

## Post-capstone extensions

#### Flagging information _Blocked: Current race replay data does not include
complete flagging data_
- As a user, I want to see the periods where the race was run under yellow- or
  red-flags so that I can see at a glance if this was a "messy" race
- As a user, I want to see which stints and pit stops occurred under yellow
  flags, so I can see if race engineers made smart calls

#### Connect to a live-timing server _Blocked: No new races until January_
- As an owner, I want the backend to get data from a live-timing server so that
  users can see the strategy of a live race.
