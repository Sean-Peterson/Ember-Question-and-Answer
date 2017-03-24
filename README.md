# Question and Answer

Question and Answer (Q&A) is the result from an Epicodus solo project designed to test my ability to create a site using ember. Q&A gives users the ability to post questions and answer questions that have been submitted by other users. 3/24/17

## Prerequisites

You will need the following properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd Ember-Question-and-Answer`
* `npm install`
* `bower install`
* `ember install emberfire`
* `ember install ember-bootstrap`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

## Planning

  1. Configuration/dependencies
    * Bootstrap: package.json
    * emberfire: package.json
    * All other other dependencies are installed by Ember and located in package.json

  2. Specs
    * Spec 1: User can create and save a new question
    * Spec 2: User can edit and delete questions
    * Spec 3: User can navigate to individual questions
    * Spec 4: User can add answers to questions
    * Spec 5: User can edit and delete questions

  3. Integration
    * Initial routes or index pages with all dependencies in Controller/index.html head
    * Template/html page for `index`
    * Template/html page for `about`
    * Template/html page for `contact`
    * Template/html page for `new-question`
    * Template/html page for `question`
    * Display all questions on index with `question-tile` component
    * Display individual question content with `question-detail` component
    * Display update question form with `update-question` component
    * Display answers with `answer-tile` component
    * Display new answer form with `new-answer` component
    * Display update question form with `answer-tile` component

  4. UX/UI
    * Include and modify bootstrap/materialize/Sass etc.
    * Develop custom style

  5. Polish
    * Refactor minor portion of index.hbs, question.hbs
    * Delete unused code
    * Make README awesome

## Technologies Used
    * **HTML**: Hypertext Markup Language, a standardized system for tagging text files to achieve font, color, graphic, and hyperlink effects on World Wide Web pages.
    * **CSS**: The Cascading Style Sheets Specification is a computer language that is used to write formatting instructions.
    * **JavaScipt**: An object-oriented computer programming language commonly used to create interactive effects within web browsers.
    * **Ember**: Ember.js is an open-source JavaScript web framework, based on the Model–view–viewmodel (MVVM) pattern. It allows developers to create scalable single-page web applications by incorporating common idioms and best practices into the framework.
    * **npm**: A NodeJS package manager. You can use it to install node programs. Also, if you use it in development, it makes it easier to specify and link dependencies.
    * **Bower**: Is a package manager for keeping track of what you've installed, as well as installing and upgrading packages.
    * **JSON**: (JavaScript Object Notation) is a lightweight data-interchange format.
