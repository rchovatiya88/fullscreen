# FullScreen Test Framework
> Setup Instructions and General Information.


## How to run automated tests locally
[Pre-requistes] :tada:
- Node.js and Mac, 
- For Windows, change chromedriver to Chromedriver.exe

1. `Git Clone` git@github.com:rchovatiya88/fullscreen.git
2. Cd into project -  `npm install`
3. Run test - `npm test`

## To Run specific Tests 


* Google Homepage Validation

`node nightwatch -e chrome -a homepage`


*_To Run all basis regression and functionality all at once_*

`node nightwatch -e chrome -a`  



**Flags**
* -e = which environment like chrome / firefox etc 
* -a = @tag of test case name
* -g = group of tests
* --reporter --html-reporter = To run Test Case Reporting.


Test Plan
===================

Objective 

    
Using Automation Test Framework and programming language of your choice (JavaScript preferred) write up e2e test suite for https://google.com website. Apply test automation best practices. In the format of your choice include instructions on how to set up test framework and run your test locally.
    
**Cover following test cases**

* Web page has elements:
  * Google logo (or whatever custom image above the search bar)
     - `google/homepage.js`
  * Search entry field 
    - `tests/google/homepage.js`
  * Sign in button 
    - `tests/google/homepage.js`
  * I'm Feeling Lucky button
     - `tests/google/homepage.js`
* User can't sign in with invalid credentials (please use non-existing google username)
     - `tests/google/signin.js`

* Search is functional:
  * Trigger search using `fullscreen` keywords 
    - `tests/fullscreen/search.js`
  * Verify results page displays more than five results
    - `tests/fullscreen/search.js`
  * Verify that first search result has URL: `fullscreenmedia.co`
    - `tests/fullscreen/search.js`
  * Verify that clicking first search result does redirect to Fullscreen Media website
    - `tests/fullscreen/search.js`

* FullScreen Smoke test:
    * Verify Homepage Links work.
        - `tests/fullscreen/smoketests.js` 
    * Take Screenshot and Scroll
         - `tests/fullscreen/smoketests.js` 
