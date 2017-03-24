import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },
    update(question) {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        notes: this.get('notes'),
      };
      this.set('updateQuestionForm', false);
      this.sendAction('update', question, params);
    },

    delete(model) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyQuestion', model);
      }
    },

    destroyAnswer(model) {
      this.sendAction('destroyAnswer', model);
    }
  }
});
