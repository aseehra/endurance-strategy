# Motivation

- Over the last 5 years or so, I've become a massive fan of sportscar racing.
- Races can last 24 hours, and keeping track of everything that is happening can
  be difficult.
- Strategy decisions are sometimes more interesting that the wheel-to-wheel
  action on track, for a not-insignificant portion of fans.

- Full-time commentators end up with reams of paper notes, or spreadsheets that
  they manually update, to help inform fans.

- Race organizations provide live timing data for fans, but it gets switched off
  at the end of a race
    - there is no way to look back at what happened and see whether a team won
      or lost a race on strategy.

# Goal

- Endurance Strategy Report (ESR)

- Allows you to look back on past races'. It is designed to be fed live-timing
  traces (by the site operator).

- The key difference is that it will perform analysis of lap times and pit stops
  to answer some of the questions that a fan has:
    - which of the drivers of a car were the fastest
    - did the car take too long in the pits
    - and were there any stints that were particularly problematic?

- Mobile first, because I'm often too lazy to grab a laptop when
  my phone is stuck in the couch cushions :D

# Demo

- Open with the /about landing page

- Show the list of races (that have been uploaded by the site operator)

- Click on a race. Design is similar to most timing displays for endurance
  races:
    - Position overall
    - Position in class
    - Team name
    - Last driver in the car
    - Car class
    - Car number

- Click on an entry

- Now we see the nitty gritty:
    - All the drivers in a car
    - All the pit stops
    - The stints and their lengths

- Show off responsive design here:
    - Stretch to show 2x2 layout
    - Shrink to show font sizes shrink, and names concatenate

- Search
    - Type in a digit of the car number, or some of the team name
    - Show that the query string is appended, so that users can navigate
      back/forth (especially imporant for mobile)
    - Clearing will respond immediate, along with new queries:
        - "re" => "ret"
    - Clicking on an entry clears the search box too!

# Tech Stack
## Frontend
- React/Redux/React-Router on Front End
- Enzyme + Jest
- CSS Grid, Flexbox for most of the layout

## Backend
- Express
- Jest + SuperTest
- Postgres + Knex.
    - Why? Because the joins are impressive.

# Code:
- Joins in entries.js
    - fastestLap
    - stintData - manually calculating the stint boundaries
- React is great for small components that do specific transformations:
    - DriverName: shortening names
    - TimeInterval: padding out and formatting a time from seconds
- FilterSearch:
    - Originally tried using <Redirect> with Redux state => race conditions
    - Punted and used history.push()
- PageTitle:
    - For some reason this is in the wrong place in my component tree, and as a
      result it is incredibly brittle and difficult to debug. It needs a major
      refactor.
    - See mapStateToProps (this is wrapped in a router)
- seeding data
    - Off by one error broke a substantial part of my code
    - Foreign key population was difficult at times

## Misc pain
- Knex and arrays
- Some last minute styling changes broke my separation of components vs.
  containers

# Future work
- Parse real live timing traces rather than faker data

- Comparisons

- Lap charts and pretty graphs

- Connect to a live timing system, and have the system update in real time.

- Improve styling. I'm terrible at design.
