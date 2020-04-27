#  Sennder Test Automatino Framework
Welcome to Sennder test automation framework
Framework: Mocha using Webdriver IO
Pattern: Page Object Pattern
Assertions: Chai
Style: BDD

## QA Challenge file
The PDF file consist of the challenge is located [here](/test/docs/QA Challenge.pdf)

## Setup
This requires node version v12.16.2 to be installed 
To install node visit
```https://nodejs.org/en/download/```

Yarn to be installed
To install yarn
```https://yarnpkg.com/getting-started/install```

## How to run the tests

To run the test, install the dependencies.
While running the below command, select chromedriver version as per your chome version installed.

```
yarn install

```
Run the task from the root using the below commands.

```
yarn test

```

## Execution Status of spec reporter

First time execution will show the the below message
```
INFO:
Autosaved the image to
{directory_path}\qa-task-sennder\test\data\desktop_chrome\fullPage--1050x840.png
```
![See Image](test\docs\image_autosave.jpg)

As per the smoke test plan each expected result is converted into a test case.
And the steps in between are mentioned as in the test case title to make it understandable.

![See Image](test\docs\spec_reporter_results.jpg)

## Note:
Just for the assignment purpose the usrname and password are mentioned in the test case.
In actual implementation we can move this to ENV variable or some other place.