
Note Taker
Note Taker is an application that allows users to write and save notes. It uses an Express.js back end to save and retrieve note data from a JSON file.

Table of Contents
User Story
Acceptance Criteria
Installation
Usage
License
Contributing
Tests
User Story
css
Copy code
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
Acceptance Criteria
css
Copy code
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
Installation
To use Note Taker, first clone the repository from GitHub. Then, navigate to the root directory of the project in the terminal and run the following command to install the necessary dependencies:

Copy code
npm install
Usage
To start the server, run the following command in the terminal:

sql
Copy code
npm start
This will start the server and make the application available at http://localhost:3001.

Once the application is running, click on the "Get Started" button to go to the Notes page. Here you can view and add notes. To add a new note, click on the pencil icon in the top right corner and enter a title and text for your note. Click on the save icon to save the note. To view an existing note, click on its title in the left-hand column.

License
This project is licensed under the MIT license.

Contributing
Contributions to this project are welcome. To contribute, clone the repository and create a new branch for your feature or bug fix. Make your changes, commit them, and push your branch to GitHub. Then open a pull request and describe your changes.

Tests
There are currently no tests for this application.