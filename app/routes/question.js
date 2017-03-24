import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      question: this.store.findRecord('question', params.question_id),
      answer: this.store.findAll('answer')
    });
  },
  actions: {
    update(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          question.set(key,params[key]);
        }
      });
      question.save();
      this.transitionTo('index');
    },

    destroyQuestion(question) {
      question.destroyRecord();
      this.transitionTo('index');
    },

    saveAnswer(params, question_id) {
      var newAnswer = this.store.createRecord('answer', params);
      newAnswer.save();
      this.transitionTo(this.route('question', {path: '/question/:'question_id}););
    }
  }

});
