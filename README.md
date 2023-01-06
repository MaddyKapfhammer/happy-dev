# happy-dev

An application for tracking the daily performance, productivity, and happiness of software developers

## Running happy-dev's current application

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

### Running happy-dev:

1. Clone this repository:
  - Using ssh: `git clone git@github.com:MaddyKapfhammer/happy-dev.git` 
  - Using https: `git clone https://github.com/MaddyKapfhammer/happy-dev.git`

2. Navigate to the `happy-dev-app` directory

3. In the `happy-dev-app` directory run `ng serve` for a dev server

4. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Future features:

**Productivity Focused**

- Daily to-do list
  - Metrics relating to how many of your daily tasks are completed (percentage completed per day, percentage completed per week, how many carry-over of tasks from one day to the next)
  - Categorized by personal, project, and "severity"
  - "Check-in" and "check-out" of tasks on to-do list (relates specifically to next bullet point)
  - Can add deadlines to tasks if necessary 
    - Will trigger reminder notifications relating to completing this task by the deadline

- Time Tracker 
  - Track time spent on certain tasks (on to-do list), developer can "check in" and "check out" of tasks to see how much time a developer spends on a task
  - Metrics relating to how much time is spent on what category/type of task
  - Metrics relating to how much time is spent on work-related vs personal tasks during the day
  - How much time is being "lost" during the 8-hour work day?

- Notes section: 
  - Available space for developer to take notes relating specifically for each task on their to-do list each day
  - Functionality for saving notes, modifying notes, and adding collaborators to notes (?)

_Question: Does time spent on a task relate to how often things are being "checked off" of a to-do list?_

**Happiness Focused**

- Daily happiness tracker/quiz 
  - Each day a developer will recieve a quiz of developer-focused questions to measure overall "happiness/fulfillment/enjoyment"
    - Questions will relate to: 
      - Current work tasks (whether developer is enjoying them or not, specifically what tasks bring joy and what tasks do not)
      - Fulfillment (relating to projects and overall involvement in work)
      - Level of feeling stressed/overwhelmed
      - Feeling of community between developers
  - Metric calculated from above questions to "measure" level of happiness

- Happiness analysis (generated from above tracker/quiz)
  - Weekly/monthly/yearly tracking of happiness levels (graphical representation?)
  - Happiness levels by project, task, season, day of the week etc.

_Question: Do developer happiness levels change relating to the type of project that they are working on? Do all developers have lower/higher happiness when doing certain tasks? Are the trends on a personal or company-wide level?_

**Dashboard**
- Insights relating to multitasking: how often is a developer working on multiple tasks at the same time?
- Graphical representation of time spent on tasks and happiness levels
- Interface to allow for creation, modification, and completion of tasks on daily to-do list 
- Interface for adding/removing notes 
- Daily reminders about tasks that have yet to be completed throughout the day 
- Insights relating to productivity based on time of day/project
- Perhaps developer can choose from a list of insights that they would like to be displayed on their dashboard???