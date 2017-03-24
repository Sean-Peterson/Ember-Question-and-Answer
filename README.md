## Planning

1. Configuration/dependencies
  * Bootstrap: package.json
  * jQuery: package.json
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
  * Display update question form with `update-answer` component

4. UX/UI
  * Include and modify bootstrap/materialize/Sass etc.
  * Develop custom style

5. Polish
  * Refactor minor portion of index.hbs
  * Delete unused code
  * Make README awesome
